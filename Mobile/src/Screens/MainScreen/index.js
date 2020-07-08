import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {RadioButton} from 'react-native-paper';

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

            <ScrollView>
                <Recipe/>    
            </ScrollView>
            <RandomButton></RandomButton>
        </View>
       
    )
}
