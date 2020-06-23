import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

import Recipe from '../../components/Recipe';
import styles from './styles';

export default function MainScreen(){
    return(
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.body}>
                <Recipe/>
                
            </View>

        </View>
        </ScrollView>
    )
}