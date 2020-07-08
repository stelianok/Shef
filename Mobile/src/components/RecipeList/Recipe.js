import React,{useState,useEffect} from 'react';

import {View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';

export default function Recipe({_img,_title,_origin,_category}){

    const [image, setImage] = useState(_img);
    const [title, setTitle] = useState(_title);
    const [origin, setOrigin] = useState(_origin);
    const [category, setCategory] = useState(_category);
    return(
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
    )
}
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
        borderTopWidth: 0.5,
        borderColor: '#B1FF92',
        width: 250,
        alignSelf: 'center'
        
    },
    title:{
        textAlign:'center',
        fontWeight:'bold',
        color:'white',
        fontSize: 18,
        paddingBottom: 10
    },
    subtext:{
        textAlign:'left',
        fontSize: 18,
        color:'white',
        paddingBottom: 1
    }
})

