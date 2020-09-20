
import { StyleSheet } from 'react-native';
import FontSize from '../../assets/responsiveFontSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '7.5%',
    paddingVertical: '20%',
    backgroundColor: '#32B72F',
    justifyContent: 'space-between'
  },

  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoImage: {
    resizeMode: "contain"
  },

  logoText: {
    color: 'black',
    textAlign: 'center',
    fontSize: FontSize(16),
    fontFamily: 'Poppins_400Regular'
  },

  welcomeText: {
    fontSize: FontSize(16),
    color: 'white',
    fontFamily: 'Poppins_400Regular'
  },

  welcomeTextBold: {
    fontFamily: 'Poppins_600SemiBold'
  },

  buttonsContainer: {
    marginTop: 8,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },

  button: {
    width: '46%',
    height: 120,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '3%',
    borderRadius: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 5, height: 5},
    shadowRadius: 15,
  },

  buttonText: {
    color: 'white',
    fontSize: FontSize(15),
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'center'
  },

  buttonPrimary: {
    backgroundColor: '#1C9E19',
  },

  buttonSecondary: {
    backgroundColor: '#2F76B7',
  },

  aboutUsButton: {
    height: 70,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default styles;