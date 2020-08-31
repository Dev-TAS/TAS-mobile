import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';

import logo from '../../assets/images/logo2.png'
import instagramIcon from '../../assets/images/instagramIcon.png'
import SvgTest from '../../assets/images/svgTest'

import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 

import styles from './styles';

function Welcome() {
  return(
    <>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logoImage} />
        <Text style={styles.title}>Tecnologia Ambiental e {'\n'}Sustentabilidade</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Seja bem vindo!{'\n'}
          <Text style={styles.welcomeBold}>O que deseja fazer?</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={undefined}
            style={[styles.button, styles.buttonPrimary]}
          >
            <View style={styles.svgMargin}>
              <SvgTest />
            </View>
            <Text style={[styles.buttonText, styles.buttonTextPrimary]}>Locais de Reciclagem</Text>
          </RectButton>

          <RectButton
            onPress={undefined}
            style={[styles.button, styles.buttonSecondary]}
          >
            <FontAwesome name="question-circle-o" size={78} color="white" />
            <Text style={[styles.buttonText, styles.buttonTextSecondary]}>Sobre nós</Text>
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
            <FontAwesome name="twitter-square" size={40} color="black" />
          </BorderlessButton>

          <BorderlessButton>
            <Image source={instagramIcon} resizeMode='contain'/>
          </BorderlessButton>
        </View>
      </View>
    </>
  );
}

export default Welcome;