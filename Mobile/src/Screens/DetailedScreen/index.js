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

export default function DetailedScreen() {
  const width = useWindowDimensions().width;

  const [title, setTitle] = useState('');
  const [area, setArea] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState([]);
  const [preparationMode, setPreparationMode] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  const [link, setLink] = useState('');
  const [thumbnail, setThumbnail] = useState('');

  async function GetMealByID(id) {
    await axios
      .get('https://www.themealdb.com/api/json/v1/1/lookup.php?', {
        params: {
          i: id,
        },
      })
      .then(function (response) {
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
      .catch(function () {
        console.log('error');
      });
  }
  useEffect(() => {
    GetMealByID(52772);
    return () => {
      console.log('nice');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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

  /*
  function GetDetails() {
    //GetMealByID(52772);
    console.log(area);
    console.log(category);
    console.log(img);
    console.log(link);
    console.log(preparationMode);
    console.log(tags);
    console.log(title);
  }
  */
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
              keyExtractor={(item) => tags.indexOf(item)}
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
          <ReadLessMore
            longText={
              ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit, dui vel convallis elementum, ante ex varius felis, et tempor sem purus quis quam. Integer sit amet luctus neque. Nunc utsodales orci, in dignissim mauris. Donec tempor, risus quisinterdum congue, tellus augue accumsan nulla, non rhoncus purusnibh eget nisl. Maecenas semper, nisl vel imperdiet tempus, odiofelis'
            }
            styles={styles.text}
          />
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
