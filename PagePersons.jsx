import React from "react";
import { TextInput, Text, View, ImageBackground, ScrollView } from "react-native";
import S_PagePersons from "./styles/S_PagePersons"
import Cartoes from "./components/cartoes"


export default function Persons() {

    return(
        <ImageBackground source = {require("./assets/red.png")} style = {S_PagePersons.index}>
            <View style = {S_PagePersons.containerText}>
                <Text style = {S_PagePersons.text}>Personagens</Text>
            </View>
            <View style = {S_PagePersons.index2}>
                <Cartoes nome = "Kakashi katake"/>
                <Cartoes nome = "Naruto Uzumaki"/>
                <Cartoes nome = "Obito Uchiha"/>
                <Cartoes nome = "Sasuke Uchiha"/>
                <Cartoes nome = "Madara Uchiha"/>
                <Cartoes nome = "Itachi Uchiha"/>
                <Cartoes nome = "Orochimaro"/>
                <Cartoes nome = "Kimiraru"/>
                <Cartoes nome = "Kawaki"/>
            </View>
        </ImageBackground>
    )
}