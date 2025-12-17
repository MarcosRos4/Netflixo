import { View, Text, StyleSheet } from "react-native"

export default function Cast({cast}) {

    const actors = cast?.filter(member => member.known_for_department === "Acting").slice(0,10)
    return(
        <View style={styles.container}>
            {actors?.map((actor)=>{
                return(
                <Text style={{color:'white'}}>{actor.name}.</Text>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexWrap:'wrap',
        flexDirection:'row',
        gap:5,
        alignContent:'flex-start'
    }
})