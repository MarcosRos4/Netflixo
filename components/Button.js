import { View, Pressable, Text } from "react-native";


export default function Button({label, onPress, estilos}) {
    
    return(
        <View style={estilos.buttonContainer}>
            <Pressable style={estilos.button} onPress={onPress}>
                <Text style={estilos.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    )
    
}

