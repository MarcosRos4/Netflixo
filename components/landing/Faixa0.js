import { View, ImageBackground, Text, useWindowDimensions, Image, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import CriarAssinatura from '../landing/CriarAssinatura'
import Botao from "../landing/Button";
import { Link } from 'expo-router';

export default function Faixa0({}) {
    let windowDimensions = useWindowDimensions()
    return(
        <View style={{height: windowDimensions.height * 0.8}}>
                    <ImageBackground style={stylesHorizontal.bgImg} source={require('../../assets/landingbg.jpeg')} >
                        <LinearGradient colors={['rgba(0,0,0,0.9)', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.9)']} stylesHorizontal={stylesHorizontal.gradient}>
                            
                            <View style={stylesHorizontal.header}>
                                <View style={stylesHorizontal.netflix}>
                                    <Image style={{tintColor:'#e50914'}} source={require('../../assets/netflix.png')}></Image>
                                </View>
                                
                                    <View style={stylesHorizontal.direita}>
                                        <Image style={{borderColor:'gray', borderWidth:1, borderRadius:2}} source={require('../../assets/idiomas.png')}></Image>
                                        <Link href={'/profiles'}>
                                        <Botao
                                            labelStyle={stylesHorizontal.buttonLabel}
                                            contentStyle={stylesHorizontal.button}
                                            texto={'Entrar'}
                                        />
                                        </Link>
                                    </View>
                            </View>

                            <View style={stylesHorizontal.faixa1} >
                                <View style={stylesHorizontal.conteudof1}>
                                    <Text style={[stylesHorizontal.filmes, { fontWeight: '900', fontSize: windowDimensions.width * 0.03 }]}>Filmes, séries e muito mais, sem limites</Text>
                                    <Text style={[stylesHorizontal.filmes, { fontWeight: '500', fontSize: windowDimensions.width * 0.02 }]}>Assista onde quiser. Cancele quando quiser.</Text>
                                    <CriarAssinatura />
                                </View>
                            </View>

                        </LinearGradient>
                    </ImageBackground>
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
        paddingTop: 40,
    },
    netflix: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft:'10%'
    },
    direita: {
        flexDirection: 'row',
        flex:1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
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