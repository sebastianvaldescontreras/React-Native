import React from 'react'
import { Text, View } from 'react-native'
import { UseCalculator } from '../hooks/UseCalculator'
import { ButtonCalculator } from '../components/ButtonCalculator'
import { styles } from '../theme/AppTheme'

var valuesButton = [
  {text: "C"  , backgroundColor: "#9B9B9B", color: 'black'},
  {text: "+/-", backgroundColor: "#9B9B9B", color: 'black'},
  {text: "del", backgroundColor: "#9B9B9B", color: 'black'},
  {text: "/"  , backgroundColor: "#FF9427", color: 'white'},
  {text: "7"  , backgroundColor: "#2D2D2D", color: 'white'},
  {text: "8"  , backgroundColor: "#2D2D2D", color: 'white'},
  {text: "9"  , backgroundColor: "#2D2D2D", color: 'white'},
  {text: "x"  , backgroundColor: "#FF9427", color: 'white'},
  {text: "4"  , backgroundColor: "#2D2D2D", color: 'white'},
  {text: "5"  , backgroundColor: "#2D2D2D", color: 'white'},
  {text: "6"  , backgroundColor: "#2D2D2D", color: 'white'},
  {text: "-"  , backgroundColor: "#FF9427", color: 'white'},
  {text: "1"  , backgroundColor: "#2D2D2D", color: 'white'},
  {text: "2"  , backgroundColor: "#2D2D2D", color: 'white'},
  {text: "3"  , backgroundColor: "#2D2D2D", color: 'white'},
  {text: "+"  , backgroundColor: "#FF9427", color: 'white'},
  {text: "0"  , backgroundColor: "#2D2D2D", color: 'white'},
  {text: "."  , backgroundColor: "#2D2D2D", color: 'white'},
  {text: "="  , backgroundColor: "#FF9427", color: 'white'}
]

export const CalculatorScreen = () => {

  const {number, 
      numberBefore, 
      clean, 
      positiveNegative, 
      deleteAValue, 
      buildNumberText, 
      split,  
      multiply,
      substract,
      add,
      calculate} = UseCalculator();

  return (
    <View style={styles.calculatorContainer}>
            {(numberBefore !== '0') && (
                  <Text style={styles.resultSmall}>{numberBefore}</Text>
                  )
            }
        
        <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit={true} >{number}</Text>
        
        <View style={styles.row}>
              <ButtonCalculator text={valuesButton[0].text} backgroundColor={valuesButton[0].backgroundColor} color={valuesButton[0].color} action={ clean }/>
              <ButtonCalculator text={valuesButton[1].text} backgroundColor={valuesButton[1].backgroundColor} color={valuesButton[1].color} action={ positiveNegative }/>
              <ButtonCalculator text={valuesButton[2].text} backgroundColor={valuesButton[2].backgroundColor} color={valuesButton[2].color} action={ deleteAValue }/>
              <ButtonCalculator text={valuesButton[3].text} backgroundColor={valuesButton[3].backgroundColor} color={valuesButton[3].color} action={ split }/>
        </View>
        
        <View style={styles.row}>
              <ButtonCalculator text={valuesButton[4].text} backgroundColor={valuesButton[4].backgroundColor} color={valuesButton[4].color} action={ buildNumberText }/>
              <ButtonCalculator text={valuesButton[5].text} backgroundColor={valuesButton[5].backgroundColor} color={valuesButton[5].color} action={ buildNumberText }/>
              <ButtonCalculator text={valuesButton[6].text} backgroundColor={valuesButton[6].backgroundColor} color={valuesButton[6].color} action={ buildNumberText }/>
              <ButtonCalculator text={valuesButton[7].text} backgroundColor={valuesButton[7].backgroundColor} color={valuesButton[7].color} action={ multiply }/>
        </View>
        <View style={styles.row}>
              <ButtonCalculator text={valuesButton[8].text} backgroundColor={valuesButton[8].backgroundColor} color={valuesButton[8].color} action={ buildNumberText }/>
              <ButtonCalculator text={valuesButton[9].text} backgroundColor={valuesButton[9].backgroundColor} color={valuesButton[9].color} action={ buildNumberText }/>
              <ButtonCalculator text={valuesButton[10].text} backgroundColor={valuesButton[10].backgroundColor} color={valuesButton[10].color} action={ buildNumberText }/>
              <ButtonCalculator text={valuesButton[11].text} backgroundColor={valuesButton[11].backgroundColor} color={valuesButton[11].color} action={ substract }/>
        </View>
        <View style={styles.row}>
              <ButtonCalculator text={valuesButton[12].text} backgroundColor={valuesButton[12].backgroundColor} color={valuesButton[12].color} action={ buildNumberText }/>
              <ButtonCalculator text={valuesButton[13].text} backgroundColor={valuesButton[13].backgroundColor} color={valuesButton[13].color} action={ buildNumberText }/>
              <ButtonCalculator text={valuesButton[14].text} backgroundColor={valuesButton[14].backgroundColor} color={valuesButton[14].color} action={ buildNumberText }/>
              <ButtonCalculator text={valuesButton[15].text} backgroundColor={valuesButton[15].backgroundColor} color={valuesButton[15].color} action={ add }/>
        </View>
        <View style={styles.row}>
              <ButtonCalculator text={valuesButton[16].text} backgroundColor={valuesButton[16].backgroundColor} color={valuesButton[16].color} action={ buildNumberText } isWide />
              <ButtonCalculator text={valuesButton[17].text} backgroundColor={valuesButton[17].backgroundColor} color={valuesButton[17].color} action={ buildNumberText }/>
              <ButtonCalculator text={valuesButton[18].text} backgroundColor={valuesButton[18].backgroundColor} color={valuesButton[18].color} action={ calculate }/>
        </View>
    </View>
  )
}