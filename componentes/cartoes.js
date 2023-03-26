import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import S_PagePersons from "../estilos/S_PagePersons";


export default function (props) {
    
    const  personagem = props.nome;

    return ( 
        <View style = {[style.border, style.cartao]}>
            <Image style = {style.image} source = {require('../assets/kakashi.png')}></Image>
            <View style = {[style.containerText, style.border]}>
                <Text style = {style.text}>{personagem}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    
    border: {
        borderColor:'white',
        borderWidth:1,
        borderRadius:10,
    },

    containerText: {
        width:'100%',
        backgroundColor:"white",
        borderTopLeftRadius:0,
        borderTopRightRadius:0,
    },

    cartao: {
        marginTop:20,
        width:"30%",
        height:"25%",
        backgroundColor:'transparent',
    },

    image: {
        height:"90%",
        width:"100%",
        resizeMode:"contain",
    },
    text: {
        color:"black",
        textAlign:"center",
        fontWeight:"900",

    }
})