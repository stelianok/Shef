import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

import RandomButton from '../../components/RandomButton';
import Recipe from '../../components/Recipe';   
import Search from '../../components/Search';

import styles from './styles';

export default function MainScreen(){
    return(
        
        <View style={styles.container}>     
            <Search></Search>
            <ScrollView>
                <View>
                </View>
            <RandomButton></RandomButton>
            </ScrollView>
        </View>
       
    )
}
