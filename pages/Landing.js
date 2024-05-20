import { View, StyleSheet, ImageBackground, Text, Image, TextInput } from "react-native";
import Button from "../components/Button";
import {LinearGradient} from 'expo-linear-gradient'
import CriarAssinatura from "../components/CriarAssinatura";

export default function Landing({props}) {
    const backgroundImage = require('../assets/landingbg.jpeg')
    return(
        <View style={styles.container}>
            
            

            <ImageBackground style={styles.bgImg} source={backgroundImage} >
                <LinearGradient colors={['rgba(0,0,0,0.9)', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.9)']} styles={styles.gradient}>

                    <View style={styles.header}>
                        <View style={styles.viewNetflix}>
                            <Image source={require('../assets/netflix.png')}></Image>
                        </View>
                        <View style={styles.viewDireita}>
                            <Image source={require('../assets/idiomas.png')}></Image>
                            <Button estilos={styles} label={'Entrar'}></Button>
                        </View>
                    </View>
                    <View style={styles.faixa1} >
                        <View style={styles.conteudof1}>
                            <Text style={styles.filmes}>Filmes, séries e muito mais, sem limites</Text>
                            <Text style={[styles.filmes, {fontSize:25, fontWeight:400}]}>Assista onde quiser. Cancele quando quiser.</Text>
                            <CriarAssinatura/>
                        </View>
                    </View>
                    </LinearGradient>
            </ImageBackground>

            
            
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex:1
    },
    bgImg:{
        flex:1,
        height:800,
        width:'100%',
        overflow:'hidden',
        
    },    
    gradient:{
        flex:1,
        flexDirection:'column'
        
    },
    header:{
        flex:1,
        flexDirection:'row',
        paddingHorizontal:200,
        justifyContent:'space-between',
        paddingTop:30
    },
    viewNetflix:{

    },
    viewDireita:{
        flexDirection:'row',
        flex:0.2,
        alignItems:'flex-start',
        justifyContent:'space-evenly',
        
    },
    faixa1:{
        justifyContent:'flex-start',
        alignItems:'center',
        paddingTop:200,
        height:900
    },
    conteudof1:{
        justifyContent:'center',
        alignItems:'center',
    },
    filmes:{
            color:'white',
            fontSize:60,
            fontWeight:'bold',
            paddingBottom:20
    },
    buttonContainer:{
        alignItems:'center',
        justifyContent:'center',
        width:70,
        height:35
        
    },
    button:{
        borderRadius:5,
        width:'100%',
        height:"100%",backgroundColor:'red',
        alignItems:"center",
        justifyContent:'center',
        
    },
    buttonLabel:{
        color:"#fff",
        fontSize:15,
        fontWeight:400
    }
})