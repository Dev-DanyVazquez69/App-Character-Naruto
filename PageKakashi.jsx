import React from "react";
import { Text, View, ImageBackground, Image} from "react-native";
import style from "./estilos/S_PageKakashi";

export default function () {
    return (
        <ImageBackground source = {require('./assets/kakashi.png')} style = {style.index}>
            <View style = {style.containerSuperior}>
                <Text style = {style.nome}>KAKASHI</Text>
                <Image source = {require('./assets/estrelas.png')}></Image>
                <View style = {style.containerInfos}>
                    <View style = {style.containerText}>
                        <Text style = {style.containerTitulo}>CLÃ</Text>
                        <Text style = {style.containerInfo}>Hatake</Text>
                    </View>
                    <View style = {style.containerText}>
                        <Text style = {style.containerTitulo}>NATUREZA</Text>
                        <Text style = {style.containerInfo}>Raio e Terra</Text>
                    </View>
                    <View style = {style.containerText}>
                        <Text style = {style.containerTitulo}>VILA</Text>
                        <Text style = {style.containerInfo}>Konoha</Text>
                    </View>
                    <View style = {style.containerText}>
                        <Text style = {style.containerTitulo}>IDADE</Text>
                        <Text style = {style.containerInfo}>17(ambu)</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}