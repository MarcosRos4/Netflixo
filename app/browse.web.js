import { ImageBackground, StyleSheet, View, ScrollView, FlatList, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect } from "react";
import Filme from "../components/browse/filme";
import MovieFlatList from "../components/browse/movieFlatList";


export default function Browse() {
    // container principal
    // cabeçalho
    // faixa 1 com trailer de alguma coisa e o primeiro carrossel de conteudo
    // flatlist com todos os outros carrosseis


   
    return(
        
        <ScrollView style={styles.container}>
            <LinearGradient style={{zIndex:1}} colors={['rgba(20,20,20,1)','rgba(20,20,20,0)']}>
                <View style={styles.header}>
                
                </View>
            </LinearGradient>
            
            <ImageBackground resizeMode="stretch" source={require('../assets/toninhotornado.png')} style={styles.imageBg}>
            </ImageBackground>
            <MovieFlatList/>
            

            <Text>
            créditos a tmdbapi
            </Text>
        
        </ScrollView>
    )
}

const  styles = StyleSheet.create({
    container:{
        backgroundColor:'#141414',
        flex:1,
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
    }
})