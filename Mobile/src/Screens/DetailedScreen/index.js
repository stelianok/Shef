/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  useWindowDimensions,
  Linking,
  FlatList,
} from 'react-native';

import axios from 'axios';

import Icon from 'react-native-vector-icons/Feather';
import {Divider} from 'react-native-elements';

import styles from './styles';

import ReadLessMore from '../../components/ReadLessMore';

export default function DetailedScreen({route, navigation}) {
  const width = useWindowDimensions().width;

  const {_id} = route.params;
  const [title, setTitle] = useState('');
  const [area, setArea] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState([]);
  const [preparationMode, setPreparationMode] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  const [link, setLink] = useState('');
  const [thumbnail, setThumbnail] = useState('');

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
  function idGenerator() {
    var S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (
      S4() +
      S4() +
      '-' +
      S4() +
      '-' +
      S4() +
      '-' +
      S4() +
      '-' +
      S4() +
      S4() +
      S4()
    );
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
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    GetMealByID(_id);
    return () => {
      console.log('nice');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={[styles.card, {width: width - 30}]}>
          <View style={styles.imgView}>
            <Image style={styles.img} source={{uri: thumbnail}} />
          </View>

          <Text style={styles.title}>{title}</Text>

          <Divider style={[styles.div, {width: width - 75}]} />

          <Text style={styles.tagTitle}>#Tags</Text>
          <View style={styles.tagView}>
            <FlatList
              data={tags}
              renderItem={({item}) => (
                <Text style={styles.tagText}> {item}</Text>
              )}
              keyExtractor={(item) => tags.indexOf(item).toString()}
              horizontal={true}
            />
          </View>

          <Text style={styles.text}> Category: {category} </Text>
          <Text style={styles.text}> {area} Recipe </Text>

          <Divider style={[styles.div, {width: width - 75}]} />

          <View style={styles.ingredientsView}>
            <Text style={styles.subtitle}> Ingredients </Text>
            <Icon name={'shopping-cart'} size={36} color={'#B1FF92'} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <FlatList
              data={measures}
              renderItem={({item}) => (
                <Text style={[styles.text, {fontSize: 18}]}>•{item}</Text>
              )}
              keyExtractor={(item, index) => {
                return item.id;
              }}
            />
            <FlatList
              data={ingredients}
              renderItem={({item}) => (
                <Text style={[styles.text, {fontSize: 18}]}>{item}</Text>
              )}
              keyExtractor={(item, index) => {
                return item.id;
              }}
            />
          </View>
          <Divider style={[styles.div, {width: width - 75}]} />

          <Text style={styles.subtitlePrep}>Preparation Mode</Text>
          <ReadLessMore
            longText={preparationMode}
            styles={[styles.text, {paddingTop: 15}]}
          />

          <Divider style={[styles.div, {width: width - 75}]} />
          <Text
            style={[
              styles.text,
              {color: 'cyan', textDecorationLine: 'underline'},
            ]}
            onPress={() => {
              Linking.openURL(link);
            }}>
            Youtube video with instructions
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
