import { StyleSheet, View, Text, useWindowDimensions } from "react-native";
import Profile from "../components/profiles/profile";
import BotaoPF from "../components/profiles/buttonpf";
export default function Profiles() {
    let pfp1 = require('../assets/shorkpfp.png')
    let pfp2 = require('../assets/penguinpfp.png')
    let pfp3 = require('../assets/hatpfp.png')
    let pfp4 = require('../assets/heropfp.png')
    let pfp5 = require('../assets/addpfp.png')
    let width = useWindowDimensions().width
    return (
        <View style={styles.container}>
            <Text style={{color:'white', fontSize:width * 0.04 }}>Quem está assistindo?</Text>
            <View style={styles.profilesContainer}>
                <Profile width={width} pfp={pfp1} name={'Shork'}></Profile>
                <Profile width={width} pfp={pfp2} name={'Penpuin'}></Profile>
                <Profile width={width} pfp={pfp3} name={'Carm'}></Profile>
                <Profile width={width} pfp={pfp4} name={'hmm'}></Profile>
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