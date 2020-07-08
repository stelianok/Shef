import React from 'react';
import {RadioButton} from 'react-native-paper';

import {StyleSheet, View} from 'react-native';


export default function RadioFilter(){
    return(
    <View>
        <RadioButton
        value="Name"
        status = 'checked'
        color='white'
    />
    </View>
    
    );
    

}

