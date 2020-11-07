import React, { useEffect, useState } from 'react'
import { Route, Text, View } from 'react-native';
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';
import MapView, {Marker} from 'react-native-maps';



import { AntDesign } from '@expo/vector-icons'; 
import locationIcon from '../../assets/images/locationIcon.png'
import Search from '../../components/Search';

import styles from './styles'
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

function CreateLocation(props:Route) {
  const {navigate} = useNavigation();
  const company_id = props.route.params.company_id;
  const account_id = props.route.params.account_id;
  //#region UseState
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [street, setStreet] = useState('');
    const [localNumber, setLocalNumber] = useState('');
    const [phone, setPhone] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [isMapVisible, setIsMapVisible] = useState(false);
    const [coordinatesTitle, setCoordinatesTitle] = useState('');
    const [location, setLocation]  = useState({
      latitude: -1,
      longitude: -1,
      title: ''
    });
    const [region, setRegion] = useState({
      latitude: 0, 
      longitude: 0,
      latitudeDelta: 0.0143, 
      longitudeDelta: 0.0134
    });
  //#endregion UseState

  //#region Form
    function handleSwapToMaps() {
      setIsMapVisible(true);
    }
    
    function handleNavigateToLocations() {
      navigate('Locations', {company_id, account_id})
    }
    //#region CampVerify
      function handleStateCampVerify() {
        let message = '';
        state !== '' ? message = '' : message = 'Estado'
        return message;
      }

      function handleCityCampVerify() {
        let message = '';
        city !== '' ? message = '' : message = 'Cidade'
        return message;
      }

      function handleNeighborhoodCampVerify() {
        let message = '';
        neighborhood !== '' ? message = '' : message = 'Bairro'
        return message;
      }

      function handleStreetCampVerify() {
        let message = '';
        street !== '' ? message = '' : message = 'Rua'
        return message;
      }

      function handleLocationNumberCampVerify() {
        let message = '';
        localNumber !== '' ? message = '' : message = 'Número do local'
        return message;
      }

      function handleServiceTypeCampVerify() {
        let message = '';
        serviceType !== '' ? message = '' : message = 'Tipo de serviço'
        return message;
      }
    //#endregion CampVerify

    async function handleLocationSubmit() {
      const verify = [handleStateCampVerify(), handleCityCampVerify(),
      handleNeighborhoodCampVerify(), handleStreetCampVerify(), 
      handleLocationNumberCampVerify(), handleServiceTypeCampVerify()];
      let confirmVerify = true;
      let message = '';

      verify.forEach(element => {
        if(element !== '') {
          confirmVerify = false;
          message += element + '\n'
        }
      });

      if(confirmVerify === true && message === '') {
        let latitude = null;
        let longitude = null;
        let title = null;

        if(coordinatesTitle !== '') {
          latitude = location.latitude;
          longitude = location.longitude;
          title = location.title;
        }
        
        await api.post('companyLocations', {
          phone,
          whatsapp,
          serviceType,
          state,
          city,
          neighborhood,
          street,
          localNumber,
          latitude,
          longitude,
          title,
          company_id,
        }).then( () => {
          handleNavigateToLocations();
        }).catch( () => {
          alert('Erro no cadastro!');
        })
      } else {
        console.log(message)
      }
    }

  //#endregion Form
  
  //#region Maps
    async function getCurrentLocation() {
      await navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          setRegion({ 
              latitude, 
              longitude, 
              latitudeDelta: 0.0143, 
              longitudeDelta: 0.0134 
          });
        },
  
        () => {},
  
        {
          timeout: 5000,
          enableHighAccuracy: true,
          maximumAge: 1000
        }  //sucesso
      );
    }

    function handleLocationSelected(data: any, { geometry }: any ) {
      const { location: { lat: latitude, lng: longitude } } = geometry;
      setLocation({
        latitude,
        longitude,
        title: data.structured_formatting.main_text,
      })
      setRegion({
        latitude,
        longitude,
        latitudeDelta: 0.0143,
        longitudeDelta: 0.0134
      })
    }

    function handleSwapToForm() {
      setIsMapVisible(false);
    }

    function confirmLocation() {
      setCoordinatesTitle(location.title);
      handleSwapToForm();
    }
  //#endregion Maps
  
  useEffect( () => {
    getCurrentLocation();
  }, [false]);

  return (
    <>
    {!isMapVisible &&
      <View style={styles.formContainer}>
        <ScrollView>
          <Text style={styles.inputText}>Estado:</Text>
          <TextInput 
            style={styles.input}
            value={state}
            onChangeText={ text => setState(text) } 
          />

          <Text style={styles.inputText}>Cidade:</Text>
          <TextInput 
            style={styles.input} 
            value={city}
            onChangeText={ text => setCity(text) }
          />

          <Text style={styles.inputText}>Bairro:</Text>
          <TextInput 
            style={styles.input} 
            value={neighborhood}
            onChangeText={ text => setNeighborhood(text) }
          />

          <Text style={styles.inputText}>Rua:</Text>
          <TextInput 
            style={styles.input}
            value={street}
            onChangeText={ text => setStreet(text) }
          />

          <Text style={styles.inputText}>Número do local:</Text>
          <TextInput 
            style={styles.input}
            value={localNumber}
            onChangeText={ text => setLocalNumber(text) } 
          />

          <Text style={styles.inputText}>Telefone de atendimento:</Text>
          <TextInput 
            style={styles.input}
            value={phone}
            onChangeText={ text => setPhone(text) } 
          />

          <Text style={styles.inputText}>Whatsapp:</Text>
          <TextInput 
            style={styles.input}
            value={whatsapp}
            onChangeText={ text => setWhatsapp(text) } 
          />

          <Text style={styles.inputText}>Tipos de serviço:</Text>
          <TextInput 
            style={styles.input} 
            value={serviceType}
            onChangeText={ text => setServiceType(text) }
          />

          <View style={styles.locationContainer}>
            <View style={{width: '80%'}}>
            <Text style={styles.inputText}>Localidade no Maps:</Text>
            <TextInput 
              style={[styles.input, {backgroundColor: '#8F8F8F'}]} 
              editable={false}
              value={coordinatesTitle}
            />
            </View>
            <RectButton 
              style={styles.editLocalButton}
              onPress={handleSwapToMaps}
              >
              <AntDesign name="edit" size={30} color="white" />
            </RectButton>
          </View>

          <RectButton 
            style={styles.saveButton}
            onPress={handleLocationSubmit}
          >
            <Text style={styles.saveButtonText}>Salvar</Text>
          </RectButton>
        </ScrollView>
      </View>
    }

    {isMapVisible &&
      <>
        <View style={styles.mapContainer}>
          <MapView
          style={styles.map}
          loadingEnabled={true}
          toolbarEnabled={true}
          zoomControlEnabled={true}
          showsUserLocation={true}
          region={region}
        >
          {location.longitude != null &&
            <Marker
              coordinate={location}
              image={locationIcon}
            />
          }
        </MapView>
        </View>
        <View style={styles.buttonsContainer}>
          <RectButton 
            style={styles.mapButton}
            onPress={confirmLocation}
          >
            <Text style={styles.saveButtonText}>Confirmar</Text>
          </RectButton>
          <RectButton 
            style={styles.mapButton}
            onPress={handleSwapToForm}
          >
            <Text style={styles.saveButtonText}>Cancelar</Text>
          </RectButton>
        </View>
      </>
    }
    </>
  );
};

export default CreateLocation;