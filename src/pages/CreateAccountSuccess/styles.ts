import { StyleSheet } from 'react-native';
import FontSize from '../../assets/responsiveFontSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F76B7',
    alignItems: 'center',
    paddingHorizontal: '7.5%',
    paddingVertical: '20%'
  },

  text: {
    color: 'white',
    fontSize: FontSize(16),
    textAlign: 'center',
    fontFamily: 'Poppins_600SemiBold'
  },

  button: {
    width: '100%',
    height: '13.5%',
    backgroundColor: '#32B72F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 20,
    elevation: 10
  },

  textButton: {
    color: 'white',
    fontSize: FontSize(22),
    textAlign: 'center',
    fontFamily: 'Poppins_600SemiBold'
  }
});

export default styles;