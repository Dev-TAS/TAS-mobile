import React, { useEffect, useState } from 'react'
import { Dimensions, Route, Text, View } from 'react-native'
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import CompanyItem, {Company} from '../../components/CompanyItem';

import BuildSVG from '../../assets/images/buildSVG'

import api from '../../services/api';


import styles from './styles';

function Locations(props:Route) {
  const {navigate} = useNavigation();
  const [locations, setLocations] = useState([]);
  const company_id = props.route.params.company_id;
  const account_id = props.route.params.account_id;

  async function handleReturnLocations() {
    const returnLocations = await api.get('companyLocations', {
      params: {
        company_id
      }
    })

    setLocations(returnLocations.data)
  }

  function handleNavigateToCreateLocation() {
    navigate('CreateLocation', {company_id, account_id})
  }

  useEffect( () => {
    handleReturnLocations();
  });
 

  return (
    <>
      <View style={styles.bannerContainer}>
      <BuildSVG width='50%' height={(Dimensions.get("window").height / 5)}/>
      <Text style={styles.textBanner}>Meus locais</Text>
      </View>
      <View style={styles.locationsContainer}>
        <RectButton 
          style={styles.newLocationButton}
          onPress={handleNavigateToCreateLocation}
        >
          <Text style={styles.newLocationButtonText}>Adicionar novo local</Text>
        </RectButton>
        <ScrollView style={styles.scrollContainer}>
          {locations.map((element: Company) => {
            return (   
              <CompanyItem
                key={element.id}
                company={element} 
              />
            );
          })}
        </ScrollView>
      </View>
    </>
  );
}

export default Locations;