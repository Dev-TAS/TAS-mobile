import React, { useState } from 'react';
import { View, Text, Image, Route } from 'react-native';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import Logo from '../../assets/images/logo.png'
import InstagramIcon from '../../assets/images/instagramIcon.png'
import RecicleIcon from '../../assets/images/recicleIcon'

import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';   

import styles from './styles';

import api from '../../services/api';

function Landing(props:Route) {
  const { navigate } = useNavigation();
  const [isRegisterExists, setIsRegisterExists] = useState(true);
  const connectionType = props.route.params.connectionType;
  const account_id = props.route.params.account_id;
  let company_id: number;
  let profileImage = undefined;

  async function handleRegisterVerify() {
    let table = ''
    connectionType ? table = 'users' : table = 'companies'
    const response = await api.get(table, {
      params: {
        account_id
      }
    })
    response.data[0] ? [setIsRegisterExists(true), company_id = response.data[0].id, profileImage = response.data[0].data]
    : setIsRegisterExists(false)
  }
  
  function handleNavigateToSearchLocation() {
    navigate('SearchLocation')
  }
  
  function handleNavigateToProfile() {
    navigate('Profile', {account_id, connectionType})
  }

  function handleNavigateToLocations() {
    navigate('Locations', {company_id, account_id})
  }

  function handleNavigateToShop() {
    navigate('Shop', {account_id, connectionType});
  }

  handleRegisterVerify();

  if(isRegisterExists) {
    return(
      <>
        <View style={[styles.logoContainer, connectionType ? styles.logoContainerUser : styles.logoContainerCompany]}>
          <BorderlessButton 
            style={styles.profileButton}
            onPress={handleNavigateToProfile}
          >
            <Image 
              style={styles.profileImage}
              source={ {uri:'https://img2.gratispng.com/20180413/wze/kisspng-beta-tester-software-testing-beta-verzia-computer-arc-5ad062da3d5527.2574186515236062342512.jpg'} }
            />
          </BorderlessButton>
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
              onPress={ connectionType ? handleNavigateToSearchLocation : handleNavigateToLocations}
              style={[styles.button, styles.buttonPrimary]}
            >
              <View style={styles.svgMargin}>
                <RecicleIcon />
              </View>
              <Text style={[styles.buttonText, styles.buttonTextPrimary]}> {connectionType ? 'Locais de Reciclagem' : 'Meus Locais'}</Text>
            </RectButton>
  
            <RectButton
              style={[styles.button, styles.buttonSecondary]}
              onPress={handleNavigateToShop}
            >
              <Entypo name="shop" size={80} color="white" />
              <Text style={styles.buttonText}>Loja virtual</Text>
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
  } else {
    return(
        <View style={[styles.registerContainer, connectionType ? styles.registerContainerUser : styles.registerContainerCompany]}>
          <Text style={styles.registerText}>Você ainda não{'\n'}registrou seus dados!</Text>
          <RectButton 
          style={[styles.registerButton, connectionType ? styles.registerButtonUser : styles.registerButtonCompany]}
          onPress={handleNavigateToProfile}
          >
            <Text style={styles.registerButtonText}>Registrar agora</Text>
          </RectButton>
        </View>
    );
  }
}

export default Landing;