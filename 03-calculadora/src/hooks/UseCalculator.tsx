import { useRef, useState } from "react";

enum Operators{
    add, substract, multiply, split
}

export const UseCalculator = () => {
    const [number, setNumber] = useState('0');
    const [numberBefore, setNumberBefore] = useState('0');
      
    const lastOperator = useRef<Operators>()
      
    const clean = () => {
        setNumber('0')
        setNumberBefore('0')
    }
      
    const buildNumberText = ( numberText : string) =>{
        //Not accept double point
        if(number.includes('.') && numberText === '.'){
          return;
        }else if(number.startsWith('0') || number.startsWith('-0')) {
            // float point
            if(numberText === '.'){
                setNumber(number + numberText);
            //if an 0 and exist an point
            }else if(numberText === '0' && number.includes('.')){
                setNumber(number + numberText);
            //if diferent of 0 and not exist point
            }else if(numberText !== '0' && !number.includes('.')){
                setNumber(numberText)
            }else if( numberText === '0' && !number.includes('.')){
                setNumber(number)
            }
        }else{
            setNumber(number + numberText)
        }
    }
      
    const positiveNegative = () =>{
        number.includes('-')?
            setNumber(number.replace('-','')):
            setNumber('-'.concat(number))
    }
      
    const deleteAValue = () => {
        let negative = '';
        let numberTemp = number;
      
        setNumber(number.slice(0, -1))
      
        if(number.includes('-')){
            negative = '-'
            numberTemp = number.substring(1)
        }
      
        if(numberTemp.length > 1){
            setNumber(negative.concat(numberTemp.slice(0,-1)))
        }else{
            setNumber('0')
        }
    }
      
    const changeNumberForBefore = () => {
        if(number.endsWith('.')){
            setNumberBefore(number.slice(0,-1));    
        }else{
            setNumberBefore(number)
        }  
        setNumber('0')
    }
      
    const split = () => {
        changeNumberForBefore()
        lastOperator.current = Operators.split
    }
      
    const multiply = () => {
        changeNumberForBefore()
        lastOperator.current = Operators.multiply
    }
      
    const substract = () => {
        changeNumberForBefore()
        lastOperator.current = Operators.substract
    }
      
    const add = () => {
        changeNumberForBefore()
        lastOperator.current = Operators.add
    }
        
    const calculate = () =>{
        if(numberBefore === '0'){
            return;
        }
      
        const number1 = Number (number);
        const number2 = Number (numberBefore);
             
        switch(lastOperator.current){
            case Operators.add:
                setNumber(`${number1 + number2}`)
                break;
            case Operators.substract:
                setNumber(`${number2 - number1}`)
                break;
            case Operators.multiply:
                setNumber(`${number1 * number2}`)
                break;
            case Operators.split:
                setNumber(`${number2 / number1}`)
                break;
            default:
                break;
        }
        setNumberBefore('0');
    }

    return { number, 
        numberBefore, 
        clean, 
        positiveNegative, 
        deleteAValue, 
        buildNumberText, 
        split,  
        multiply,
        substract,
        add,
        calculate
    }
}
