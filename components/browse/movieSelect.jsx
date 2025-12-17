import { View, Text, StyleSheet, ImageBackground } from "react-native"
import Ratings from "./ratings";
import ProdCompanies from "./prodCompanies";
import { useState, useEffect } from "react";
import { AUTH } from '@env'
import Cast from "./cast";
import WatchProviders from "./watchProviders";

export default function MovieSelected({movieData, backdrops, closeMovieSelect}) {

    const [cast, setCast] = useState([{}])
    const [crew, setCrew] = useState([{}])
    const [watchProviders, setWatchProviders] = useState([{}])
    const [details, setDetails] = useState({})

    const urlDetails = `https://api.themoviedb.org/3/movie/${movieData.id}?language=pt-BR`
    const urlWatchProviders = `https://api.themoviedb.org/3/movie/${movieData.id}/watch/providers`;
    const urlCredits = `https://api.themoviedb.org/3/movie/${movieData.id}/credits?language=pt-BR`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: AUTH
      }
    };

    useEffect(()=>{
        fetch(urlCredits, options)
        .then(res => res.json())
        .then(json => {setCast(json.cast), setCrew(json.crew)})
        .catch(err => console.error('error:' + err))
    }, [])

    useEffect(()=>{
        fetch(urlWatchProviders, options)
        .then(res => res.json())
        .then(json => {setWatchProviders(json.results.BR.flatrate)})
        .catch(err => console.error('error: nada poggers' + err))
    }, [])

     useEffect(()=>{
        fetch(urlDetails, options)
        .then(res => res.json())
        .then(json => {setDetails(json)})
        .catch(err => console.error('error:' + err))
    }, [])

    const genres = [
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

    const genreNames = movieData.genre_ids.map(id => {
        const genre = genres.find(g => g.id === id);
        return genre ? genre.name + '. '  : null;
    }).filter(name => name !== null);

    const director = crew.find(member => member.job === "Director");
    

    return(
        <View style={styles.container}>
            <View 
            onPointerLeave={closeMovieSelect}
            style={styles.base}>
                <ImageBackground style={styles.imageBg} source={`https://image.tmdb.org/t/p/original${backdrops[0].file_path}`}></ImageBackground>
                <View style={styles.content}>
                    <View style={styles.left}>
                        <Text style={styles.text}>{details.title} ({details.release_date?.split('-')[0]}) {details.runtime}min</Text>
                        <Text style={styles.text}>{genreNames} <Ratings id={"select"} vote_average={details.vote_average}/></Text>
                        <Text style={styles.text}>{details.overview}</Text>
                        <View style={{flex:1}}>
                            <Text style={styles.text}>Produtoras:</Text>
                            <ProdCompanies details={details}/>
                        </View>
                    </View>
                    <View style={styles.rigth}>
                        <View style={{flex:1}}>
                            <Text style={[styles.text]}>Diretor: {director?.name}</Text>
                        </View>
                        <View style={{flex:4}}>
                            <Text style={styles.text}>Elenco: </Text> <Cast cast={cast}/>
                            <WatchProviders watchProviders={watchProviders} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    },
    imageBg:{
        flex:2,
        margin:10,
        borderColor:'gray',
        borderWidth:2,
    },
    base:{
        flex:1,
        backgroundColor:'#141414',
        width:'60%',
        marginVertical:50,
        borderRadius:15,
        borderColor:'gray',
        borderWidth:2,
        
    },
    content:{
        flex:1,
        flexDirection:'row',
    },
    left:{
        flex:2,
        padding:20,
        gap:10
    },
    rigth:{
        flex:1,
        padding:20,
    },
    text:{
        color:'white', 
    }
})