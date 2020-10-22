import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { Alert, Image, Text, View } from 'react-native';
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';
import api from '../../../services/api';
import styles from './styles';

interface CompanyProfileProps {
  account_id: number
  connectionType: boolean
}

const CompanyProfile: React.FC<CompanyProfileProps> = ( {account_id, connectionType} ) => {
  const {navigate} = useNavigation();
  const [profile, setProfile] = useState(undefined);
  const [name, setName] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  function handleNameVerify() {
    if(name.length >= 4) {
      return ''
    } else {
      return('Seu nome é muito pequeno! no mínimo caracteres')
    }
  }

  function handleCnpjVerify() {
    if(cnpj.length >= 14) {
      return ''
    } else {
      return('seu CNPJ tem menos de 14 dígitos!')
    }
  }

  async function handleProfileVerify() {
    const returnProfile = await api.get('companies', {
      params: {
        account_id
      }
    })
    if(returnProfile.data[0] !== undefined) {
      const profile = returnProfile.data[0]
      setProfile(profile);
      setName(profile.name);
      setCnpj(profile.cnpj);
      setEmail(profile.email);
      setPhone(profile.phone);
      setWhatsapp(profile.whatsapp);
      setBio(profile.bio);
    }
  }

  async function handleRegisterProfile() {
    await api.post('companies', {
      name,
      cnpj,
      email,
      phone,
      avatar: 'https://img2.gratispng.com/20180413/wze/kisspng-beta-tester-software-testing-beta-verzia-computer-arc-5ad062da3d5527.2574186515236062342512.jpg',
      whatsapp,
      bio,
      account_id
    }).then( () => {
      navigate('Landing', {account_id, connectionType})
    }).catch( () => {
      alert('Erro no cadastro!');
    })
  }

  async function handleUpdateProfile() {
    await api.put('companies', {
      name,
      cnpj,
      email,
      phone,
      bio,
      avatar: 'https://img2.gratispng.com/20180413/wze/kisspng-beta-tester-software-testing-beta-verzia-computer-arc-5ad062da3d5527.2574186515236062342512.jpg',
      whatsapp,
      account_id
    }).then( () => {
      navigate('Landing', {account_id, connectionType})
    }).catch( () => {
      alert('Erro no cadastro!');
    })
  }

  function saveProfile() {
    const verify = [handleNameVerify(), handleCnpjVerify()];
    let confirmVerify = true;
    let message = ''

    verify.forEach(element => {
      if(element !== '') {
        confirmVerify = false;
        message += element + '\n'
      }
    });

    if(confirmVerify === true) {
      if(profile === undefined) {
        handleRegisterProfile();
      } else {
        handleUpdateProfile();
      }
    } else {
      Alert.alert(message);
    }
  }

  useEffect( () => {
    handleProfileVerify();
  }, []);

  return (
  <>
    <View style={styles.titleContainer}>
      <Image
        style={styles.image}
        source={ {uri:'https://img2.gratispng.com/20180413/wze/kisspng-beta-tester-software-testing-beta-verzia-computer-arc-5ad062da3d5527.2574186515236062342512.jpg'} } 
      />
    </View>
    <View style={styles.formContainer}>
        <ScrollView>
          <Text style={styles.inputText }>Nome da empresa:</Text>
          <TextInput
            style={styles.input}
            placeholder='Ex: Empresa Teste LTDA'
            value={name}
            onChangeText={ (text) => setName(text) }
          />

          <Text style={styles.inputText}>CNPJ:</Text>
          <TextInput
            style={styles.input}
            value={cnpj}
            onChangeText={ (text) => setCnpj(text) }
          />

          <Text style={styles.inputText}>E-mail:</Text>
          <TextInput 
            style={styles.input}
            value={email}
            onChangeText={ (text) => setEmail(text) }
          />

          <Text style={styles.inputText}>Telefone de atendimento:</Text>
          <TextInput 
            style={styles.input}
            value={phone}
            onChangeText={ (text) => setPhone(text) }
          />

          <Text style={styles.inputText}>Whatsapp:</Text>
          <TextInput 
            style={styles.input}
            value={whatsapp}
            onChangeText={ (text) => setWhatsapp(text) }
          />

          <Text style={styles.inputText}>Descrição</Text>
          <TextInput
            multiline={true}
            style={styles.inputBio}
            value={bio}
            textAlignVertical="top"
            onChangeText={ (text) => setBio(text) }
          />

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

export default CompanyProfile;