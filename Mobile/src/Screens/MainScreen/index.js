import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import RandomButton from '../../components/RandomButton'
import Recipe from '../../components/Recipe';   
import styles from './styles';

export default function MainScreen(){
    return(
        
        <View style={styles.container}>

            <View></View>
            <RandomButton/>


        </View>
       
    )
}