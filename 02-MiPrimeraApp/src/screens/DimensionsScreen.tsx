import React from 'react'
import { View, StyleSheet, Dimensions, Text, useWindowDimensions } from 'react-native';

// const {width, height} = Dimensions.get('window')

export const DimensionsScreen = () => {

    const {width, height } = useWindowDimensions()

  return (
      <View>
        <View style={ styles.container }>
            <View style={{ ...styles.cajaMorada, width: width * 0.5 }}/>
            <View style={ styles.cajaOrange }/>
        </View>
        <Text style={ styles.title }>W: {width}, H: {height}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 200,
        backgroundColor: 'red'
    },
    cajaMorada:{
        backgroundColor: '#5856D6',
        // width: '50%',
        height: '50%'
    },
    cajaOrange:{
        backgroundColor: '#F0A23B'
    },
    title:{
        fontSize: 20,
        textAlign: 'center'
    }
})

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;



