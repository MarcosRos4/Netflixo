import { Image, View } from "react-native";
import { Text } from "react-native-paper";

export default function Faixa3({estilo}) {
    return (
        <View style={estilo.f3Container}>
            <View style={estilo.f3TextContainer}>
                <Text variant='displayLarge' style={estilo.f3Title}>Crie perfis para crianças</Text>
                <Text variant="headlineSmall" style={estilo.f3Message}>
                Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só pra eles, sem pagar mais por isso.</Text>
            </View>
            <View style={estilo.f3ImageContainer}>
                <Image style={estilo.f3Image} source={require('../../assets/faixa3.png')}></Image>
            </View>
        </View>
    )
}