/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  useWindowDimensions,
} from 'react-native';
import axios from 'axios';
import {Divider} from 'react-native-elements';

export default function Recipe({_img, _title, _id, navigation}) {
  const [title, setTitle] = useState(_title);
  const [area, setArea] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState([]);
  const [preparationMode, setPreparationMode] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  const [link, setLink] = useState('');
  const [thumbnail, setThumbnail] = useState(_img);

  const width = useWindowDimensions().width;
  function GetValues(response, strName, setState, variableState) {
    for (var [key, value] of Object.entries(response)) {
      for (var i = 1; i <= 20; i++) {
        if (key === strName + i) {
          if (value !== null && value !== '') {
            //console.log(key, value);
            setState((variableState) => [...variableState, value]);
          }
        }
      }
    }
  }
  async function GetMealByID(id) {
    await axios
      .get('https://www.themealdb.com/api/json/v1/1/lookup.php?', {
        params: {
          i: id,
        },
      })
      .then((response) => {
        //console.log(response.data.meals[0]);
        setTitle(response.data.meals[0].strMeal);
        setTags(response.data.meals[0].strTags.split(','));
        setCategory(response.data.meals[0].strCategory);
        setArea(response.data.meals[0].strArea);
        setThumbnail(response.data.meals[0].strMealThumb);
        setPreparationMode(response.data.meals[0].strInstructions);
        setLink(response.data.meals[0].strYoutube);
        GetValues(
          response.data.meals[0],
          'strIngredient',
          setIngredients,
          ingredients,
        );
        GetValues(response.data.meals[0], 'strMeasure', setMeasures, measures);
        console.log({
          title,
          area,
          category,
          tags,
          preparationMode,
          ingredients,
          measures,
          link,
          thumbnail,
        });
        navigation.navigate('DetailedRecipe', {
          title,
          area,
          category,
          tags,
          preparationMode,
          ingredients,
          measures,
          link,
          thumbnail,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <View style={[styles.container, {width: width - 60}]}>
      <TouchableOpacity
        style={{flex: 1}}
        onPress={() => {
          GetMealByID(_id);
        }}>
        <View style={styles.imageContainer}>
          <Image source={{uri: thumbnail}} style={styles.image} />
        </View>

        <Text style={styles.title}>{title}</Text>

        <Divider style={[styles.div, {width: width - 100}]} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginLeft: 15,
    backgroundColor: '#1D1D1D',
    alignSelf: 'flex-start',
    justifyContent: 'center',

    marginBottom: 60,

    paddingBottom: 30,
  },
  imageContainer: {
    padding: 12,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
    marginVertical: 25,
  },
  div: {
    backgroundColor: '#B1FF92',
    marginTop: 10,
    marginBottom: 20,
    alignSelf: 'center',
  },
});
