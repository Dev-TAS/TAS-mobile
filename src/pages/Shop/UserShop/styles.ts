import { StyleSheet } from 'react-native';
import FontSize from '../../../assets/responsiveFontSize';

const styles = StyleSheet.create({
  titleContainer: {
    width: '100%',
    height: '30%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 40,
    backgroundColor: '#9030B8'
  },

  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 40,
    backgroundColor: '#E6E6F0'
  },

  text: {
    color: '#3C3F42',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: FontSize(16)
  },

  textPink: {
    color:'#9030B8'
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
    justifyContent: 'center',
    elevation: 15,
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 15,
  },

  buttonCupom: {
    backgroundColor: '#9030B8' 
  },

  buttonShop: {
    backgroundColor: '#3C3F42'
  },

  buttonText: {
    color: '#FFF',
    fontSize: FontSize(13),
  },
});

export default styles;