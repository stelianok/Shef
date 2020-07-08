import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
    textStyle:{
        fontSize:18,
        color:'white',
    },
    container:
    {   
        flexDirection:'row',
        justifyContent:'space-between',

    },
    buttonStyle:{
        padding: 10
    },
    titleStyle:{
        paddingTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    div:{
        borderTopWidth: 1,
        borderColor: '#B1FF92',
        width: 250,
        alignSelf: 'center'
    }
});

export default function RadioFilter(){
    return(
        <View>
            
            <View style={styles.titleStyle}>
                
                 <Text style={styles.textStyle}>Filter by:</Text>
            </View>

            <View style={styles.container}>
                <TouchableOpacity style={styles.buttonStyle}> 
                 <Text style={styles.textStyle}>Name</Text>  
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonStyle}>
                 <Text style={styles.textStyle}>Category</Text> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonStyle}>   
                  <Text style={styles.textStyle}>Origin</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
   
};


