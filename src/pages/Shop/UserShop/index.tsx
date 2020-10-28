import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 

import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import api from '../../../services/api';

interface UserShopProps {
  account_id: number
  connectionType: boolean
}

const UserShop: React.FC<UserShopProps> = ( {account_id, connectionType} ) => {
  const {navigate} = useNavigation();
  const [points, setPoints] = useState();

  function handleNavigateToCreateCoupons() {
    navigate('CreateCoupons', {account_id, connectionType});
  }

  async function handleReturnPoints() {
    const returnPoints = await api.get('users', {
      params: {
        account_id
      }
    })

    const points = returnPoints.data[0].points;
    console.log(points);

    setPoints(points);
  }

  useEffect( () => {
    handleReturnPoints();
  }, [] );

  return (
    <>
      <View style={styles.titleContainer}>

      </View>
      <View style={styles.container}>
        <Text style={styles.text}>
          Meus Pontos: <Text style={styles.textPink}>{points}</Text>
        </Text>

        <Text style={styles.text}>O que deseja fazer?</Text>

        <View style={styles.buttonsContainer}>
          <RectButton 
            style={[styles.button, styles.buttonCupom]}
            onPress={handleNavigateToCreateCoupons}
          >
            <AntDesign name="barcode" size={80} color="white" />
            <Text style={styles.buttonText}>Cupom de desconto</Text>
          </RectButton>

          <RectButton style={[styles.button, styles.buttonShop]}>
            <Entypo name="shop" size={80} color="white" />
            <Text style={styles.buttonText}>Produtos</Text>
          </RectButton>
        </View>
      </View>
    </>
  );
};

export default UserShop;