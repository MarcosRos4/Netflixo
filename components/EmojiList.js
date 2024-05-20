import { useState } from "react";
import { StyleSheet, FlatList, Image, Platform, Pressable } from "react-native";

export default function EmojiList({onSelect, onCloseModal}) {
    const [emoji] = useState([
        require('../assets/1F600_color.png'),
        require('../assets/1F601_color.png'),
        require('../assets/1F602_color.png'),
        require('../assets/1F603_color.png'),
        require('../assets/1F604_color.png'),
        require('../assets/1F605_color.png'),
        require('../assets/1F606_color.png'),
        require('../assets/1F923_color.png'),
    ])


    return(
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={Platform.OS==='web'}
        data={emoji}
        contentContainerStyle={styles.listContainer}
        renderItem={({item, index}) => (
            <Pressable
                onPress={()=>{
                    onSelect(item)
                    onCloseModal()
                }}>
                <Image source={item} key={index} style={styles.image}/>
            </Pressable>
        )}
        /> 
    )
}
const styles = StyleSheet.create({
    listContainer:{
        borderTopRightRadius: 10,
        borderTopLeftRadius:10,
        paddingHorizontal:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    image:{
        width:100,
        height:100,
        marginRight:20
    }
})
