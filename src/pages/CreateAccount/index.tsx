import { useNavigation } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import { Alert, Keyboard, Route, Text, View } from 'react-native';
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';
import { CnpjMask, CpfMask } from '../../assets/masks';
import api from '../../services/api';

import styles from './styles'

function CreateAccount(props:Route) {
  const {navigate} = useNavigation();
  const connectionType = props.route.params.connectionType;

  function handleNavigateToCreateAccountSuccess() {
    navigate('CreateAccountSuccess', {connectionType});
  }
  
  //#region UseState
  const [cpfOrCnpj, setCpfOrCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isTitleContainerVisible, setIsTitleContainerVisible] = useState(true);
  //#endregion

  //#region Keyboard
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
  //#endregion Keyboard

  //#region Verify
  function handleCpfOrCnpjVerify() {
    if(connectionType) {
      if(cpfOrCnpj !== '') {
        if(cpfOrCnpj.length > 10) {
          return '';
  
        } else {
          return('Seu CPF deve conter 11 dígitos!')
        }
      } else {
        return('CPF Vazio!')
      }
    } else {
      if(cpfOrCnpj !== '') {
        if(cpfOrCnpj.length > 13) {
          return '';
  
        } else {
          return('Seu CNPJ deve conter 14 dígitos!')
        }
      } else {
        return('CNPJ Vazio!')
      }
    }
  }

  function handleEmailVerify() {
    if(email !== '') {
      if(email.length > 11) {
        return '';

      } else {
        return('Seu email é inválido!')
      }
    } else {
      return('E-mail Vazio!')
    }
  }

  function handlePasswordVerify() {
    if(password !== '') {
      if(password.length >= 6) {
        if(password === confirmPassword) {
          return '';
        } else {
          return('Sua confirmação de senha não condiz com sua senha!')
        }
      } else {
        return('Sua senha deve conter no mínimo 6 dígitos!')
      }
    } else {
      return('Digite uma senha!')
    }
  }

  async function handleAccountVerify() {
    const verify = [handleCpfOrCnpjVerify(), handleEmailVerify(), handlePasswordVerify()]
    let confirmVerify = true;
    let message = ''

    verify.forEach(element => {
      if(element !== '') {
        confirmVerify = false;
        message += element + '\n'
      }
    });
    
    if(confirmVerify === true && message === '') {
      let table = ''
      connectionType ? table = 'userAccounts' : table = 'companyAccounts'
      const logInResponse = await api.get(table, {
        params: {
          cpfOrCnpj
        }
      })

      const emailResponse = await api.get(table, {
        params: {
          email
        }
      })
      console.log(logInResponse.data, emailResponse.data)
      if(logInResponse.data !== 1 && emailResponse.data !== 1) {
        await api.post(table, {
          cpfOrCnpj,
          email,
          password
        }).then( () => {
          handleNavigateToCreateAccountSuccess();
        }).catch( () => {
          alert('Erro no cadastro!');
        })
      } else {
        Alert.alert('Alerta!', 'Esse usuário já existe!')
      }
    } else {
      Alert.alert('Alerta!', message);
    }
  }
  //#endregion Verify

  return (
    <>
      {isTitleContainerVisible &&
        <View style={[styles.titleContainer, connectionType ? styles.titleContainerUser : styles.titleContainerCompany]}>
          <Text style={styles.titleText}>Que bom que quer{'\n'}se juntar a nós!</Text>
        </View> 
      }
      <View style={styles.createAccountContainer}>
        <ScrollView style={{flex: 1}}>
          <Text style={styles.createAccountText}>Criar Conta</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, styles.input1]}
              placeholder={connectionType? 'CPF, apenas números' : 'CNPJ, apenas números'}
              maxLength={connectionType? 14 : 18}
              value={cpfOrCnpj}
              keyboardType={"numeric"}
              onChangeText={ (text) => setCpfOrCnpj(connectionType? CpfMask(text) : CnpjMask(text)) }
            />

            <TextInput 
              style={styles.input}
              placeholder='Email'
              value={email}
              onChangeText={ (text)  => setEmail(text) }
            />

            <TextInput 
              style={styles.input}
              placeholder='Senha'
              secureTextEntry={true}
              value={password}
              onChangeText={ (text)  => setPassword(text) }
            />

            <TextInput 
              style={[styles.input, styles.input2]}
              placeholder='Confirmar Senha'
              value={confirmPassword}
              secureTextEntry={true}
              onChangeText={ (text)  => setConfirmPassword(text) }
            />
          </View>
          <RectButton style={[styles.registerButton, connectionType ? styles.registerButtonUser : styles.registerButtonCompany]}
            onPress={handleAccountVerify}
          >
            <Text style={styles.registerButtonText}>Cadastrar</Text>
          </RectButton>
        </ScrollView>
      </View>
    </>
  );
}
export default CreateAccount;