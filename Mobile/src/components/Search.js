/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';

import {SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import axios from 'axios';
Icon.loadFont();

export var recipeName = [];
export function Search() {
  const [searchText, UpdateSearch] = useState(recipeName);
  useEffect(() => {
    recipeName = searchText;
    return () => {
      console.log('nice');
    };
  }, [searchText]);
  return (
    <SearchBar
      onChangeText={UpdateSearch}
      value={searchText}
      round
      placeholder="Buscar"
      inputStyle={{backgroundColor: 'white'}}
      containerStyle={{
        backgroundColor: 'white',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        borderRadius: 30,
      }}
      inputContainerStyle={{
        backgroundColor: 'white',
        flexDirection: 'row-reverse',
      }}
      searchIcon={{name: 'search', size: 40, color: 'black'}}
    />
  );
}
