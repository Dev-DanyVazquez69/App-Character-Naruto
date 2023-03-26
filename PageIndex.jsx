import React from "react";
import { View, Image, ImageBackground, Text} from "react-native";
import S_PageIndex from "./styles/S_PageIndex";
import Botao from "./components/botao.js"

export default function Index(){
   
    return(
    <ImageBackground
    style = {S_PageIndex.background}
    source = {require("./assets/index_orange.png")} 
    >
    <View style={S_PageIndex.index}>
        <Text style = {S_PageIndex.IndexText}>PERSONAGENS NARUTO</Text>
        <Image style={S_PageIndex.ImgPrincipal} source={require('./assets/naruto.png')}></Image>
    </View>
    <View style={S_PageIndex.Index2}>
        <Botao></Botao>
    </View>
    <View style={S_PageIndex.footer}>
        <Image style={S_PageIndex.ImgCruchiroll} source={require('./assets/cruchiroll.png')}></Image>
        <Image style={S_PageIndex.ImgBandai} source={require('./assets/bandai.png')}></Image>
    </View>
    </ImageBackground>
    )
}