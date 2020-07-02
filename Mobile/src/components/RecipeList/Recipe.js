import React from 'react';

import {View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';

import {Divider} from 'react-native-elements';


const styles = StyleSheet.create({
    container:{
        marginTop:15,
        marginLeft:15,
        backgroundColor: '#1D1D1D',
        alignSelf:'flex-start',
        justifyContent: 'center',
        width:300,
        height:300
        
    },
    imageContainer:{
        padding:12
    },
    image:{
        width:'100%',
        height:165,
        resizeMode: 'stretch'
    },
    infoContainer:{ 
        padding: 15,
        borderTopWidth: 1,
        borderColor: '#B1FF92',
        
    },
    title:{
        textAlign:'center',
        fontWeight:'bold',
        color:'white',
        fontSize: 18,
        paddingBottom: 10
    },
    subtext:{
        textAlign:'center',
        fontSize: 18,
        color:'white',
    }
})

const Recipe = ({recipe: {image, title, category, origin} } ) => (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={{uri:(image)}} style={styles.image}/>
        </View>

        <Text style={styles.title}>{title}</Text>

        <View style={styles.infoContainer}>
            
            <Text style={styles.subtext}>Category: {category}</Text>
            <Text style={styles.subtext}>Origin: {origin}</Text>
        </View>
    </View>
);

export default Recipe;