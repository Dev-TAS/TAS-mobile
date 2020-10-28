import { StyleSheet } from 'react-native';
import FontSize from '../../assets/responsiveFontSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#E6E6F0'
  },

  text: {
    color: '#3C3F42',
    fontSize: FontSize(16),
    fontFamily: 'Poppins_600SemiBold',
  },

  textPink: {
    color: '#9030B8'
  },

  textInfo: {
    fontSize:FontSize(15),
    textAlign: 'center'
  },

  infoContainer: {
    width: 200,
    height: 170,
    alignSelf: 'center',
    margin: '10%'
  },

  input: {
    textAlign: 'center',
    borderRadius: 25,
    alignSelf: 'center',
    width: 150,
    backgroundColor: 'white',
    height: 50,
    fontSize: FontSize(18),
    fontWeight: "600",
  },

  button: {
    margin: '5%',
    height: 70,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9030B8'
  },

  buttonText: {
    color: 'white',
    fontSize: FontSize(22),
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'center'
  },

  buttonCouponContainer: {
    width: '100%',
    height: '20%',
    backgroundColor: '#9030B8',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    paddingHorizontal: 40,
  },

  buttonCoupon: {
    width: '100%',
    height: 70,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3C3F42',
    elevation: 10
  },

  buttonCouponText: {
    color: '#FFF',
    fontSize: FontSize(26),
    fontFamily: 'Poppins_600SemiBold',
  }
});

export default styles;