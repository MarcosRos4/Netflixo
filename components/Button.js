import { useState } from "react";
import { Button } from "react-native-paper";

export default function Botao({ texto, icone, labelStyle, contentStyle }) {
    const [buttonColor, setButtonColor] = useState('#e50914')
    return (
        <Button
            buttonColor={buttonColor}
            theme={{ roundness: 1 }}
            labelStyle={labelStyle}
            mode="contained"
            contentStyle={contentStyle}
            onPointerEnter={() => { setButtonColor('#c11119') }}
            onPointerLeave={() => { setButtonColor('red') }}
            onPress={() => { setButtonColor('#99161d') }}
            icon={icone}>
            {texto}
        </Button>
    )
}
