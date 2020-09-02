import React from 'react'
import { View, Text, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { FontAwesome5 } from '@expo/vector-icons'; 

import styles from './styles';
import { useNavigation } from '@react-navigation/native';


export interface Company {
  id: number;
  name: string;
  email?: string;
  phone: string;
  whatsapp?: string;
  serviceType: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  locationNumber: number;
  cnpj: string;
  avatar: string;
}

interface CompanyItemProps {
  company: Company;
}

const CompanyItem: React.FC<CompanyItemProps> = ( {company} ) => {

  const { navigate } = useNavigation();

  function handleNavigateToMap() {
    navigate('Maps')
  }
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Image style={styles.avatar} source={ { uri:company.avatar } } />
          <Text style={styles.name}>
            {company.name}
          </Text> 
      </View>
      <Text style={styles.address}>
              Rua {company.street} {company.locationNumber}, {company.neighborhood}, {company.city}, {company.state}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa 
            </Text>
      <Text style={styles.type}>Tipo de serviço: {company.serviceType}</Text>
      <View style={styles.options}>
        <BorderlessButton onPress={handleNavigateToMap}>
          <Text style={styles.buttonText}>Visualizar no Maps</Text>
        </BorderlessButton>

        <BorderlessButton>
          <Text style={styles.buttonText}>Telefone de contato </Text>
        </BorderlessButton>

        <BorderlessButton 
          enabled={company.whatsapp? true : false}
        >
          <FontAwesome5 name="whatsapp" size={40} color={company.whatsapp? "white" : "grey"} />
        </BorderlessButton>
      </View>
    </View>
  );
}

export default CompanyItem;