import { LinearGradient } from 'expo-linear-gradient';
import { Image, ImageBackground, Text, View, useWindowDimensions } from "react-native";
import Botao from "../../components/Button";
import CriarAssinatura from "../../components/CriarAssinatura";

export default function Capa({estilo}) {
    return(
        <View style={estilo.capaContainer}>
            <ImageBackground style={estilo.capaBackgroundImg} source={require('../../assets/landingbg.jpeg')} >
                <LinearGradient colors={['rgba(0,0,0,0.9)', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.9)']} stylesDesktop={estilo.capaGradient}>
                    <View style={estilo.capaHeader}>
                        <View style={estilo.headerEsquerda}>
                            <Image style={{tintColor:'#e50914'}} source={require('../../assets/netflix.png')}></Image>
                        </View>
                        <View style={estilo.headerCentro} />
                        <View style={estilo.headerDireita}>
                            <Image style={{borderColor:'gray', borderWidth:1, borderRadius:2}} source={require('../../assets/idiomas.png')}></Image>
                            <Botao
                                labelStyle={estilo.headerDireitaButtonLabel}
                                contentStyle={estilo.headerDireitaButton}
                                texto={'Entrar'}
                            />
                        </View>
                    </View>
                    <View style={estilo.capaContentContainer}>
                        <View style={estilo.capaContent}>
                            <Text style={[estilo.capaTexto,{ fontSize: useWindowDimensions().width * 0.03 }] }>Filmes, séries e muito mais, sem limites</Text>
                            <Text style={[estilo.capaTexto, { fontWeight: 400, fontSize: useWindowDimensions().width * 0.02 }]}>Assista onde quiser. Cancele quando quiser.</Text>
                            <CriarAssinatura weight={5}/>
                        </View>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>
    )
}