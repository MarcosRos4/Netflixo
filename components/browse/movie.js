import { View, Text, Image, StyleSheet, Modal, ImageBackground, Pressable } from "react-native";
import { useState, useRef } from "react";
import { AUTH } from '@env'
import MovieModal from "./modal";

export default function Movie({movieData}) {

    const [modalVisible, setModalVisible] = useState(false)
    const [cords, setCords] = useState({x:0, y:0})
    const [movieImages, setMovieImages] = useState([{}])
    const ref = useRef()

    const getcords = ()=>{
        ref.current.measureInWindow(
            (fx, fy, width, height) => setCords({x:fx + width/2, y:fy + height/2})
        )
    }

    const url = `https://api.themoviedb.org/3/movie/${movieData.id}/images?include_image_language=en`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: AUTH
        }
    };


    return(
        <>
       <View
       ref={ref}
       onPointerEnter={()=>{setModalVisible(!modalVisible), getcords()}}
       >
        <Image style={styles.imgBg} source={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`} ></Image>
        
        </View>
         <Modal
            transparent={true}
            visible={modalVisible}
            animationType="fade"
            onRequestClose={()=>setModalVisible(!modalVisible)}
            onShow={()=>{
                fetch(url, options)
                .then(res => res.json())
                .then(json => {
                    setMovieImages(json.backdrops), console.log(json)
                })
                .catch(err => console.error('error:' + err));
                
            }}>
                <View
                
                onPointerLeave={()=>{setModalVisible(!modalVisible)}}
                style={[styles.modal,{top:cords.y-200, left:cords.x-200}]}
                >
                
                
                <MovieModal
                id={movieData.id}
                genre_ids={movieData.genre_ids}
                popularity={movieData.popularity}
                release_date={movieData.release_date}
                title={movieData.title}
                vote_average={movieData.vote_average}
                images={movieImages}
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
        backgroundColor:'#4CE4AC',
        width:400, height:400,
        borderRadius:5
        }
})