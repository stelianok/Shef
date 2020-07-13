import React, {useState} from 'react';
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
  const [id, setId] = useState('');
  async function RandomRecipe() {
    await axios
      .get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => {
        console.log(response.data.meals[0].idMeal);
        setId(response.data.meals[0].idMeal);
        console.log(id);
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
        onPress={async () => {
          await RandomRecipe();
          navigation.navigate('DetailedRecipe', {
            id,
          });
        }}>
        <Text style={styles.buttonText}>Random Recipe</Text>
      </TouchableHighlight>
    </>
  );
}
