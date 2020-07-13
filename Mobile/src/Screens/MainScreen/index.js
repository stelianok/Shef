/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, FlatList} from 'react-native';

import RandomButton from '../../components/RandomButton';

import axios from 'axios';

import {Search, recipeName} from '../../components/Search';
import RadioFilter from '../../components/RadioFilter';
import Recipe from '../../components/RecipeList/Recipe';
import styles from './styles';

export default function MainScreen({navigation}) {
  const [data, setData] = useState([]);
  const [searchParam, setSearchParam] = useState(recipeName);
  const [filterby, setFilterby] = useState('Name');
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
    //FilterBy('Area', 'Japanese');
    //FilterBy('Category', 'Dessert');
    FilterBy('Name', recipeName);
    return () => {
      console.log('Everything ok');
      console.log(recipeName);
    };
  }, [searchParam]);
  //FilterBy('Name', recipeName);
  return (
    <View style={styles.container}>
      <View style={styles.searchPos}>
        <Search filterby={filterby} />
      </View>
      <View style={styles.radioPos}>
        <RadioFilter filterBy={FilterBy} />
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
}
