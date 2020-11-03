import React from 'react'
import { Image, Text, View } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles'

import Logo from '../../assets/images/logo.png'
import { FontAwesome5 } from '@expo/vector-icons';

function Welcome() {
  const { navigate } = useNavigation();

  function hadleNavigateToUserLogin() {
    navigate('Login', {connectionType: true})
  }

  function hadleNavigateToCompanyLogin() {
    navigate('Login', {connectionType: null})
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logoImage}/>
        <Text style={styles.logoText}>Coleta Amiga</Text>
      </View>
      <View>
        <Text style={styles.welcomeText}>Seja bem vindo! {'\n'}
          <Text style={styles.welcomeTextBold}>Deseja se conectar como:</Text>
        </Text>
        <View style={styles.buttonsContainer}>
          <RectButton 
            style={[styles.button, styles.buttonPrimary]}
            onPress={hadleNavigateToUserLogin}
          >
            <FontAwesome5 name="user-alt" size={80} color="white" />
            <Text style={styles.buttonText}>Usuário</Text>
          </RectButton>

          <RectButton 
            style={[styles.button, styles.buttonSecondary]}
            onPress={hadleNavigateToCompanyLogin}
          >
            <FontAwesome5 name="building" size={80} color="white" />
            <Text style={styles.buttonText}>Empresa</Text>
          </RectButton>
        </View>
      </View>
      
      <BorderlessButton style={styles.aboutUsButton}>
        <FontAwesome5 name="question-circle" size={50} color="white" />
        <Text style={styles.buttonText}>Sobre nós</Text>
      </BorderlessButton>
    </View>
  )
}

export default Welcome;