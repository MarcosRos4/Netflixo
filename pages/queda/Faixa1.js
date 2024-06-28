import { Image, View } from "react-native";
import { Text } from "react-native-paper";

export default function Faixa1({estilo}) {
    return (
        <View style={estilo.f1Container}>
            <View style={estilo.f1TextContainer}>
                <Text
                variant='displayLarge'
                style={estilo.f1Title}>Aproveite na TV</Text>
                <Text
                variant="headlineSmall"
                style={estilo.f1Message}>
                Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.</Text>
            </View>
            <View style={estilo.f1ImageContainer}>
                <Image
                style={estilo.f1Image}
                source={require('../../assets/faixa1tv.png')}></Image>
            </View>
        </View>
    )
}
