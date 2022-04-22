import React from 'react'
import { View, StyleSheet } from 'react-native';

export const TareaScreen6 = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cajaMorada}></View>
        <View style={styles.cajaNaranja}></View>
        <View style={styles.cajaAzul}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#28425B',
        flexDirection: 'column',
    },
    cajaMorada:{
        flex:2,
        width: '100%',
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6'
        
    },
    cajaNaranja:{
        flex: 2,
        width: '100%',
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B'
    }, 
    cajaAzul:{
        flex: 3,
        width: '100%',
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9'
    }
})