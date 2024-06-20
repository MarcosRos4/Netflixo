import { Image, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function Faixa1({ params }) {
    return (
        <View style={styles.container}>
            <View style={styles.textView}>
                <Text variant='displayLarge' style={styles.titulo}>Aproveite na TV</Text>
                <Text variant="headlineSmall" style={styles.mensagem}>Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.</Text>
            </View>
            <View style={styles.imgView}>
                <Image style={styles.imagem} source={require('../../assets/faixa1tv.png')}></Image>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'black',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:140,
        
    },
    textView: {
        alignItems:'flex-end',
        justifyContent:'center',
        
        
        flex: 0.5
    },
    imgView: {
        alignItems:'flex-start',
        flex: 0.5
    },
    imagem:{
        userSelect:'none',
        resizeMode:'contain',
        width:'80%',
    },
    titulo:{
        width:'80%',
        fontWeight:"bold",
        textAlign:"justify",
        userSelect:"none",
        marginBottom:15
    },
    mensagem:{
        width:'80%',
        textAlign:"justify",
        userSelect:"none"
    }
})