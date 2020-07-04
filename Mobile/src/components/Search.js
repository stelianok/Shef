import React from 'react';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
Icon.loadFont();
export default function Search() 
{
    return (
        
      <SearchBar
        round
        placeholder = 'Buscar'
        inputStyle = {{backgroundColor: 'white'}}
  
        containerStyle={{backgroundColor: 'white', borderRadius: 50  }}
        inputContainerStyle={{backgroundColor:'white', flexDirection:"row-reverse"}}
        searchIcon={{name:'search', size:40, color:'black'}}
      />
    
      
    );
  
}