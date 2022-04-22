import React from 'react'
import { StyleSheet, View } from 'react-native';

export const PositionAbsolutaScreen = () => {
  return (
        <View style={styles.container}>
            <View style={styles.cajaVerde}></View>
            <View style={styles.cajaMorada}></View>
            <View style={styles.cajaNaranja}></View>
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#28C4D9',
        width: 300,
        height: 300
    },
    cajaVerde:{
        width: 100,
        height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        bottom: 0,
        left: 0,
        position: 'absolute',
        margin: 10
    },
    cajaMorada:{
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        top: 0,
        right: 0,
        position: 'absolute',
        margin: 10
    },
    cajaNaranja:{
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        bottom: 0,
        right: 0,
        position: 'absolute',
        margin: 10
        //...StyleSheet.absoluteFillObject
    }
})