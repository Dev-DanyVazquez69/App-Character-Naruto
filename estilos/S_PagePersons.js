import { StyleSheet } from "react-native";


export default StyleSheet.create({
    
    index: {
        flex:1,
        justifyContent:"flex-start",
        alignItems:"center",
        borderColor:"red",
        borderWidth:1,
    },
    index2: {
        flex:10,
        flexWrap:"wrap",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        height:'100%',
        width:'100%',
        textAlign: 'center',
        backgroundColor:"rgba(0,0,0,0)",
        padding:25,
    },
    text:{
        color:"white",
        fontWeight:"900",
        textAlign:"center",
        fontSize:40,
        textShadowColor: 'rgba(255, 255, 0, 0.5)',
        textShadowOffset: { width: 5, height: 5 },
    },
    containerText: {
        flex:1,
        justifyContent:"flex-end",
        width:"100%",
        marginTop:50,
        backgroundColor:"transparent",
    },
})