import { View, StyleSheet, ImageBackground, Text, Image, ScrollView, useWindowDimensions, Dimensions} from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import CriarAssinatura from "../../components/CriarAssinatura";

import Botao from "../../components/Button";
import Faixa1 from "./Faixa1";
import Faixa2 from './Faixa2'
import Faixa3 from "./Faixa3";
import Faixa4 from "./Faixa4";
import Faixa5 from "./faixa5";
import Anuncio from "../../components/Anuncio";

export default function Landing({ props }) {
    return (
        <View style={stylesHorizontal.container}>
            <ScrollView>
                <View style={{height:Dimensions.get('window').height * 0.8}}>
                    <ImageBackground style={stylesHorizontal.bgImg} source={require('../../assets/landingbg.jpeg')} >
                        <LinearGradient colors={['rgba(0,0,0,0.9)', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.9)']} stylesHorizontal={stylesHorizontal.gradient}>
                            <View style={stylesHorizontal.header}>
                                <View style={stylesHorizontal.netflix}>
                                    <Image style={{tintColor:'#e50914'}} source={require('../../assets/netflix.png')}></Image>
                                </View>
                                <View style={stylesHorizontal.centro} />
                                    <View style={stylesHorizontal.direita}>
                                        <Image style={{borderColor:'gray', borderWidth:1, borderRadius:2}} source={require('../../assets/idiomas.png')}></Image>
                                        <Botao
                                            labelStyle={stylesHorizontal.buttonLabel}
                                            contentStyle={stylesHorizontal.button}
                                            texto={'Entrar'}
                                        />
                                    </View>
                            </View>
                            <View style={stylesHorizontal.faixa1} >
                                <View style={stylesHorizontal.conteudof1}>
                                    <Text style={stylesHorizontal.filmes}>Filmes, séries e muito mais, sem limites</Text>
                                    <Text style={[stylesHorizontal.filmes, { fontSize: 25, fontWeight: 400 }]}>Assista onde quiser. Cancele quando quiser.</Text>
                                    <CriarAssinatura />
                                </View>
                            </View>
                        </LinearGradient>
                    </ImageBackground>
                </View>
                <Anuncio />
                <Faixa1 />
                <View style={{ gap: 7, flexDirection: 'column', backgroundColor: '#232323', borderTopColor: '#232323', borderTopWidth: 7 }}>
                    <Faixa2 />
                    <Faixa3 />
                    <Faixa4 />
                    <Faixa5 />
                </View>
            </ScrollView>
        </View>
    )
}


const stylesHorizontal = StyleSheet.create({

    container: {
        flex: 1,
        zIndex: 0
    },
    bgImg: {
        height: "100%"
    },
    gradient: {
        flexDirection: 'column'
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 25,
    },
    netflix: {
        flex: 0.18,
        alignItems: 'flex-end',
        paddingLeft:'10%'
    },
    centro: {
        flex: 0.6
    },
    direita: {
        flexDirection: 'row',
        flex:0.25,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap:20,
        paddingRight:'10%'
    },

    faixa1: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 200,
        height: 900
    },
    conteudof1: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    filmes: {
        color: 'white',
        fontSize: 60,
        fontWeight: '900',
        paddingBottom: 20,
        userSelect: "none",
        fontFamily:'Gothan, sans-serif'
    },
    button: {
        height: 30,
        width:80,
        alignItems: "center",
        justifyContent: 'center',
        padding:0
    },
    buttonLabel: {
        color: "#fff",
        fontSize: 15,
        fontWeight: 400,
        overflow:'visible'
    }
})

const stylesVertical = StyleSheet.create({})