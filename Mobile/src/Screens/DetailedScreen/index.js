import React, {useState, useCallback} from 'react';
import {View, Text, ScrollView, Image, useWindowDimensions} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import {Divider} from 'react-native-elements';

import styles from './styles';

export default function DetailedScreen() {
  const width = useWindowDimensions().width;

  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"
  const toggleNumberOfLines = () => {
    //To toggle the show text or hide it
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback((e) => {
    setLengthMore(e.nativeEvent.lines.length >= 4); //to check the text is more than 4 lines or not
    // console.log(e.nativeEvent);
  }, []);

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

          <Text style={styles.text}> Category: Chicken </Text>
          <Text style={styles.text}> Japanese Recipe </Text>

          <Divider style={[styles.div, {width: width - 75}]} />

          <View style={styles.ingredientsView}>
            <Text style={styles.subtitle}> Ingredients </Text>
            <Icon name={'shopping-cart'} size={36} color={'#B1FF92'} />
          </View>
          <View style={styles.mainContainer}>
            <Text
              onTextLayout={onTextLayout}
              numberOfLines={textShown ? undefined : 4}
              style={[styles.text, {lineHeight: 21}]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              suscipit, dui vel convallis elementum, ante ex varius felis, et
              tempor sem purus quis quam. Integer sit amet luctus neque. Nunc ut
              sodales orci, in dignissim mauris. Donec tempor, risus quis
              interdum congue, tellus augue accumsan nulla, non rhoncus purus
              nibh eget nisl. Maecenas semper, nisl vel imperdiet tempus, odio
              felis
            </Text>

            {lengthMore ? (
              <Text
                onPress={toggleNumberOfLines}
                style={[
                  styles.text,
                  {lineHeight: 21, fontSize: 15, color: 'cyan'},
                ]}>
                {textShown ? 'Read less...' : 'Read more...'}
              </Text>
            ) : null}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
