import { StyleSheet } from 'react-native';
import FontSize from '../../../assets/responsiveFontSize';

const styles = StyleSheet.create({
  titleContainer: {
    width: '100%',
    height: '25%',
    backgroundColor: '#32B72F',
    justifyContent: "flex-end",
    alignItems: 'center',
    borderBottomWidth: 50,
    borderColor: '#E6E6F0'
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: -50,
  },

  formContainer: {
    flex: 1,
    backgroundColor: '#E6E6F0',
    padding: '7.5%'
  },

  input: {
    backgroundColor: 'white',
    height: 50,
    paddingLeft: 15,
    fontSize: FontSize(18),
    fontWeight: "600",
    borderRadius: 10,
    marginBottom: 20
  },

  inputText: {
    color: '#757575',
    fontSize: FontSize(18),
    fontFamily: 'Poppins_400Regular'
  },

  inputStateContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  inputStateContainerItem: {
    width: '46%'
  },

  saveButton: {
    backgroundColor: '#32B72F',
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 10
  },

  saveButtonText: {
    color: 'white',
    fontSize: FontSize(22),
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'center'
  }
});

export default styles;