import { Image, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function Faixa2() {
    return (
        <View style={styles.container}>
            <View style={styles.textView}>
                <Text variant='displayLarge' style={styles.titulo}>Assista onde quiser</Text>
                <Text variant="headlineSmall" style={styles.mensagem}>Assita a quantos filmes e séries quiser no celular, tablet, laptop e TV.</Text>
            </View>
            <View style={styles.imgView}>
                <Image style={styles.imagem} source={require('../../assets/faixa2.png')}></Image>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        flexDirection: 'row-reverse',
        backgroundColor: 'black',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:100,
        gap:30
        
    },
    textView: {
        alignItems:'flex-start',
        justifyContent:'center',
        flex: 0.5
    },
    imgView: {
        alignItems:'flex-end',
        flex: 0.5,
        
    },
    imagem:{
        userSelect:'none',
        width:'80%',
        resizeMode:"contain"
    },
    titulo:{
        width:'80%',
        fontWeight:"bold",
        textAlign:"left",
        userSelect:"none",
        marginBottom:15
    },
    mensagem:{
        width:'80%',
        textAlign:"justify",
        userSelect:"none"
    }
})