import React, { useState } from 'react'
import { View, Text, Dimensions, Alert} from 'react-native'
import { BorderlessButton, TextInput, RectButton, ScrollView } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons'; 

import LocationSVG from '../../assets/images/locationSVG'
import CompanyItem, { Company } from '../../components/CompanyItem';

import styles from './styles';
import api from '../../services/api';

function SearchLocation() {
  const[state, setState] = useState('');
  const[city, setCity] = useState('');
  const [locations, setLocations] = useState([]);

  const[isFiltersVisible, setIsFiltersVisible] = useState(false);
  const[isBannerVisible, setIsBannerVisible] = useState(true);
  const[isScrollContainerVisible, setIsScrollContainerVisible] = useState(false);

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
    setIsBannerVisible(!isBannerVisible);
  }

  async function handleReturnLocation() {
    if (state !== '') {
      if(city !== '') {
        const returnLocations = await api.get('companyLocations', {
          params: {
            state,
            city
          }
        });

        setLocations(returnLocations.data);
        handleToggleFiltersVisible();
        setIsScrollContainerVisible(true);
      } else {
        const returnLocations = await api.get('companyLocations', {
          params: {
            state
          }
        })

        setLocations(returnLocations.data);
        handleToggleFiltersVisible();
        setIsScrollContainerVisible(true);
      }
    } else {
      Alert.alert('Alerta!', 'Um estado precisa ser informado!');
    }
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
                style={styles.input}
                value={city}
                onChangeText={ (text) => setCity(text) }
                placeholder='Qual a cidade?'
              />
            </View>

            <RectButton 
              style={styles.buttonSearch}
              onPress={handleReturnLocation}
            >
              <FontAwesome5 name="search-location" size={40} color="white" />
            </RectButton>
          </View>
        }
      </View>
      { isScrollContainerVisible && 
        <ScrollView 
          style={styles.scrollContainer}
        >
          {locations.map( (element: Company) => {
            return (
              <CompanyItem
                key={element.id}
                company={element} 
              />
            );
          })}
        </ScrollView>
      }   
    </>
  );
}

export default SearchLocation;