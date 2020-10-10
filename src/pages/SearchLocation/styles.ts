import { StyleSheet } from 'react-native';
import FontSize from '../../assets/responsiveFontSize';

const styles = StyleSheet.create({
  bannerContainer: {
    width:'100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '7.5%',
    backgroundColor: '#32B72F'
  },

  textBanner: {
    marginTop: 5,
    color: '#FFF',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: FontSize(16)
  },

  searchContainer: {
    flex: 1,
    backgroundColor: '#E6E6F0',
    paddingVertical: 30,
    paddingHorizontal: 40
  },

  searchAreaContainer: {
    alignItems: 'center'
  },

  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
  },

  filterText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: FontSize(14),
    marginRight: 10
  },

  formContainer: {
    marginTop: '5%',
    backgroundColor: '#FFF',
    width: '100%',
    borderRadius: 10,
  },

  input: {
    width: '100%',
    backgroundColor: 'white',
    height: 50,
    paddingLeft: 15,
    fontSize: FontSize(18),
    fontWeight: "600",
    borderRadius: 10,
    marginBottom: 20
  },

  buttonSearch: {
    width: 60,
    height: 60,
    marginTop: 10,
    backgroundColor: '#32B72F',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },

  currentLocationContainer: {
    marginTop: '5%',
    flexDirection: 'row',
    alignItems: 'baseline',
    width: '100%'
  },

  currentLocationText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: FontSize(14),
    marginRight: 10
  },

  currentLocationButtonText: {
    fontFamily: 'Archivo_700Bold',
    marginLeft: '5%',
    textDecorationLine: "underline",
    fontSize: FontSize(14),
    color: '#32B72F'
  },

  scrollContainer: {
    minHeight: 0,
    maxHeight: '50%',
  }
})

export default styles;