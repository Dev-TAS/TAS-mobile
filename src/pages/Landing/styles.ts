import { StyleSheet } from 'react-native';

import FontSize from '../../assets/responsiveFontSize'

const styles = StyleSheet.create({

  logoContainer: {
    width: '100%',
    height: '30%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 40,
  },

  logoContainerUser: {
    backgroundColor: '#32B72F'
  },

  logoContainerCompany: {
    backgroundColor: '#2F76B7'
  },

  profileButton: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    alignSelf: 'flex-end',
    marginTop: 25,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10
  },

  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50
  },

  logoImage: {
    resizeMode: 'contain',
    marginTop: -20
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
    elevation: 15,
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 15,
  },

  svgMargin: {
    marginLeft: 20
  },

  buttonPrimary: {
    backgroundColor: '#1C9E19'
  },

  buttonSecondary: {
    backgroundColor: '#9030B8',
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
  },

  registerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '7.5%'
  },

  registerContainerUser: {
    backgroundColor: '#32B72F'
  },

  registerContainerCompany: {
    backgroundColor: '#2F76B7'
  },

  registerText: {
    fontSize: FontSize(18),
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Poppins_600SemiBold'
  },

  registerButton: {
    width: '100%',
    height: 70,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    margin: 15
  },

  registerButtonUser: {
    backgroundColor: '#2F76B7'
  },

  registerButtonCompany: {
    backgroundColor: '#32B72F'
  },

  registerButtonText: {
    fontSize: FontSize(22),
    color: 'white',
    fontFamily: 'Poppins_600SemiBold'
  }
})

export default styles;