import { Image, View } from "react-native";
import { Text } from "react-native-paper";

export default function Faixa4({estilo}) {
    return (
        <View style={estilo.f4Container}>
            <View style={estilo.f4TextContainer}>
                <Text variant='displayLarge' style={estilo.f4Title}>Baixe séries para assistir offline</Text>
                <Text variant="headlineSmall" style={estilo.f4Message}>
                Assista em um avião, trem ou submarino...</Text>
            </View>
            <View style={estilo.f4ImageContainer}>
                <Image style={estilo.f4Image} source={require('../../assets/faixa4.png')}></Image>
            </View>
        </View>
    )
}