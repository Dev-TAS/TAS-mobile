import { StyleSheet } from 'react-native';

import FontSize from '../../assets/responsiveFontSize'

const styles = StyleSheet.create({

  logoContainer: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#32B72F'
  },

  logoImage: {
    resizeMode: 'contain',
    width: 130
  },

  title: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Poppins_400Regular'
  },

  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 40,
    backgroundColor: '#E6E6F0'
  },

  welcome: {
    fontFamily: 'Archivo_400Regular',
    fontSize: FontSize(17)
  },

  welcomeBold: {
    fontFamily: 'Archivo_700Bold'
  },

  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: '10%'
  },

  button: {
    width: '48%',
    height: 120,
    borderRadius: 10,
    alignItems: 'center',
  },

  svgMargin: {
    marginLeft: 20
  },

  buttonPrimary: {
    backgroundColor: '#328764',
    borderColor: 'yellow'
  },

  buttonSecondary: {
    backgroundColor: '#2F76B7',
    justifyContent: 'center',
    paddingTop: 10
  },

  buttonText: {
    color: '#FFF',
    fontSize: FontSize(13),
  },

  buttonTextPrimary: {
    margin: -5
  },

  socialMediasContainer: {
    width: '100%',
    backgroundColor: '#E6E6F0',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40
  },

  socialMediasText: {
    color: '#212529',
    fontSize: FontSize(14),
    fontWeight: 'bold',
    textAlign: 'center'
  },

  socialMediasButtonsContainer: {
    width: '50%',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 10
  }

})

export default styles;