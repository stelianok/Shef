/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  useWindowDimensions,
  Linking,
  FlatList,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import {Divider} from 'react-native-elements';

import styles from './styles';

import ReadLessMore from '../../components/ReadLessMore';

export default function DetailedScreen({route, navigation}) {
  const width = useWindowDimensions().width;

  const {title} = route.params;
  const {area} = route.params;
  const {category} = route.params;
  const {tags} = route.params;
  const {preparationMode} = route.params;
  const {ingredients} = route.params;
  const {measures} = route.params;
  const {link} = route.params;
  const {thumbnail} = route.params;

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
            />
            <FlatList
              data={ingredients}
              renderItem={({item}) => (
                <Text style={[styles.text, {fontSize: 18}]}>{item}</Text>
              )}
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
