import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

import RandomButton from '../../components/RandomButton';

import Search from '../../components/Search';
import RadioFilter from '../../components/RadioFilter';
import Recipe from '../../components/RecipeList/Recipe';
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
                <Recipe _title={'a'} _category={'b'} _origin={'c'} _img={'https://trello-attachments.s3.amazonaws.com/5eadc1772d50447da636f9c6/5f04b092c4cabb1b35a3d399/f622f81de88fa2de084230722c8a22fc/WhatsApp_Image_2020-07-07_at_2.31.35_PM.jpeg'}/>
                <Recipe _title={'a'} _category={'b'} _origin={'c'} _img={'https://trello-attachments.s3.amazonaws.com/5eadc1772d50447da636f9c6/5f04b092c4cabb1b35a3d399/f622f81de88fa2de084230722c8a22fc/WhatsApp_Image_2020-07-07_at_2.31.35_PM.jpeg'}/>
                <Recipe _title={'a'} _category={'b'} _origin={'c'} _img={'https://trello-attachments.s3.amazonaws.com/5eadc1772d50447da636f9c6/5f04b092c4cabb1b35a3d399/f622f81de88fa2de084230722c8a22fc/WhatsApp_Image_2020-07-07_at_2.31.35_PM.jpeg'}/>
                <Recipe _title={'a'} _category={'b'} _origin={'c'} _img={'https://trello-attachments.s3.amazonaws.com/5eadc1772d50447da636f9c6/5f04b092c4cabb1b35a3d399/f622f81de88fa2de084230722c8a22fc/WhatsApp_Image_2020-07-07_at_2.31.35_PM.jpeg'}/>
                 
                
            </ScrollView>
            
            </View>
            <RandomButton/>
            
            
            
        </View>
       
    )
}
