import { StyleSheet } from 'react-native';
import FontSize from '../../assets/responsiveFontSize';

const styles = StyleSheet.create({
  titleContainer: {
    width: '100%',
    height: '30%',
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
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'center',
    color: 'white'
  },

  createAccountContainer: {
    flex:1,
    paddingHorizontal: '7.5%',
    paddingTop: '7.5%',
    backgroundColor: '#E6E6F0'
  },

  createAccountText: {
    color: '#757575',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: FontSize(18)
  },

  inputContainer: {
    width:'100%',
    marginVertical: '5%'
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

  registerButton: {
    width: '100%',
    height: 70,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  registerButtonUser: {
    backgroundColor: '#32B72F'
  },

  registerButtonCompany: {
    backgroundColor: '#2F76B7'
  },

  registerButtonText: {
    fontSize: FontSize(22),
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'center',
    color: 'white'
  },
});

export default styles;