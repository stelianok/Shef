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
import {Divider} from 'react-native-elements';

export default function Recipe({_img, _title, _id, navigation}) {
  const width = useWindowDimensions().width;

  const [title, setTitle] = useState(_title);
  const [thumbnail, setThumbnail] = useState(_img);
  return (
    <View style={[styles.container, {width: width - 60}]}>
      <TouchableOpacity
        style={{flex: 1}}
        onPress={() => {
          navigation.navigate('DetailedRecipe', {
            _id,
          });
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
