import React from 'react'
import { Dimensions, Route, Text, View } from 'react-native';


import styles from './styles'

import PlantSVG from '../../assets/images/plantSVG'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function CreateAccountSuccess(props:Route) {
  const {navigate} = useNavigation();
  const connectionType = props.route.params.connectionType;

  function handleNavigateToLogin() {
    navigate('Login', {connectionType})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cadastro efetuado com sucesso</Text>
      <PlantSVG width='100%' height={(Dimensions.get("window").height / 3)} margin={40}/>
      <Text style={styles.text}>Juntos, podemos tornar {'\n'}o mundo um lugar melhor!</Text>
      <RectButton 
        style={styles.button}
        onPress={handleNavigateToLogin}
      >
        <Text style={styles.textButton}>Ir para Login</Text>
      </RectButton>
    </View>
  );
}

export default CreateAccountSuccess;