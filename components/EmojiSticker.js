import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'

export default function EmojiSticker({imageSize, stickerSource}) {

    const scaleImage = useSharedValue(imageSize)
    const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(()=>{
        if (scaleImage.value !== imageSize * 2) {
            scaleImage.value = scaleImage.value * 2
        }
    })
    const imageStyle = useAnimatedStyle(()=>{
        return {
            width: withSpring(scaleImage.value),
            height: withSpring(scaleImage.value)
        }
    })
    const tranLateX = useSharedValue(0)
    const tranLateY = useSharedValue(0)
    const drag = Gesture.Pan()
    .onChange((event)=>{
        tranLateX.value += event.changeX
        tranLateY.value += event.changeY
    })
    const containerStyle = useAnimatedStyle(()=>{
        return{
            transform:[
                {
                    translateX: tranLateX.value
                },
                {
                    translateY:tranLateY.value
                }
            ]
        }
    })

    return (
        <GestureDetector gesture={drag}>
            <Animated.View style={[containerStyle, {top:-100}]}>
                <GestureDetector gesture={doubleTap}>
                    <Animated.Image 
                    source={stickerSource}
                    resizeMode="contain"
                    style={[imageStyle, {width:imageSize, height:imageSize}]}
                    />
                </GestureDetector>
            </Animated.View>
        </GestureDetector>
    )
}