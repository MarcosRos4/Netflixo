import { Text, StyleSheet, View, Image, ImageBackground } from "react-native"



export default function Anuncio(params) {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.imgBg} source={require('../assets/anuncio.png')}>
                <Image style={styles.imagem} source={require('../assets/pipoca.png')} />
                <View style={styles.textosV}>
                    <Text style={styles.titulo}>A Netflix que você adora por apenas R$ 18,90.</Text>
                    <Text style={styles.venda}>Assine o plano Padrão com anúncios.</Text>
                    <Text style={styles.saiba}>Saiba Mais</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex:1,
        width:'90%',
        position:"absolute",
        top: '14%',
        left: '5%',
        height:136
    },
    imgBg:{
        flexDirection:'row',
        alignItems:'center',
        gap:20,
        paddingLeft:'35%',
        paddingTop:15,
        resizeMode:'contain',
        width:'100%'
    },
    imagem:{
        flexDirection:'row',
        resizeMode:'contain',
        height:100
    },
    textosV:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'flex-start',
        gap:5
    },
    titulo:{
        color:'white',
        fontWeight:'400',
        textAlign:'left',
        fontSize:20
    },
    venda:{
        color:'white',
        fontWeight:'400',
        textAlign:'left',
        fontSize:15
    },
    saiba:{
        color:'#00a2ff',
        textDecorationLine:"underline",
        textDecorationColor:'#00a2ff',
        fontWeight:'200',
        fontSize:15
    }
})
