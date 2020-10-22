import React, { useEffect, useState } from 'react'
import { Keyboard, Route, Text, View } from 'react-native';
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';

import styles from './styles'

function CreateCoupons(props:Route) {
  const [points, setPoints] = useState(1000);
  const [isInfoTextVisible, setIsInfoTextVisible] = useState(true);
  const [pointsToConvert, setPointsToConvert] = useState('');
  const [pointsConverted, setPointsConverted] = useState('R$ 0,00');

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

  return (
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
      >
        <Text style={styles.buttonText}>Criar cupom</Text>
      </RectButton>
    </ScrollView>
   
  );
}

export default CreateCoupons;