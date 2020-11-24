import React, { useEffect, useState } from 'react'
import { Alert, Keyboard, Route, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton, RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';

import styles from './styles';

import { FontAwesome5 } from '@expo/vector-icons';

import api from '../../services/api'
import { CnpjMask, CpfMask } from '../../assets/masks';

function Login(props:Route) {
  const connectionType = props.route.params.connectionType;

  //#region UseState
    const [cpfOrCnpj, setCpfOrCnpj] = useState('');
    const [password, setPassword] = useState('');
    const {navigate} = useNavigation();
    const [isTitleContainerVisible, setIsTitleContainerVisible] = useState(true);
  //#endregion UseState

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
      setIsTitleContainerVisible(false);
    };
    
    const _keyboardDidHide = () => {
      setIsTitleContainerVisible(true);
    };
  //#endregion KeyBoard

  //#region Navigate
    function handleNavigateToCreateAccount() {
      navigate('CreateAccount', {connectionType});
    }

    function handleNavigateToLanding(account_id: number) {
      navigate('Landing', {account_id, connectionType});
    }
  //#endregion Navigate

  async function handleLoginSubmit() {
    let table = ''
    connectionType ? table = 'userAccounts' : table = 'companyAccounts'
    const response = await api.get(table, {
      params: {
        cpfOrCnpj,
        password
      }
    })

    if(response.data[0] === true) {
      const account_id = response.data[1];
      handleNavigateToLanding(account_id);
    } else {
      Alert.alert('Alerta!', 'Conta ou senha incorretos!');
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
              placeholder={connectionType? 'CPF' : 'CNPJ'}
              value={cpfOrCnpj}
              maxLength={connectionType? 14 : 18}
              keyboardType={"numeric"}
              onChangeText={ (text) => setCpfOrCnpj(connectionType? CpfMask(text) : CnpjMask(text)) }
              />

            <TextInput 
              style={[styles.input, styles.input2]}
              placeholder='Senha'
              secureTextEntry={true}
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