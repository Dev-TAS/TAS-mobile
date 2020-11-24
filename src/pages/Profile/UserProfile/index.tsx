import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';
import { PhoneNumberMask } from '../../../assets/masks';

import api from '../../../services/api';

import styles from './styles';

interface UserProfileProps {
  account_id: number
  connectionType: boolean
}

const UserProfile: React.FC<UserProfileProps> = ( {account_id, connectionType} ) => {
  const {navigate} = useNavigation();
  const [profile, setProfile] = useState(undefined);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  function handleNameVerify() {
    if(name.length > 4) {
      return true
    }
  }

  async function handleProfileVerify() {
    const returnProfile = await api.get('users', {
      params: {
        account_id
      }
    });

    if(returnProfile.data[0] !== undefined) {
      const profile = returnProfile.data[0]
      setProfile(profile);
      setName(profile.name);
      setEmail(profile.email);
      setPhone(profile.phone);
      setWhatsapp(profile.whatsapp);
      setState(profile.state);
      setCity(profile.city);
    }
  }

  async function handleRegisterProfile() {
    await api.post('users', {
      name,
      email,
      phone,
      whatsapp,
      avatar: 'https://img2.gratispng.com/20180413/wze/kisspng-beta-tester-software-testing-beta-verzia-computer-arc-5ad062da3d5527.2574186515236062342512.jpg',
      state,
      city,
      account_id,
      points: 10000
    }).then( () => {
      navigate('Landing', {account_id, connectionType})
    }).catch( () => {
      alert('Erro no cadastro!');
    })   
  }

  async function handleUpdateProfile() {
    await api.put('users', {
      name,
      email,
      phone,
      whatsapp,
      avatar: 'https://img2.gratispng.com/20180413/wze/kisspng-beta-tester-software-testing-beta-verzia-computer-arc-5ad062da3d5527.2574186515236062342512.jpg',
      state,
      city,
      account_id
    }).then( () => {
      navigate('Landing', {account_id, connectionType})
    }).catch( () => {
      alert('Erro no cadastro!');
    })
  }

  function saveProfile() {
    const nameVerif = handleNameVerify();
    if(nameVerif === true) {

      if(profile === undefined) {
        handleRegisterProfile();
      } else {
        handleUpdateProfile();
      }
    }
  }

  useEffect( () => {
    handleProfileVerify();
  }, []);
  
  return(
    <>
      <View style={styles.titleContainer}>
        <Image 
          style={styles.image}
          source={ {uri:'https://img2.gratispng.com/20180413/wze/kisspng-beta-tester-software-testing-beta-verzia-computer-arc-5ad062da3d5527.2574186515236062342512.jpg'} } 
        />
      </View>
      <View style={styles.formContainer}>
        <ScrollView>
          <Text style={styles.inputText }>Nome Completo</Text>
          <TextInput
            style={styles.input}
            placeholder='Ex: Lucas de Oliveira'
            value={name}
            maxLength={40}
            onChangeText={ (text) => setName(text) }
          />

          <Text style={styles.inputText }>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder='Ex: user123@mail.com'
            value={email}
            maxLength={40}
            onChangeText={ (text) => setEmail(text) }
          />

          <Text style={styles.inputText }>Telefone de contato:</Text>
          <TextInput 
            style={styles.input}
            value={phone}
            placeholder="incluindo DDD"
            keyboardType={'numeric'}
            maxLength={14}
            onChangeText={ (text) => setPhone(PhoneNumberMask(text)) }
          />

          <Text style={styles.inputText }>WhatsApp</Text>
          <TextInput 
            style={styles.input}
            value={whatsapp}
            placeholder="incluindo DDD"
            keyboardType={'numeric'}
            maxLength={14}
            onChangeText={ (text) => setWhatsapp(PhoneNumberMask(text)) }
          />

          <View style={styles.inputStateContainer}>
            <View style={styles.inputStateContainerItem}>
              <Text style={styles.inputText }>Estado</Text>
              <TextInput
                style={styles.input}
                value={state}
                maxLength={20}
                onChangeText={ (text) => setState(text) }
              />
            </View>

            <View style={styles.inputStateContainerItem}>
              <Text style={styles.inputText }>Cidade</Text>
              <TextInput
                style={styles.input}
                value={city}
                maxLength={20}
                onChangeText={ (text) => setCity(text) }
              />
            </View>
          </View>

          <RectButton
            style={styles.saveButton}
            onPress={saveProfile}
          >
            <Text style={styles.saveButtonText}>Salvar</Text>
          </RectButton>
        </ScrollView>
      </View>
    </>
  );
}

export default UserProfile;