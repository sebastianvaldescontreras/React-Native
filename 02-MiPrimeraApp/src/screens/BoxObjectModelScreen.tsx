import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Box Object Model
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'red'
    },
    title:{
        paddingHorizontal: 50,
        paddingVertical: 20,
        marginLeft: 20,
        marginRight:20,
        fontSize: 20,
        //width: 150,
        //backgroundColor: 'red'
        borderWidth: 10
    }
})
