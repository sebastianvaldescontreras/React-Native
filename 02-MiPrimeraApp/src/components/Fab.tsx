import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, View, Platform, TouchableOpacity } from 'react-native';

interface Props{
    title: string;
    onPress: () => void;
    position?: 'buttonRight' | 'buttonLeft';
}

export const Fab = ({title, onPress, position}: Props) => {

    const ios = () =>{
        return (
            <TouchableOpacity 
                activeOpacity={0.8} 
                style={[styles.fabLocation, (position === 'buttonRight') ? styles.right : styles.left]} 
                onPress={ onPress }>
                <View style={styles.fab}>
                    <Text style={styles.fabText}>
                          {title}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    const android = () =>{
        return (
            <View style={[styles.fabLocation, (position === 'buttonRight') ? styles.right : styles.left]}>
                <TouchableNativeFeedback 
                    onPress={ onPress }
                    background={TouchableNativeFeedback.Ripple('#28425b', true, 30)}>
                  <View style={styles.fab}>
                      <Text style={styles.fabText}>
                          {title}
                      </Text>
                  </View>
              </TouchableNativeFeedback>
            </View>
        )
    }

    return (Platform.OS === 'ios')? ios() : android()
}

const styles = StyleSheet.create({
    fabLocation:{
        position: 'absolute',
        bottom: 25,
    },
    right:{
        right: 25
    },
    left:{
        left: 25
    },
    fab:{
        backgroundColor: '#5856d6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 4,
        },
        shadowOpacity: 0.40,
        shadowRadius: 4.65,
        elevation: 8,
    },
    fabText:{
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
});
