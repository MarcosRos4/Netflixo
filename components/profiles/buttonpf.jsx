import { useState } from "react";
import { Button } from "react-native-paper";
import { StyleSheet } from "react-native";

export default function BotaoPF({ texto, width}) {
    const [labelColor, setLabelColor] = useState('#808080')
    return (
        <Button
            buttonColor="#141414"
            theme={{ roundness: 1 }}
            labelStyle={[styles.buttonLabel, {
                color:labelColor, fontSize: width * 0.013}]}
            mode="contained"
            contentStyle={[styles.button, {
                borderColor:labelColor,
                height: width * 0.03, width: width * 0.15
                }]}
            onPointerEnter={() => { setLabelColor('white') }}
            onPointerLeave={() => { setLabelColor('#808080') }}
            onPressIn={() => { setLabelColor('white') }}
            onPressOut={() => { setLabelColor('#808080') }}
           >
            {texto}
        </Button>
    )
}

const styles = StyleSheet.create({
    button: {
        
        alignItems: "center",
        justifyContent: 'center',
        padding:0,
        borderWidth:2,
        borderRadius:3
        
    },
    buttonLabel: {
        color: "#808080",
        fontSize: 15,
        fontWeight: 400,
        overflow:'visible'
    }
})