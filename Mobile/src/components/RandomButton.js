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

        position: 'absolute',
        bottom: -2,
        
    }
    
})
export default function RandomButton(){
    const width = useWindowDimensions().width;
    return(
        <>
         <TouchableOpacity style={[styles.randomButton, {width: width}]}>
          <Text style={styles.buttonText}>Random Recipe</Text>
         </TouchableOpacity>
        </>

    );
}
