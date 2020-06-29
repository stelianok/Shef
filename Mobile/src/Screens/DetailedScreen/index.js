/* eslint-disable react-native/no-inline-styles */
import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  useWindowDimensions,
  Linking,
} from 'react-native';
import axios from 'axios';

import Icon from 'react-native-vector-icons/Feather';
import {Divider} from 'react-native-elements';

import styles from './styles';

import ReadLessMore from '../../components/ReadLessMore';

export default function DetailedScreen() {
  const width = useWindowDimensions().width;

  const [area, setArea] = useState('');
  const [category, setCategory] = useState('');

  async function GetMealByID(id) {
    await axios
      .get('https://www.themealdb.com/api/json/v1/1/lookup.php?', {
        params: {
          i: id,
        },
      })
      .then(function (response) {
        console.log(response.data.meals[0]);
      })
      .catch(function () {
        console.log('error');
      });
  }
  function GetDetails() {
    GetMealByID(52772);
    console.log(area);
    console.log(category);
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={[styles.card, {width: width - 30}]}>
          <View style={styles.imgView}>
            <Image
              style={styles.img}
              source={require('../../../img/placeholder.jpg')}
            />
          </View>

          <Text style={styles.title} onPress={GetDetails}>
            Teriyaki Chicken Casserole
          </Text>
          <Text style={styles.level}> Intermediate </Text>
          <Divider style={[styles.div, {width: width - 75}]} />

          <Text style={styles.tagTitle}>#Tags</Text>
          <View style={styles.tagView}>
            <Text style={styles.tagText}> Chicken</Text>
            <Text style={styles.tagText}> Baked</Text>
            <Text style={styles.tagText}> Baked</Text>
            <Text style={styles.tagText}> Baked</Text>
            <Text style={styles.tagText}> Baked</Text>
          </View>

          <Text style={styles.text}> Category: Chicken </Text>
          <Text style={styles.text}> Japanese Recipe </Text>

          <Divider style={[styles.div, {width: width - 75}]} />

          <View style={styles.ingredientsView}>
            <Text style={styles.subtitle}> Ingredients </Text>
            <Icon name={'shopping-cart'} size={36} color={'#B1FF92'} />
          </View>
          <ReadLessMore
            longText={
              ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit, dui vel convallis elementum, ante ex varius felis, et tempor sem purus quis quam. Integer sit amet luctus neque. Nunc utsodales orci, in dignissim mauris. Donec tempor, risus quisinterdum congue, tellus augue accumsan nulla, non rhoncus purusnibh eget nisl. Maecenas semper, nisl vel imperdiet tempus, odiofelis'
            }
            styles={styles.text}
          />
          <Divider style={[styles.div, {width: width - 75}]} />

          <Text style={styles.subtitlePrep}>Preparation Mode</Text>
          <ReadLessMore
            longText={
              ' dasdasdorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit, dui vel convallis elementum, ante ex varius felis, et tempor sem purus quis quam. Integer sit amet luctus neque. Nunc utsodales orci, in dignissim mauris. Donec tempor, risus quisinterdum congue, tellus augue accumsan nulla, non rhoncus purusnibh eget nisl. Maecenas semper, nisl vel imperdiet tempus, odiofelis'
            }
            styles={styles.text}
          />

          <Divider style={[styles.div, {width: width - 75}]} />
          <Text
            style={[
              styles.text,
              {color: 'cyan', textDecorationLine: 'underline'},
            ]}
            onPress={() => {
              Linking.openURL('https://www.youtube.com/watch?v=QQeB4XQhp2E');
            }}>
            Youtube video with instructions
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
