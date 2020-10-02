import { StyleSheet, Dimensions } from 'react-native';
import FontSize from '../../assets/responsiveFontSize';

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    padding: '7.5%',
    backgroundColor: '#E6E6F0'
  },

  input: {
    width: '100%',
    backgroundColor: 'white',
    height: 50,
    paddingLeft: 15,
    fontSize: FontSize(18),
    fontWeight: "600",
    borderRadius: 10,
    marginBottom: 20
  },

  inputText: {
    color: '#757575',
    fontSize: FontSize(18),
    fontFamily: 'Poppins_400Regular'
  },

  locationContainer: {
    width: '100%',
    flexDirection: 'row', 
    alignItems: 'center'
  },

  editLocalButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2F76B7',
    width: 50,
    height: 50,
    marginHorizontal: 10,
    borderRadius: 10,
    elevation: 10,
    marginTop: '5%'
  },

  saveButton: {
    backgroundColor: '#2F76B7',
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 10
  },

  saveButtonText: {
    color: 'white',
    fontSize: FontSize(22),
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'center'
  },

  mapContainer: {
    flex: 1,
    marginTop: '7.5%' 
  },

  map: {
      height: Dimensions.get('window').height
  },

  buttonsContainer: {
    width: '100%',
    height: '10%',
    flexDirection: 'row'
  },

  mapButton: {
    width: '50%',
    height: '100%',
    backgroundColor: '#2F76B7',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default styles;