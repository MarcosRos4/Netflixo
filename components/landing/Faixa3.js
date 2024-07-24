import { Image, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function Faixa3() {
    return (
        <View style={styles.container}>
            <View style={styles.textView}>
                <Text variant='displayLarge' style={styles.titulo}>Crie perfis para crianças</Text>
                <Text variant="headlineSmall" style={styles.mensagem}>
                Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só pra eles, sem pagar mais por isso.</Text>
            </View>
            <View style={styles.imgView}>
                <Image style={styles.imagem} source={require('../../assets/faixa3.png')}></Image>
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
        paddingVertical:100,       
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