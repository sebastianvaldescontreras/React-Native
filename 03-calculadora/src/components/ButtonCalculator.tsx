import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props{
  text: string;
  backgroundColor: string;
  color: string;
  isWide?: boolean; 
  action: (numberText : string) => void ;
}

export const ButtonCalculator = ({text, backgroundColor, color, isWide = false, action} : Props) => {
  return (
    <TouchableOpacity onPress={() => action(text) }>
      <View style={{...styles.button, backgroundColor, width : (isWide)? 180 : 80}}>
        <Text style={{...styles.textButton, color, left: (isWide)? -50 : 0} }>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export const styles = StyleSheet.create({
    button:{
        height: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    textButton:{
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: 'bold'
    }
})