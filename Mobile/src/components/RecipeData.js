import React, { Component, useState } from 'react';

import { View, StyleSheet, Image} from 'react-native';
import Recipe from './RecipeList/Recipe';

import axios from 'axios';

const styles = StyleSheet.create({
    container: {
      padding: 15,
      flexDirection: 'column',
    }
  })

export default class components extends Component {

    constructor(props){
        super(props);
        this.state = {
            recipes: [
                    {
                        id:1,
                        image: "image",
                        title:  '1',
                        category: "category",
                     
                    },
                    {
                        id:2,
                        image: "image",
                        title: "title",
                        category: "category",
                        origin: "origin",
                    }
            ],
        };
    
    }   
    
    async componentDidMount(){
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
            .then(response => {
                
               console.log(response.data.meals[0].strMeal);
            })
            .catch(error =>{console.error();
            });
        }
   
    render(){
        
        return(
        
            <View style={ styles.container}>
                {this.state.recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}/>)}
                
            </View>
        );
    }
}

