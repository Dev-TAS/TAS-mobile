import React, { useEffect, useState } from 'react'
import { Keyboard, Route, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton, RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';

import styles from '../Login/styles';

import { FontAwesome5 } from '@expo/vector-icons';

import api from '../../services/api'

function Login(props:Route) {
    const [logIn, setLogIn] = useState('');
    const [password, setPassword] = useState('');
    const {navigate} = useNavigation();
    const connectionType = props.route.params.connectionType;
    const [isTitleContainerVisible, setIsTitleContainerVisible] = useState(true);

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
      setIsTitleContainerVisible(false);
    };
  
    const _keyboardDidHide = () => {
      setIsTitleContainerVisible(true);
    };


    function handleNavigateToCreateAccount() {
      navigate('CreateAccount', {connectionType});
    }

    function handleNavigateToLanding(account_id: number) {
      navigate('Landing', {account_id, connectionType});
    }

    async function handleLoginSubmit() {
      let table = ''
      connectionType ? table = 'userAccounts' : table = 'companyAccounts'
      const response = await api.get(table, {
        params: {
          logIn,
          password
        }
      })

      if(response.data[0] === true) {
        const account_id = response.data[1];
        handleNavigateToLanding(account_id);
      } else {
        console.log(response.data);
      }
    }

    return (
      <>
        {isTitleContainerVisible &&
          <View style={[styles.titleContainer, connectionType ? styles.titleContainerUser : styles.titleContainerCompany]}>
            <FontAwesome5 name={connectionType ? "user-alt" : "building"} size={110} color="white" />
            <Text style={styles.titleText}>{connectionType ? 'Usuário' : 'Empresa'}</Text>
          </View>
        }

        <View style={styles.formContainer}>
          <ScrollView>
            <View style={styles.createAccountContainer}>
              <Text style={styles.loginText}>Login</Text>
              <BorderlessButton>
                <Text 
                  style={[styles.createAccountButtonText, connectionType ? styles.createAccountButtonTextUser : styles.createAccountButtonTextCompany]}
                  onPress={handleNavigateToCreateAccount}
                  >
                  Criar Conta
                </Text>
              </BorderlessButton>
            </View>

            <View style={styles.inputContainer}>
              <TextInput 
                style={[styles.input, styles.input1]}
                placeholder='Login ou E-mail'
                value={logIn}
                onChangeText={ (text) => setLogIn(text) }
                />

              <TextInput 
                style={[styles.input, styles.input2]}
                placeholder='Senha'
                value={password}
                onChangeText={ (text) => setPassword(text) }
                />
            </View>
            <RectButton 
              style={[styles.loginButton, connectionType ? styles.loginButtonUser : styles.loginButtonCompany]}
              onPress={handleLoginSubmit}
              >
              <Text style={styles.loginButtonText}>Entrar</Text>
            </RectButton>
          </ScrollView>
        </View>
      </>
    )
}
export default Login;