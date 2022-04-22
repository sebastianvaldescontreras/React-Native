import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    bottom:{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'flex-end'
     },
    calculatorContainer:{
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end'
    },
    result:{
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 20
    },
    resultSmall:{
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right'
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
        paddingHorizontal: 10
    },
    button:{
        width: 80,
        height: 80,
        backgroundColor: '#333333',
        borderRadius: 100,
        justifyContent: 'center'
    },
    textButton:{
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    }
})