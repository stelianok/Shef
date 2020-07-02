import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    randomButton: {  
        alignItems: 'center',
        backgroundColor: '#B4F78C',
        padding:13,
        
    },
    buttonText: {
        fontSize: 20
    }
})

export default function RandomButton(){
    return(
        <View style={styles.randomButton}>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Random Recipe</Text>
        </TouchableOpacity>
      </View>

    );
}
