import { View, Text, StyleSheet} from "react-native"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from "react";

export default function Ratings({vote_average, id}) {

    const countStars = (vote_average)=>{
        const rating = vote_average / 2
        const fullStars = Math.floor(rating)
        const halfStars = rating % 1 >= 0.5 ? 1 : 0
        const emptyStars = 5 - fullStars - halfStars
        return [fullStars, halfStars, emptyStars]
    }
    
    function renderStars(starsArray) {
        const components = starsArray.map((count, index)=>{
            const StarComponent = [
                <FontAwesome name="star" size={24} color="yellow"/>,
                <FontAwesome name="star-half-full" size={24} color="yellow"/>,
                <FontAwesome name="star-o" size={24} color="yellow"/>
            ][index]
            return Array.from({length: count}, (_, i)=>
                React.cloneElement(StarComponent, {key: `${index}-${i}-${id}`})
            )
        })
        return components.flat()
    }


    return(
        <View style={styles.container}>
            {renderStars(countStars(vote_average))}
            <Text style={{color:'white'}}>{vote_average?.toFixed(1)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:10,
    
    }
})