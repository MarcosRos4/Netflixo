import { StyleSheet, View, Text, useWindowDimensions } from "react-native";
import { Link } from 'expo-router'
import { useEffect, useState } from "react";
import Profile from "../components/profiles/profile";
import BotaoPF from "../components/profiles/buttonpf";
export default function Profiles() {
    const pfp1 = require('../assets/shorkpfp.png')
    const pfp2 = require('../assets/penguinpfp.png')
    const pfp3 = require('../assets/hatpfp.png')
    const pfp4 = require('../assets/heropfp.png')
    const pfp5 = require('../assets/addpfp.png')

    const [width, setWidth] = useState(1920)
    let newWidth = useWindowDimensions().width
    
    useEffect(()=>{
        setWidth(newWidth)
    },
    [newWidth])

    return (
        <View style={styles.container}>
            <Text style={{color:'white', fontSize:width * 0.04 }}>Quem está assistindo?</Text>
            <View style={styles.profilesContainer}>
                <Link href={'/browse'}><Profile width={width} pfp={pfp1} name={'Shork'}/></Link>
                <Link href={'/browse'}><Profile width={width} pfp={pfp2} name={'Penpuin'}/></Link>
                <Link href={'/browse'}><Profile width={width} pfp={pfp3} name={'Carm'}/></Link>
                <Link href={'/browse'}><Profile width={width} pfp={pfp4} name={'hmm'}/></Link>
                <Profile width={width} pfp={pfp5} name={'Adicionar Perfil'}></Profile>
            </View>
            <View>
                <BotaoPF width={width} texto={'Gerenciar Perfis'}></BotaoPF>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#141414',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        gap:60
    },
    text:{
        color:'white',
    },
    profilesContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        width:'70%'
    }
})