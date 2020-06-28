import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    randomButton: {  
        
        backgroundColor: '#B4F78C',
        padding:13,
        height: 50,
        paddingHorizontal:15,
        alignItems: 'center',

        
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
