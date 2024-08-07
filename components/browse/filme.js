import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";

export default function Filme({item}) {
    return(
       
        <Image style={styles.imgBg} source={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} ></Image>
        
    )
}

const styles = StyleSheet.create({
    imgBg:{
        height:180,
        width:300,
        borderRadius:5
        
    }
})