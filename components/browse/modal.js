import { useEffect } from "react"
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native"


export default function MovieModal({id, popularity, release_date, title, vote_average, genre_ids, images}) {

    useEffect(()=>{console.log(images)},[])
    return(
        <>
        <View style={styles.container}>
            <ImageBackground style={styles.image} resizeMode="stretch" source={`https://image.tmdb.org/t/p/w500/wRSLdSupaU9McDbCFVdZw0gzhrU.jpg`}/>
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