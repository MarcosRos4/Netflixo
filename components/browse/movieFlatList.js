import { StyleSheet, View, FlatList, Text, Pressable } from "react-native";
import { useState, useEffect, useRef } from "react";
import { AUTH } from '@env'

import Feather from '@expo/vector-icons/Feather';
import Movie from "./movie";

export default function MovieFlatList({genre, id}) {

    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&region=BR&sort_by=popularity.desc&with_genres=${id}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: AUTH
        }
    };

    const [movies, setMovies] = useState([{}])   
    const [index, setIndex] = useState(0)
    
    const [showButton, setShowButton] = useState(true)
    const flatListReference = useRef(null)

    useEffect(()=>{
        flatListReference.current.scrollToIndex({
            index:index,
            animated:true,
            viewPosition:0
        })
    }, [index])

    useEffect(()=>{
        fetch(url, options)
        .then(res => res.json())
        .then(json => {setMovies(json.results)})
        .catch(err => console.error('error:' + err));
    }, [])

    return(
        <View style={styles.container}>
            <Text style={styles.title} >{genre}</Text>
            <View
            onPointerEnter={()=>setShowButton(false)}
            onPointerLeave={()=>setShowButton(true)}
            style={styles.wrapper}>
                <FlatList
                initialScrollIndex={index}
                ref={flatListReference}
                ItemSeparatorComponent={<View style={{width:10}} />}
                contentContainerStyle={{padding:10}}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.flatList}
                data={movies}
                renderItem={({item})=> <Movie movieData={item}/>}
                />
    
                <Pressable
                style={
                    ()=> showButton===false ?
                    [styles.pressable, {opacity:0.7}] :
                    [styles.pressable, {opacity:0}]
                }
                disabled={showButton}
                onPress={()=> index < 4 ? setIndex(0) : setIndex(index-4)}>
                    <Feather name="chevron-left" size={24} color={'white'}/>
                </Pressable>
            
                <Pressable
                style={
                    ()=>
                    showButton===false ?
                    [styles.pressable, {opacity:0.7, right:0}] :
                    [styles.pressable, {opacity:0, right:0}]
                }
                disabled={showButton}
                onPress={()=> index > movies.length-5 ? setIndex(movies.length-1) : setIndex(index+4)}>
                    <Feather  name="chevron-right" size={24} color={'white'} />
                </Pressable>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        marginVertical:30
    },
    title:{
        color:'white',
        textAlign:'left',
        width:'95%'
    },
    wrapper:{
        width:'95%',        
    }, 
    pressable:{
        width:80,
        position:'absolute',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#141414',        
    }
})