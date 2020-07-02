import React, { Component} from 'react';

import { View, StyleSheet, Image} from 'react-native';
import Recipe from './RecipeList/Recipe';



const styles = StyleSheet.create({
    container: {
      padding: 15,
      flexDirection: 'column',
    }
  })

export default class components extends Component {
    state = {
        recipes: [
                {
                    id:1,
                    image: 'https://steamuserimages-a.akamaihd.net/ugc/920292227618872291/21C952A661538E925C3E9C816CD2834539DAAEF7/',
                    title: 'Human Ramen',
                    category: 'Ramen',
                    origin: 'Japanese Recipe'
                }
        ],
    };

    render(){
        return(
            <View style={ styles.container}>
                {this.state.recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}/>)}
                
            </View>
        );
    }
}

