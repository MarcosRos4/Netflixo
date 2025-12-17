import { StyleSheet, View, Image, Text } from "react-native"

export default function WatchProviders({watchProviders}) {   
    return(
    <View style={styles.container}>
        <Text style={{color:'white'}}>Disponível em:</Text>
        <View style={{flex:1, flexDirection:'row',  gap:10,}}>
            {watchProviders?.map((watchProviders, index)=>{
                return(
                    <>
                    <Image key={`${index}-${watchProviders.provider_id}`} style={styles.image} source={`https://image.tmdb.org/t/p/w500${watchProviders.logo_path}`}/>
                    </>
                )
            })}
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        gap:10,
        alignItems:'flex-start',
        justifyContent:'flex-start'
    },
    image:{
        width:60,
        aspectRatio:1,
        borderRadius:5,
        borderColor:'silver',
        borderWidth:1
    }
})