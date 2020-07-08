import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    buttonText: {
        paddingHorizontal:100,
        paddingVertical:18,
        fontSize: 20
    },
    randomButton:{
        alignItems: 'center',
        backgroundColor: '#B1FF92',
    }
    
})

export default function RandomButton(){
    return(
       
        <View>
         <TouchableOpacity style={styles.randomButton}>
          <Text style={styles.buttonText}>Random Recipe</Text>
        </TouchableOpacity>
      </View>

    );
}
