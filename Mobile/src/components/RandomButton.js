import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
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
  const [data, setData] = useState([]);

  async function RandomRecipe() {
    await axios
      .get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => {
        console.log(response.data.meals[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <TouchableOpacity
        style={[styles.randomButton, {width: width}]}
        onPress={() => {
          RandomRecipe();
        }}>
        <Text style={styles.buttonText}>Random Recipe</Text>
      </TouchableOpacity>
    </>
  );
}
