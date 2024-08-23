import { StyleSheet, View, FlatList, Text, Pressable } from "react-native"
import { useState, useEffect, useRef } from "react"
import { AUTH } from '@env'

import Feather from '@expo/vector-icons/Feather'
import Movie from "./movie"

export default function MovieFlatList({genre, id}) {

    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&region=BR&sort_by=popularity.desc&with_genres=${id}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: AUTH
        }
    }
    const [movies, setMovies] = useState([{}]) 

    useEffect(()=>{
        fetch(url, options)
        .then(res => res.json())
        .then(json => {setMovies(json.results)})
        .catch(err => console.error('error:' + err))
    }, [])

  
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

    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 70
    })
    const [visibleItems, setVisibleItems] = useState([])
    
    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        setVisibleItems(viewableItems.map(item => item.key))
    })

    function handleBrowseRight(){
        index >= movies.length-visibleItems.length ?
        setIndex(movies.length-1):
        setIndex(index + visibleItems.length)
    }

    function handleBrowseLeft() {
        index < visibleItems.length ? setIndex(0) : setIndex(index-visibleItems.length)
    }
    

    const renderItem = ({item}) => {
        const isVisible = visibleItems.includes(item.id)
        return(
            <Movie movieData={item} pointerEvents={isVisible ? 'auto' : 'none'}/>
        )
    }



    return(
        <View style={styles.container}>
            <Text style={styles.title} >{genre}</Text>
            <View
            onPointerEnter={()=>setShowButton(false)}
            onPointerLeave={()=>setShowButton(true)}
            style={styles.wrapper}>

                <Pressable
                style={
                    ()=> showButton===false ?
                    [styles.pressable, {opacity:0.7}] :
                    [styles.pressable, {opacity:0}]
                }
                disabled={showButton}
                onPress={handleBrowseLeft}>
                    <Feather name="chevron-left" size={24} color={'white'}/>
                </Pressable>

                <FlatList
                initialScrollIndex={index}
                ref={flatListReference}
                ItemSeparatorComponent={<View style={{width:10}} />}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={onViewableItemsChanged.current}
                viewabilityConfig={viewabilityConfig.current}
                data={movies}
                renderItem={renderItem}
                />
            
                <Pressable
                style={
                    ()=>
                    showButton===false ?
                    [styles.pressable, {opacity:0.7, right:0}] :
                    [styles.pressable, {opacity:0, right:0}]
                }
                disabled={showButton}
                onPress={handleBrowseRight}>
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
        width:'100%',
        paddingHorizontal:80
    },
    wrapper:{
        width:'100%',
        flexDirection:'row'
    }, 
    pressable:{
        width:80,
        
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#000000',        
    }
})