import { Text, StyleSheet, View } from "react-native"

export default function ProdCompanies({details}) {   
    return(
    <View style={styles.container}>
    {details.production_companies?.map((company)=>{
        return(
            <>
                <Text style={{color:'white'}}>{company.name}</Text>
            </>
        )
    })}
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        alignContent:'stretch',
        gap:10,
        alignItems:'center',
        justifyContent:'center'
    }
})

