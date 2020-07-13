import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    alignSelf: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonStyle: {
    backgroundColor: '#B1FF92',
    padding: 10,
    borderRadius: 30,
    width: 100,
    textAlign: 'center',
    marginBottom: 15,
  },
  titleStyle: {
    paddingTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  div: {
    borderTopWidth: 0.5,
    borderColor: '#B1FF92',
    width: 150,
    alignSelf: 'center',
    paddingVertical: 5,
  },
  titleText: {
    fontSize: 18,
    color: 'white',
    paddingBottom: 10,
  },
});

export default function RadioFilter({FilterBy}) {
  const [isNameButtonActive, setIsNameButtonActive] = useState(true);
  const [isCategoryButtonActive, setIsCategoryButtonActive] = useState(false);
  const [isOriginButtonActive, setIsOriginButtonActive] = useState(false);

  function Pressed(setActiveButton, setDeactiveButton1, setDeactiveButton2) {
    setActiveButton(true);
    setDeactiveButton1(false);
    setDeactiveButton2(false);
  }
  return (
    <View>
      <View style={styles.titleStyle}>
        <Text style={styles.titleText}>Filter by:</Text>
        <View style={styles.div} />
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          style={[
            styles.buttonStyle,
            isNameButtonActive
              ? {backgroundColor: '#B1FF92'}
              : {backgroundColor: '#4C7A3A'},
          ]}
          onPress={() => {
            Pressed(
              setIsNameButtonActive,
              setIsCategoryButtonActive,
              setIsOriginButtonActive,
            );
          }}>
          <Text style={styles.textStyle}>Name</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.buttonStyle,
            isCategoryButtonActive
              ? {backgroundColor: '#B1FF92'}
              : {backgroundColor: '#4C7A3A'},
          ]}
          onPress={() => {
            Pressed(
              setIsCategoryButtonActive,
              setIsNameButtonActive,
              setIsOriginButtonActive,
            );
          }}>
          <Text style={styles.textStyle}>Category</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.buttonStyle,
            isOriginButtonActive
              ? {backgroundColor: '#B1FF92'}
              : {backgroundColor: '#4C7A3A'},
          ]}
          onPress={() => {
            Pressed(
              setIsOriginButtonActive,
              setIsNameButtonActive,
              setIsCategoryButtonActive,
            );
          }}>
          <Text style={styles.textStyle}>Origin</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
