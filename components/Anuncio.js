import { Text, View, Image, ImageBackground } from "react-native"

export default function Anuncio({estilo}) {
    return (
        <View style={estilo.anuncioContainer}>
            <ImageBackground style={estilo.anuncioBackgroundImage} source={require('../assets/anuncio.png')}>
                <Image style={estilo.pipoca} source={require('../assets/pipoca.png')} />
                <View style={estilo.anuncioTextoContainer}>
                    <Text style={estilo.anuncioTitulo}>A Netflix que você adora por apenas R$ 18,90.</Text>
                    <Text style={estilo.anuncioVenda}>Assine o plano Padrão com anúncios.</Text>
                    <Text style={estilo.anuncioSaiba}>Saiba Mais</Text>
                </View>
            </ImageBackground>
        </View>
    )
}