import { View, StyleSheet, ImageBackground, Text, Image, ScrollView, SafeAreaView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import CriarAssinatura from "../../components/CriarAssinatura";

import Botao from "../../components/Button";
import Faixa1 from "./Faixa1";
import Faixa2 from './Faixa2'
import Faixa3 from "./Faixa3";
import Faixa4 from "./Faixa4";
import Faixa5 from "./faixa5";

export default function Landing({ props }) {


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView >
                <View>
                    <ImageBackground style={styles.bgImg} source={require('../../assets/landingbg.jpeg')} >
                        <LinearGradient colors={['rgba(0,0,0,0.9)', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.9)']} styles={styles.gradient}>
                            <View style={styles.header}>
                                <View style={styles.viewNetflix}>
                                    <Image source={require('../../assets/netflix.png')}></Image>
                                </View>
                                <View style={styles.viewDireita}>
                                    <Image source={require('../../assets/idiomas.png')}></Image>
                                    <Botao
                                        labelStyle={styles.buttonLabel}
                                        contentStyle={styles.button}
                                        texto={'Entrar'}
                                    />
                                </View>
                            </View>
                            <View style={styles.faixa1} >
                                <View style={styles.conteudof1}>
                                    <Text style={styles.filmes}>Filmes, séries e muito mais, sem limites</Text>
                                    <Text style={[styles.filmes, { fontSize: 25, fontWeight: 400 }]}>Assista onde quiser. Cancele quando quiser.</Text>
                                    <CriarAssinatura />
                                </View>
                            </View>
                        </LinearGradient>
                    </ImageBackground>
                    <Faixa1/>
                </View>
                <View style={{gap:7, flexDirection:'column', backgroundColor:'#232323', borderTopColor:'#232323', borderTopWidth:7}}>
                    <Faixa2/>
                    <Faixa3/>
                    <Faixa4/>
                    <Faixa5/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    bgImg: {
        height: 700
    },
    gradient: {
        flexDirection: 'column'
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 200,
        justifyContent: 'space-between',
        paddingTop: 30
    },
    viewDireita: {
        flexDirection: 'row',
        flex: 0.2,
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',

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
        fontWeight: 'bold',
        paddingBottom: 20,
        userSelect: "none"
    },
    button: {
        padding: 0,
        height: 30,
        alignItems: "center",
        justifyContent: 'center',

    },
    buttonLabel: {
        color: "#fff",
        fontSize: 15,
        fontWeight: 400
    }
})