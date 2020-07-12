<<<<<<< HEAD
import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {RadioButton} from 'react-native-paper';
=======
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, FlatList} from 'react-native';
>>>>>>> 255e17123a71f40777142205384617bbee469fc2

import RandomButton from '../../components/RandomButton';

import axios from 'axios';

import Search from '../../components/Search';
import RadioFilter from '../../components/RadioFilter';
import Recipe from '../../components/RecipeList/Recipe';
import styles from './styles';

<<<<<<< HEAD

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
=======
export default function MainScreen({navigation}) {
  const [data, setData] = useState([]);
  async function FilterBy(filter, param) {
    if (filter === 'Area') {
      await axios
        .get('https://www.themealdb.com/api/json/v1/1/filter.php?', {
          params: {
            a: param,
          },
        })
        .then((response) => {
          //console.log(response.data.meals);

          setData([response.data.meals]);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (filter === 'Category') {
      await axios
        .get('https://www.themealdb.com/api/json/v1/1/filter.php?', {
          params: {
            c: param,
          },
        })
        .then((response) => {
          //console.log(response.data.meals);

          setData([response.data.meals]);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (filter === 'Name') {
      await axios
        .get('https://www.themealdb.com/api/json/v1/1/search.php?', {
          params: {
            s: param,
          },
        })
        .then((response) => {
          console.log(response.data.meals);

          setData([response.data.meals]);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log('invalid filter');
    }
  }
  useEffect(() => {
    //FilterBy('Area', 'Japanese')
    FilterBy('Category', 'Dessert');
    //FilterBy('Name', 'Arrabiata')
    return () => {
      console.log('Everything ok');
    };
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.searchPos}>
        <Search />
      </View>
      <View style={styles.radioPos}>
        <RadioFilter />
      </View>

      <SafeAreaView style={styles.scroll}>
        <FlatList
          data={data[0]}
          renderItem={({item}) => (
            <Recipe
              _id={item.idMeal}
              _title={item.strMeal}
              _img={item.strMealThumb}
              navigation={navigation}
            />
          )}
          keyExtractor={(item) => item.idMeal}
          extraData={data}
          style={{marginBottom: 75}}
        />
      </SafeAreaView>
      <RandomButton navigation={navigation} />
    </View>
  );
>>>>>>> 255e17123a71f40777142205384617bbee469fc2
}
