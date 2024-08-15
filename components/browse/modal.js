import { View, Text, Image, StyleSheet, ImageBackground } from "react-native"
import Ratings from "./rating";

export default function MovieModal({id, popularity, release_date, title, vote_average, genre_ids, backdrops, logos}) {
    
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


    const genreNames = genre_ids.map(id => {
        console.log(logos)
        const genre = genres.find(g => g.id === id);
        return genre ? ' ' + genre.name  : null;
    }).filter(name => name !== null);
    
    return(
        <>
        <View style={styles.container}>
            <ImageBackground style={styles.imageBg} resizeMode="stretch" source={`https://image.tmdb.org/t/p/w500${backdrops[0].file_path}`}/>
            <View style={styles.content}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                    {`${title}  ${release_date.split('-')[0]}`}
                    </Text>
                </View>
                <Ratings vote_average={vote_average} />
                <View style={styles.textContainer}>
                <Text style={styles.text}>{genreNames}</Text>
                </View>
            </View>
        </View>
        </>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    imageBg:{
        flex:2,
        alignItems:'flex-start',
        justifyContent:'flex-end'
    },
    image:{
        height:40,
        width:100,
        borderBlockColor:'yellow',
        borderWidth:1
    },
    content:{
        flex:1,
        paddingVertical:10
    },
    textContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'white',
        textAlign:'center',       
    }
})