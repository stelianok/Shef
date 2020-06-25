import React from 'react';
import {View, Text, ScrollView, Image, useWindowDimensions} from 'react-native';

import styles from './styles';

export default function DetailedScreen() {
  const width = useWindowDimensions().width;
  return (
    <View style={styles.container}>
      <View style={[styles.card, {width: width - 55}]}>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require('../../../img/placeholder.jpg')}
          />
        </View>

        <Text style={styles.title}> Titulo </Text>
      </View>
    </View>
  );
}
