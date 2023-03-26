import { Button, StyleSheet} from "react-native";

export default StyleSheet.create({
    index: {
        backgroundColor:'transparent',
        flex:4,
        alignItems:"center",
        justifyContent:"flex-end",
    },
    IndexText: {
        color:'white',
        fontSize:35,
        borderRadius:5,
        fontWeight:'800',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 3,
    },
    footer: {
        backgroundColor:'white',
        borderRadius:500,
        display:'flex',
        flexDirection:"row",
        height:"8%",
        justifyContent:'space-around',
        alignItems:"center"
    },
    Index2: {
        backgroundColor:'transparent',
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    ImgCruchiroll: {
        height:50,
        width:50,
    },
    ImgBandai: {
        height:50,
        width:70,
    },
    ImgPrincipal: {
        height:'80%',
        resizeMode:'contain',
    }, 
    background: {
        flex:1
    }
})