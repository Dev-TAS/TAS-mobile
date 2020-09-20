import { StyleSheet } from 'react-native';
import FontSize from '../../assets/responsiveFontSize';

const styles = StyleSheet.create({
  titleContainer: {
    width: '100%',
    height: '30%',
    paddingHorizontal: '7.5%',
    paddingTop: '10%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  titleContainerUser: {
    backgroundColor: '#32B72F'
  },

  titleContainerCompany: {
    backgroundColor: '#2F76B7'
  },

  titleText: {
    fontSize: FontSize(16),
    color: 'white',
    fontFamily: 'Poppins_600SemiBold'
  },

  formContainer: {
    flex: 1,
    backgroundColor: '#E6E6F0',
    paddingHorizontal: '7.5%',
    paddingTop: '7.5%'
  },

  createAccountContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  loginText: {
    color: '#757575',
    fontSize: FontSize(24),
    fontFamily: 'Poppins_600SemiBold'
  },

  createAccountButtonText: {
    fontSize: FontSize(16),
    textDecorationLine: 'underline'
  },

  createAccountButtonTextUser: {
    color: '#32B72F'
  },

  createAccountButtonTextCompany: {
    color: '#2F76B7'
  },

  inputContainer: {
    marginVertical: '10%',
    borderRadius: 10
  },

  input: {
    backgroundColor: 'white',
    height: 70,
    paddingLeft: 15,
    fontSize: FontSize(18),
    fontWeight: "600",
  },

  input1: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },

  input2: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },

  loginButton: {
    width: '100%',
    height: 70,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  loginButtonUser: {
    backgroundColor: '#32B72F'
  },

  loginButtonCompany: {
    backgroundColor: '#2F76B7'
  },

  loginButtonText: {
    color: 'white',
    fontSize: FontSize(22),
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'center'
  }
})

export default styles;