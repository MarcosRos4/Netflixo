import { ImageBackground, StyleSheet, View, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Profile from "../components/profiles/profile";

export default function Browse() {
    // container principal
    // cabeçalho
    // faixa 1 com trailer de alguma coisa e o primeiro carrossel de conteudo
    // flatlist com todos os outros carrosseis
    const pfp = require('../assets/shorkpfp.png')
    return(
        
        <ScrollView style={styles.container}>
            <LinearGradient style={{zIndex:1}} colors={['rgba(20,20,20,1)','rgba(20,20,20,0)']}>
                <View style={styles.header}>
                
                </View>
            </LinearGradient>
            
            <ImageBackground resizeMode="stretch" source={require('../assets/toninhotornado.png')} style={styles.imageBg}>
            </ImageBackground>
            <View style={styles.flatList}>
                <Profile width={1920} name={'gerson'} pfp={pfp}></Profile>
                <Profile width={1920} name={'gerson'} pfp={pfp}></Profile>
                <Profile width={1920} name={'gerson'} pfp={pfp}></Profile>
                <Profile width={1920} name={'gerson'} pfp={pfp}></Profile>
                <Profile width={1920} name={'gerson'} pfp={pfp}></Profile>
                <Profile width={1920} name={'gerson'} pfp={pfp}></Profile>
                <Profile width={1920} name={'gerson'} pfp={pfp}></Profile>
                <Profile width={1920} name={'gerson'} pfp={pfp}></Profile>
                <Profile width={1920} name={'gerson'} pfp={pfp}></Profile>
                <Profile width={1920} name={'gerson'} pfp={pfp}></Profile>
                <Profile width={1920} name={'gerson'} pfp={pfp}></Profile>

            </View>
        
        </ScrollView>
    )
}

const  styles = StyleSheet.create({
    container:{
        backgroundColor:'orange',
        flex:1

    },
    header:{
        height:200,
        
    },
    imageBg:{
        backgroundColor:'blue',
        height:1080*0.8,
        top:-200,
        zIndex:0,
        width:'100%'
    },
    flatList:{       
        
        
        height:600,
        top:-1080*0.2
    }
})