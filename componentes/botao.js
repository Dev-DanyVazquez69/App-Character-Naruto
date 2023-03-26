import React from "react";
import { TouchableHighlight, StyleSheet, Text } from "react-native";


export default function(){

    const alertar = () => alert("DEU!!")

    return(
        <TouchableHighlight 
        style = {styles.botao}
        onPress = {alertar}
        >
            <Text style={styles.Texto}>ENTRAR</Text>
        </TouchableHighlight>
    )
}


const styles = StyleSheet.create({
    botao: {
        alignItems:"center",
        justifyContent:"center",
        width:"40%",
        height:50,
        backgroundColor:"orange",
        borderRadius:20,
        borderColor:"white",
        borderWidth:2,
    },
    Texto: {
        color:"white",
        fontSize:25,
        fontWeight:"bold",
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 3,
    }
})