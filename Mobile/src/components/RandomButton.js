import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet,useWindowDimensions} from 'react-native';

const styles = StyleSheet.create({

    buttonText: {
        paddingVertical:18,
        fontSize: 20
    },
    randomButton:{
        alignItems: 'center',
        backgroundColor: '#B1FF92',
        
    }
    
})
export default function RandomButton(){
    const width = useWindowDimensions().width;
    return(
        <View>
         <TouchableOpacity style={[styles.randomButton, {width: width}]}>
          <Text style={styles.buttonText}>Random Recipe</Text>
        </TouchableOpacity>
      </View>

    );
}
