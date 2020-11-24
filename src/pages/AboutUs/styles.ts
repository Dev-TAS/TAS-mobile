import { StyleSheet } from 'react-native';
import FontSize from '../../assets/responsiveFontSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#32B72F',
    paddingTop: '10%',
    paddingBottom: '5%'
  },

  title: {
    color: '#FFF',
    fontSize: FontSize(20),
    fontFamily: 'Poppins_600SemiBold'
  },

  description: {
    color: '#757575',
    fontSize: FontSize(17),
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center'
  },

  descriptionContainer: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    paddingVertical: 5
  },

  button: {
    width: '90%',
    height: 70,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2F76B7'
  },

  buttonText: {
    color: 'white',
    fontSize: FontSize(22),
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'center'
  }
});

export default styles;