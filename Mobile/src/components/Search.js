import React, { Component } from 'react';

import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'


import axios from 'axios';
Icon.loadFont();

export var recipeName = [];


export class Search extends Component
{       
     
      state ={
        searchtext:'',
      };

      updateSearch = (searchtext) =>{
        this.setState({searchtext});
        recipeName = searchtext;
        console.log(recipeName);
        
      };



      render(){
          const {searchtext} = this.state;
          
          return(
            
            <SearchBar
            onChangeText = {this.updateSearch}
            value ={searchtext}
            round
            placeholder = 'Buscar'
            inputStyle = {{backgroundColor: 'white'}}
            containerStyle={{backgroundColor: 'white', borderBottomColor: 'transparent',
            borderTopColor: 'transparent', borderRadius:30}}
            inputContainerStyle={{backgroundColor:'white', flexDirection:"row-reverse"}}
             searchIcon={{name:'search', size:40, color:'black'}}
           
          />
          
          );
      }
     
};

