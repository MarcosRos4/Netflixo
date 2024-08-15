import { ImageBackground, StyleSheet, View, ScrollView, FlatList, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MovieFlatList from "../components/browse/movieFlatList";


export default function Browse() {
    // container principal
    // cabeçalho
    // faixa 1 com trailer de alguma coisa e o primeiro carrossel de conteudo
    // flatlist com todos os outros carrosseis
    const data = [
        {"id": 28,"name": "Ação"},
        {"id": 12,"name": "Aventura"},
        {"id": 16,"name": "Animação"},
        {"id": 35,"name": "Comédia"},
        {"id": 80,"name": "Crime"},
        {"id": 99,"name": "Documentário"},
        {"id": 18,"name": "Drama"},
        {"id": 10751,"name": "Família"},
        {"id": 14,"name": "Fantasia"},
        {"id": 36,"name": "História"},
        {"id": 27,"name": "Terror"},
        {"id": 10402,"name": "Música"},
        {"id": 9648,"name": "Mistério"},
        {"id": 10749,"name": "Romance"},
        {"id": 878,"name": "Ficção científica"},
        {"id": 10770,"name": "Cinema TV"},
        {"id": 53,"name": "Thriller"},
        {"id": 10752,"name": "Guerra"},
        {"id": 37,"name": "Faroeste"} 
    ]
   
    return(
        
        <ScrollView style={styles.container}>
            <LinearGradient style={{zIndex:1}} colors={['rgba(20,20,20,1)','rgba(20,20,20,0)']}>
                <View style={styles.header}>
                
                </View>
            </LinearGradient>
            
            <ImageBackground resizeMode="stretch" source={require('../assets/toninhotornado.png')} style={styles.imageBg}>
            </ImageBackground>
            
            <FlatList
                style={{top:-400}}
                data={data}
                renderItem={({item}) => <MovieFlatList genre={item.name} id={item.id} />}
            />
            
            

            <View style={{top:-200, height:0}}>
            <View style={{backgroundColor:'#0d253f', height:200, alignItems:'center', justifyContent:'center'}}>
            <ImageBackground style={{top:-10, width:'100%'}} resizeMode="repeat" source={require('../assets/tmdbLogo.png')}/>
            </View>
            </View>
        
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