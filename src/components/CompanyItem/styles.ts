import { StyleSheet } from 'react-native';
import FontSize from '../../assets/responsiveFontSize';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#32B72F',
    padding: 5,
    margin: 5,
    borderRadius: 18,
  },

  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#eee',
    marginRight: 5
  },

  name: {
    color: '#2F2ED7',
    fontSize: FontSize(16)
  },

  address: {
    fontSize: FontSize(14),
    color: 'white',
    flexWrap: "wrap",
    flexDirection: 'row'
  },

  type: {
    color: 'white',
    fontSize: FontSize(16),
    marginHorizontal: 10,
    marginVertical: 10
  },

  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5
  },

  buttonText: {
    fontSize: FontSize(14),
    color: '#2F2ED7',
    textDecorationLine: "underline"
  },
})

export default styles;