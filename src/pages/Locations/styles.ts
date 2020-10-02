import { StyleSheet } from 'react-native';
import FontSize from '../../assets/responsiveFontSize';

const styles = StyleSheet.create({
  bannerContainer: {
    width:'100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '7.5%',
    backgroundColor: '#2F76B7'
  },

  textBanner: {
    marginTop: 5,
    color: '#FFF',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: FontSize(16)
  },

  locationsContainer: {
    flex: 1,
    backgroundColor: '#E6E6F0',
  },

  newLocationButton: {
    height: 70,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2F76B7',
    elevation: 10,
    margin: '7.5%'
  },

  newLocationButtonText: {
    color: 'white',
    fontSize: FontSize(20),
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'center'
  },

  scrollContainer: {
    minHeight: 0,
  }

});

export default styles;