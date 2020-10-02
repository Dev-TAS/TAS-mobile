import React, { useState } from 'react'
import { View, Text, Dimensions} from 'react-native'
import { BorderlessButton, TextInput, RectButton, ScrollView } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons'; 

import LocationSVG from '../../assets/images/locationSVG'
import CompanyItem, { Company } from '../../components/CompanyItem';

import styles from './styles';

function SearchLocation() {
  const[state, setState] = useState('');
  const[city, setCity] = useState('');

  const company: Company = {
    id: 1,
    company_name: 'teste',
    phone: '552198770-8021',
    whatsapp: '552198770-8021',
    serviceType: 'Comercialização',
    state: 'Rio de Janeiro',
    city: 'São Gonçalo',
    neighborhood: 'Pita',
    street: 'Adélia Cintra',
    locationNumber: 20,
    cnpj: '00000000000-00',
    avatar: 'https://blog.locaweb.com.br/wp-content/uploads/2014/05/95141903.jpg',
    mapLocation: {
      latitude:-22.8853169,
      longitude: -43.0504129,
    }
  }

  const[isFiltersVisible, setIsFiltersVisible] = useState(false);
  const[isBannerVisible, setIsBannerVisible] = useState(true);

  function handleToggleBannerVisible() {
    setIsBannerVisible(!isBannerVisible);
  }

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
    handleToggleBannerVisible();
  }

  return (
    <>

      { isBannerVisible && <View style={styles.bannerContainer}>
          <LocationSVG width='100%' height={(Dimensions.get("window").height / 5)}/>
          <Text style={styles.textBanner}>Locais de reciclagem</Text>
        </View> 
      }

      <View style={styles.searchContainer}>
        <View style={styles.filterContainer}>
          <Text style={styles.filterText}>
            Insira a localidade desejada aqui</Text>
          <BorderlessButton
            onPress={handleToggleFiltersVisible}>
            <FontAwesome5 name="filter" size={24} color="#32B72F" />
          </BorderlessButton>
        </View>

        { isFiltersVisible && 
          <View style={styles.searchAreaContainer}> 
            <View style={styles.formContainer}>
              <TextInput
                style={styles.input}
                value={state}
                onChangeText={ (text) => setState(text) }
                placeholder='Qual o Estado?'
              />
              <TextInput
                style={[styles.input, styles.input1]}
                value={city}
                onChangeText={ (text) => setCity(text) }
                placeholder='Qual a cidade?'
              />
            </View>

            <RectButton 
              style={styles.buttonSearch}
              onPress={handleToggleFiltersVisible}
            >
              <FontAwesome5 name="search-location" size={40} color="white" />
            </RectButton>
          </View>
        }

        <View style={styles.currentLocationContainer}>
          <Text style={styles.currentLocationText}>Ou encontre {'\n'}locais com sua</Text>
          <BorderlessButton>
            <Text style={styles.currentLocationButtonText}>Localização Atual</Text>
          </BorderlessButton>
        </View>
      </View>
      { company && 
        <ScrollView 
          style={styles.scrollContainer}
        >
          <CompanyItem company={company}/>
          <CompanyItem company={company}/>
          <CompanyItem company={company}/>
          <CompanyItem company={company}/>
          <CompanyItem company={company}/>
          <CompanyItem company={company}/>
          <CompanyItem company={company}/>
          <CompanyItem company={company}/>
          <CompanyItem company={company}/>
          <CompanyItem company={company}/>
          <CompanyItem company={company}/>
        </ScrollView>
      }   
    </>
  );
}

export default SearchLocation;