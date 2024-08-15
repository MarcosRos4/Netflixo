import { View, Text, Image, StyleSheet, Modal, ImageBackground, Pressable } from "react-native";
import { useState, useRef } from "react";
import { AUTH } from '@env'
import MovieModal from "./modal";

export default function Movie({movieData}) {

    const [modalVisible, setModalVisible] = useState(false)
    const [cords, setCords] = useState({x:0, y:0})
    const [backdrops, setBackdrops] = useState([{}])
    const [logos, setLogos] = useState([{}])
    const ref = useRef()

    const getcords = ()=>{
        ref.current.measureInWindow(
            (fx, fy, width, height) => setCords({x:fx + width/2, y:fy + height/2})
        )
        
    }

    const url = `https://api.themoviedb.org/3/movie/${movieData.id}/images?include_image_language=pt`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: AUTH
        }
    };

    const fetchImages = ()=>{
        fetch(url, options)
        .then(res => res.json())
        .then(json => {
            json.backdrops.length === 0 ? setBackdrops([{'file_path':movieData.backdrop_path}]) : setBackdrops(json.backdrops)
            
        })
        .catch(err => console.error('error:' + err));}


    return(
    <>
        <View
        ref={ref}
        onPointerEnter={()=>{setModalVisible(!modalVisible), getcords(), fetchImages()}}>
            <Image style={styles.imgBg} source={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`} ></Image>
        </View>
        <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={()=>setModalVisible(!modalVisible)}
        >
            <View
            onPointerLeave={()=>{setModalVisible(!modalVisible)}}
            style={[styles.modal,{top:cords.y-200, left:cords.x-200}]}>
                <MovieModal
                id={movieData.id}
                genre_ids={movieData.genre_ids}
                popularity={movieData.popularity}
                release_date={movieData.release_date}
                title={movieData.title}
                vote_average={movieData.vote_average}
                backdrops={backdrops}
                
                />
            </View>
                
        </Modal>
        
    </>
    )
}

const styles = StyleSheet.create({
    imgBg:{
        height:180,
        width:300,
        borderRadius:5
        
    },
    modal:{
        backgroundColor:'#181818',
        width:400, height:400,
        borderRadius:5
        }
})