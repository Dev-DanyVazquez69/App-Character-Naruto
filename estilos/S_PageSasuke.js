import { StyleSheet } from "react-native";


export default StyleSheet.create({
    index: {
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
        backgroundColor:"red",
    },
    containerSuperior: {
        alignItems:"center",
        width:"100%",
        height:"35%",
        backgroundColor:"rgba(0,0,0,0.7)",
        borderTopRightRadius:40,
        borderTopLeftRadius:40,
    },
    containerInfos: {
        marginTop:25,
        justifyContent:"center",
        alignContent:"center",
        flexDirection:"row",
        flexWrap:"wrap",
    },

    image: {
        width:"100%",
        height:"100%",
    },
    border: {
        borderColor:"blue",
        borderWidth:5,
    },
    nome: {
        color:"white",
        fontWeight:"900",
        fontSize:35,
        textAlign:"center",
        paddingTop:15,
    },
    containerText: {
        width:"40%",
        height:"45%",
        backgroundColor:"transparent",
        justifyContent:"flex-start",
        marginLeft:10,
        marginTop:20,
    },
    containerTitulo: {
        textAlign:"center",
        fontWeight:"900",
        color:"red",
        fontSize:20,

    },
    containerInfo: {
        color:"white",
        textAlign:"center",
        fontWeight:"200",
    },
    estrela: {
        
    }
})
