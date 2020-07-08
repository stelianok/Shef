import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

import RandomButton from '../../components/RandomButton';
import Recipe from '../../components/RecipeData';   
import Search from '../../components/Search';
import RadioFilter from '../../components/RadioFilter';

import styles from './styles';

export default function MainScreen(){
    return(
        
        <View style={styles.container}>   
            <View style={styles.searchPos}>
                <Search/>
            </View>  
            
            <View style={styles.radioPos}>
                <RadioFilter/>
            </View>
            <View style={styles.scroll}>
            <ScrollView>
                <Recipe/>
                <Recipe/> 
                <Recipe/>     
            </ScrollView>
            </View>
            <RandomButton></RandomButton>
        </View>
       
    )
}
