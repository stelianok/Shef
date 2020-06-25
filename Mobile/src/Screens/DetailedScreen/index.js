import React from 'react';
import {View, Text, ScrollView, Image, useWindowDimensions} from 'react-native';

import Icon from 'react-native-vector-icons';
import {Divider} from 'react-native-elements';

import styles from './styles';

export default function DetailedScreen() {
  const width = useWindowDimensions().width;
  return (
    <View style={styles.container}>
      <View style={[styles.card, {width: width - 30}]}>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require('../../../img/placeholder.jpg')}
          />
        </View>

        <Text style={styles.title}>Teriyaki Chicken Casserole</Text>
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
      </View>
    </View>
  );
}
