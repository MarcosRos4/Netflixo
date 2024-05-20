import { Text, StyleSheet, TextInput, View } from "react-native"
import Button from "./Button"

export default function CriarAssinatura({props}) {
    return(
        <View>
            <Text style={styles.texto}
            >Tudo pronto para assistir? Informe seu email ou número de celular para criar ou reiniciar sua assinatura.</Text>
            <View style={styles.container}>
                <TextInput maxLength={50} style={styles.imput} placeholder="Email ou número de celular" />
                <Button estilos={styles} label={'Vamos lá >'}></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    texto:{
        color:'white',
        fontSize:20,
        fontWeight:400,
        width:850,
        textAlign:'center'
    },
    container:{
        flexDirection:'row',
        height:100,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:40
    },
    imput:{
        flex:0.6,
        height:'60%',
        color:'white',
        backgroundColor:'#151515',
        opacity:0.7,
        padding:15,
        borderColor:'#7A797C',
        borderWidth:1,
        borderRadius:5,
        marginRight:15,
        fontSize:17,
    },
    buttonContainer:{
        alignItems:'center',
        justifyContent:'center',
        width:'25%',
        height:'60%'
        
    },
    button:{
        borderRadius:5,
        width:'100%',
        height:"100%",backgroundColor:'red',
        alignItems:"center",
        justifyContent:'center',
        
    },
    buttonLabel:{
        color:"#fff",
        fontSize:25,
        fontWeight:400
    }
})
