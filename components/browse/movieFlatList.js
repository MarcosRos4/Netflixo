import { StyleSheet, View, FlatList, Text, Pressable } from "react-native";
import { useState, useEffect, useRef } from "react";
require('dotenv').config
import Feather from '@expo/vector-icons/Feather';
import Filme from "./filme";

export default function MovieFlatList({}) {

    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1&region=br';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: process.env.AUTH
        }
    };

    const [movies, setMovies] = useState([{bacdrop_path:"/tKi5HYDSuxP4I26fxyF2UVvAtLa.jpg"}])   
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
            <Text style={styles.title} >TOP RATED</Text>
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
                renderItem={({item})=> <Filme item={item}/>}
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
        top:-200,
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