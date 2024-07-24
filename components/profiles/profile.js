import { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";


export default function Profile({pfp, name, width}) {
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('#808080')
    
    return(
        <View
        style={styles.container}
        onPointerEnter={() => { setColor('white'), setTextColor('white') }}
        onPointerLeave={() => { setColor('transparent'), setTextColor('#808080') }}>
            <Image
            style={[styles.image,
            {borderColor:color, backgroundColor:color,
             width:width*0.1, height: width*0.1
            }]} 
            source={pfp}/>
            <Text style={{fontSize:width*0.015, color:textColor}}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#141414',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
    },

    image:{
        borderWidth:4,
        borderRadius:7,
    }
})