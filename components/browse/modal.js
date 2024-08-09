import { View, Text, Image, StyleSheet, ImageBackground } from "react-native"
import { useState, useEffect } from "react";
import { AUTH } from '@env'

export default function MovieModal({id, popularity, release_date, title, vote_average, genre_ids}) {
    const url = `https://api.themoviedb.org/3/movie/${id}/images?include_image_language=pt`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: AUTH
        }
    };
    const teste = ()=>{
        fetch(url, options)
        .then(res => res.json())
        .then(json => {return json.backdrops})
        .catch(err => console.error('error:' + err))
    }

    const [movieImages, setMovieImages] = useState(teste)

    useEffect(()=>{
        fetch(url, options)
        .then(res => res.json())
        .then(json => {setMovieImages(json.backdrops), console.log(movieImages)})
        .catch(err => console.error('error:' + err));
        
    }, [id])

    return(
        <>
        <View style={styles.container}>
            <ImageBackground style={styles.image} resizeMode="stretch" source={`https://image.tmdb.org/t/p/w500/sUe6OYgbWrnYpugTvScSUcFVuy4.jpg`}/>
            <View style={styles.content}>
                <Text
                /*
                title,
                genres:[{'id':18, 'name':'Drama'}],
                "spoken_languages": [{"english_name":"Italian","iso_639_1": "it","name": "Italiano"},
                release_date,
                vote_average 
                */
                >
                {`${title}\n${id}\n${release_date}\n${vote_average}`}
                </Text>
            </View>
        </View>
        </>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    image:{
        flex:2,
        
        
    },
    content:{
        flex:1,
        
    }
})