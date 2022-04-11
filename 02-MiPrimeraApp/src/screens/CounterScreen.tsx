import React, {useState} from 'react'
import { View, Text, StyleSheet} from 'react-native';
import { Fab } from '../components/Fab';

export const CounterScreen = () => {
    
    const [counter, setCounter] = useState(10)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Contador: { counter }
            </Text>  
            <Fab title="+1" onPress={() => setCounter(counter + 1)} position="buttonRight"/>
            <Fab title="-1" onPress={() => setCounter(counter - 1)} position="buttonLeft"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        top: -10
    }
});
