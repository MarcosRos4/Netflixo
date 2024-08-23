import { View, Image, StyleSheet, Modal } from "react-native";
import { useState, useRef } from "react";
import { AUTH } from '@env'
import MovieModal from "./movieModal";
import MovieSelected from "./movieSelect";

export default function Movie({movieData, pointerEvents}) {

    const [cords, setCords] = useState({x:0, y:0})
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
    }
    
    const [backdrops, setBackdrops] = useState([{}])
    const fetchImages = ()=>{
        fetch(url, options)
        .then(res => res.json())
        .then(json => {
            json.backdrops.length === 0 ? setBackdrops([{'file_path':movieData.backdrop_path}]) : setBackdrops(json.backdrops)
            
        })
        .catch(err => console.error('error:' + err))
    }

    const [modalVisible, setModalVisible] = useState(false)
    
    const timerRef = useRef(null);

    const handlePointerEnter = () => {
      timerRef.current = setTimeout(() => {
        setModalVisible(true)
        fetchImages()
      }, 600); 
    }

    const handlePointerLeave = () => !modalVisible ? clearTimeout(timerRef.current) : null

    const [isMovieSelected, setIsMovieSelected] = useState(false)

    function openMovieSelect() {
        setModalVisible(false)
        setIsMovieSelected(true)
        
    }

    function closeMovieSelect() {
        setModalVisible(false)
        setIsMovieSelected(false)
    }

    return(
    <>
        <View
        ref={ref}
        pointerEvents={pointerEvents}
        onPointerEnter={()=>{handlePointerEnter(), getcords()}}
        onPointerLeave={handlePointerLeave}>
            <Image style={styles.imgBg} source={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`} ></Image>
        </View>

        { modalVisible && <View>
        <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={()=>setModalVisible(false)}>
           
            {
                isMovieSelected ?

                <MovieSelected
                closeMovieSelect={closeMovieSelect}
                movieData={movieData} 
                backdrops={backdrops}/> : 

                <View 
                onPointerLeave={()=>setModalVisible(false)}
                style={[styles.card,{top:cords.y-200, left:cords.x-200}]}>
                    <MovieModal
                    openMovieSelect={openMovieSelect}
                    movieData={movieData}
                    backdrops={backdrops}/>
                </View>
            }

        </Modal>
        </View>}

    </>
    )
}

const styles = StyleSheet.create({
    imgBg:{
        height:180,
        width:300,
        borderRadius:5
    },
    card:{
        backgroundColor:'#181818',
        width:400, height:400,
        borderRadius:5
    },
})