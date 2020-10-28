import { StyleSheet } from 'react-native';
import FontSize from '../../assets/responsiveFontSize';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9030B8',
    flex: 1,
    padding: 40,
  },

  text: {
    color: '#FFF',
    fontSize: FontSize(16),
    fontFamily: 'Poppins_400Regular'
  },

  pointsText: {
    marginVertical: '15%'
  },

  codeContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '5%'
  },

  codeText: {
    fontFamily: 'Poppins_600SemiBold',
    color: '#FFF',
    fontSize: FontSize(40)
  },
});

export default styles;