import React from 'react';
import {
  Text,
  TouchableHighlight,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

import axios from 'axios';

const styles = StyleSheet.create({
  buttonText: {
    paddingVertical: 18,
    fontSize: 20,
  },
  randomButton: {
    alignItems: 'center',
    backgroundColor: '#B1FF92',
    position: 'absolute',
    bottom: -2,
  },
});
export default function RandomButton({navigation}) {
  const width = useWindowDimensions().width;
  async function RandomRecipe() {
    await axios
      .get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => {
        console.log(response.data.meals[0].idMeal);
        navigation.navigate('DetailedRecipe', {
          _id: response.data.meals[0].idMeal,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <TouchableHighlight
        style={[styles.randomButton, {width: width}]}
        underlayColor={'#6FB354'}
        onPress={() => {
          RandomRecipe();
        }}>
        <Text style={styles.buttonText}>Random Recipe</Text>
      </TouchableHighlight>
    </>
  );
}
