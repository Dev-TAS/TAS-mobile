import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import Logo from '../../assets/images/logo2.png'
import InstagramIcon from '../../assets/images/instagramIcon.png'
import RecicleIcon from '../../assets/images/recicleIcon'

import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';  

import styles from './styles';

function Welcome() {
  const { navigate } = useNavigation();

  function handleNavigateToSearchLocation() {
    navigate('SearchLocation')
  }

  return(
    <>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logoImage} />
        <Text style={styles.title}>Tecnologia Ambiental e {'\n'}Sustentabilidade</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Seja bem vindo!{'\n'}
          <Text style={styles.welcomeBold}>O que deseja fazer?</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={handleNavigateToSearchLocation}
            style={[styles.button, styles.buttonPrimary]}
          >
            <View style={styles.svgMargin}>
              <RecicleIcon />
            </View>
            <Text style={[styles.buttonText, styles.buttonTextPrimary]}>Locais de Reciclagem</Text>
          </RectButton>

          <RectButton
            onPress={undefined}
            style={[styles.button, styles.buttonSecondary]}
          >
            <MaterialCommunityIcons name="office-building" size={78} color="white" />
            <Text style={styles.buttonText}>Cadastre sua empresa</Text>
          </RectButton>
        </View>
      </View>

      <View style={styles.socialMediasContainer}>
        <Text style={styles.socialMediasText}>Nos acompanhe em todo lugar!{'\n'} Redes sociais:</Text>
        <View style={styles.socialMediasButtonsContainer}>
          <BorderlessButton>
            <FontAwesome5 name="facebook-square" size={40} color="#3b5998" />
          </BorderlessButton>

          <BorderlessButton>
            <FontAwesome name="twitter-square" size={40} color="#08A0E9" />
          </BorderlessButton>

          <BorderlessButton>
            <Image source={InstagramIcon} resizeMode='contain'/>
          </BorderlessButton>
        </View>
      </View>
    </>
  );
}

export default Welcome;