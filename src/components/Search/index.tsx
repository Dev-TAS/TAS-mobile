import React, { Component } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import styles from './styles'

export default class Search extends React.Component<{ onLocationSelected: any }> {
  state = {
    searchFocused: false
  }

  render() {
    const { onLocationSelected } = this.props;
    const { searchFocused } = this.state;
    return (
      <GooglePlacesAutocomplete
        placeholder="Para onde?"
        placeholderTextColor="#333"
        onPress={ onLocationSelected }
        query={{
          key: 'AIzaSyArUFSUHzinLh7FCxCC6vZyWJu__R6cbr0',
          language: 'pt'
        }}
        textInputProps={{
          onFocus: () => { this.setState({ searchFocused: true }) },
          onBlur: () => { this.setState({ searchFocused: false }) },
          autoCapitalize: 'none',
          autoCorrect: false,
        }}
        listViewDisplayed={searchFocused}
        fetchDetails
        enablePoweredByContainer={false}
        styles={styles}
      > 
      </GooglePlacesAutocomplete>
    );
  }
}