import React, { Component } from 'react';

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
                    image: 'https:\/\/www.themealdb.com\/images\/media\/meals\/ustsqw1468250014.jpg',
                    title: 'A',
                    category: 'B',
                    origin: 'C'
                }
        ],
    };

}   

  async componentDidMount(){
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
        .then(response => {
            this.setState(response.data)
            console.log(response);
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

