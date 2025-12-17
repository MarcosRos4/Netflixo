import { View, ImageBackground, Text, useWindowDimensions, Image, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { useState, useEffect } from 'react';
import CriarAssinatura from './CriarAssinatura'
import Botao from "./Button";


export default function Faixa0({}) {
    const [dimensions, setDimensions] = useState({width:1920, height:1080})
    let newDimensions = useWindowDimensions()
    
    useEffect(()=>{
        setDimensions({width:newDimensions.width, height:newDimensions.height})
    },
    [newDimensions])

    const backgroundImg = require('../../assets/landingbg.jpeg')
    const netflix = require('../../assets/netflix.png')
    const languages = require('../../assets/idiomas.png')
    
    return(
        <View style={{height: dimensions.height * 0.8}}>
            <ImageBackground style={styles.bgImg} source={backgroundImg} >
                <LinearGradient colors={['rgba(0,0,0,0.9)', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.9)']} >
                    <View style={styles.header}>
                        <View style={styles.netflix}>
                            <Image
                            tintColor={'#e50914'}
                            source={netflix}/>
                        </View>
                            <View style={styles.direita}>
                                <Image
                                style={{borderColor:'gray', borderWidth:1, borderRadius:2}}
                                source={languages}/>
                                <Link href={'/profiles'}>
                                    <Botao
                                        labelStyle={styles.buttonLabel}
                                        contentStyle={styles.button}
                                        texto={'Entrar'}/>
                                </Link>
                            </View>
                    </View>
                    <View style={styles.faixa1} >
                        <View style={styles.conteudof1}>
                            <Text
                            style={[styles.filmes, { fontWeight: '900', fontSize: dimensions.width * 0.03 }]}>
                                Filmes, séries e muito mais, sem limites</Text>
                            <Text
                            style={[styles.filmes, { fontWeight: '500', fontSize: dimensions.width * 0.02 }]}>
                            Assista onde quiser. Cancele quando quiser.</Text>
                            <CriarAssinatura/>
                        </View>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        zIndex: 0
    },
    bgImg: {
        height: "100%"
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