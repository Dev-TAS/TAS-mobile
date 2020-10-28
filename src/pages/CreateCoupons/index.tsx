import moment, { tz } from 'moment';
import React, { useEffect, useState } from 'react'
import { Keyboard, Route, Text, View } from 'react-native';
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';
import 'moment-timezone';

import CouponItem, {Coupon} from '../../components/CouponItem'
import api from '../../services/api';

import styles from './styles'

function CreateCoupons(props:Route) {
  const account_id = props.route.params.account_id;
  const [points, setPoints] = useState(0);
  const [isInfoTextVisible, setIsInfoTextVisible] = useState(true);
  const [pointsToConvert, setPointsToConvert] = useState('');
  const [pointsConverted, setPointsConverted] = useState('R$ 0,00');
  const [isCouponVisible, setIsCouponVisible] = useState(false);
  const [coupon, setCoupon] = useState({
    code: '',
    points: '',
    remainedPoints: '',
    value: '',
    status: '',
    date: '',
    account_id 
  })

  //#region KeyBoard
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
  
    // cleanup function
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);
  
  const _keyboardDidShow = () => {
    setIsInfoTextVisible(false);
  };
  
  const _keyboardDidHide = () => {
    setIsInfoTextVisible(true);
  };
//#endregion KeyBoard

  function convertPointsToMoney(text: string) {
    setPointsToConvert(text)
    if(text !== '') {
      const value = parseInt(text);
      const convert = (value / 100).toFixed(2).slice(-6)
      setPointsConverted('R$ ' + convert.replace('.', ','));
    } else {
      setPointsConverted('R$ 0,00')
    }
  }

  async function handleReturnPoints() {
    const returnPoints = await api.get('users', {
      params: {
        account_id
      }
    })

    const points = returnPoints.data[0].points;

    setPoints(points);
  }

  function verifyValue() {
    if(points >= parseInt(pointsToConvert)) {
      return true;
    } else {
      return false;
    }
  }

  function createCouponCode() {
    const n = Math.random().toString(36).substring(7);
    return n;
  }

  function handleCalculateRemainedPoints() {
    const remainedPoints = points - parseInt(pointsToConvert);
    return remainedPoints.toString();
  }

  async function saveCoupon() {
    const verify = verifyValue();
    if(verify) {
      const code = createCouponCode();
      const date = (tz('America/Sao_Paulo'). format('HH:mm:ss DD/MM/YYYY')).toString();

      await api.post('coupons', {
        code,
        points: pointsToConvert,
        value: pointsConverted,
        status: 'Ativo',
        date,
        account_id
      }).then( () => {
        const coupon: Coupon = {
          code,
          points: pointsToConvert,
          remainedPoints: handleCalculateRemainedPoints(),
          value: pointsConverted,
          status: 'Ativo',
          date,
          account_id
        }

        setCoupon(coupon);
        setIsCouponVisible(true);
      })
    }
  }

  useEffect( () => {
    handleReturnPoints();
    console.log()
  }, [] );

  return (
    <View style={{flex: 1}}>
      {!isCouponVisible &&
        <ScrollView style={styles.container}>
          <Text style={styles.text}>
            Meus pontos: <Text style={[styles.text, styles.textPink]}>{points}</Text>
          </Text>
          
          {isInfoTextVisible &&
            <View style={styles.infoContainer}>
              <Text style={[styles.text, styles.textInfo]}>
                Você pode inserir o{'\n'}
                código gerado{'\n'}
                abaixo na sua conta{'\n'}
                de luz ou água para{'\n'}
                ganhar desconto{'\n'}
                proporcional ao valor{'\n'}
                informado
              </Text>
            </View>
          }
    
          <Text 
            style={[styles.textInfo, styles.text, styles.textPink]}>
            Conversão:  1 ponto =  1 centavo{'\n'}
            Conversão mínima:  100 pontos
          </Text>
    
          <Text style={[styles.textInfo, styles.text]}>Insira a quantidade de pontos</Text>
          <TextInput 
            style={styles.input}
            value={pointsToConvert}
            keyboardType='numeric'
            maxLength={5}
            onChangeText={ (text) => convertPointsToMoney(text)}
          />
    
          <Text style={[styles.textInfo, styles.text]}>Conversão em reais</Text>
          <TextInput
            style={styles.input}
            value={pointsConverted}
            focusable={false}
          />
    
          <RectButton
            style={styles.button}
            onPress={saveCoupon}
          >
            <Text style={styles.buttonText}>Criar cupom</Text>
          </RectButton>
        </ScrollView> 
      }
    {isCouponVisible &&
      <>
        <CouponItem coupon={coupon} />
        <View style={styles.buttonCouponContainer}>
          <RectButton style={styles.buttonCoupon}>
            <Text style={styles.buttonCouponText}>Voltar</Text>
          </RectButton>
        </View>
      </>
    }
    </View>
  );
}

export default CreateCoupons;