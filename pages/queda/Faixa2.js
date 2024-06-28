import { Image, View } from "react-native";
import { Text } from "react-native-paper";

export default function Faixa2({estilo}){
    return (
        <View style={estilo.f2Container}>
            <View style={estilo.f2TextContainer}>
                <Text variant='displayLarge' style={estilo.f2Title}>Assista onde quiser</Text>
                <Text variant="headlineSmall" style={estilo.f2Message}>Assita a quantos filmes e séries quiser no celular, tablet, laptop e TV.</Text>
            </View>
            <View style={estilo.f2ImageContainer}>
                <Image style={estilo.f2Image} source={require('../../assets/faixa2.png')}></Image>
            </View>
        </View>
    )
}
