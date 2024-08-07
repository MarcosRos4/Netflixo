import { useRef, useState } from "react";
import { Button, View, Modal, Pressable, Text } from "react-native";

export default function ModalTeste() { 
    const [modalVisible, setModalVisible] = useState(false)
    const [cordenadas, setCordenadas] = useState({x:0, y:0})
    const ref = useRef()
    const getCordenadas = ()=>{
        ref.current.measureInWindow(
            (fx, fy, width, height) => {
    console.log('X offset to frame: ' + fx);
    console.log('Y offset to frame: ' + fy);
    
    setCordenadas({x:fx + width/2, y:fy + height/2})
    console.log("cordenadas x: "+cordenadas.x )
    console.log("cordenadas y: "+cordenadas.y )
  }
        )
    }

    return(
        <View
        style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'yellow'}}
        >
            
            <Pressable
            style={{backgroundColor:'red', top:-300
            }}
            ref={ref}
            onHoverIn={()=>{setModalVisible(!modalVisible), getCordenadas()}}
            
            >
            <Text>
            POGGERS
            </Text>
            </Pressable>
            

            <Modal
            transparent={true}
            visible={modalVisible}
            animationType="fade"
            onRequestClose={()=>setModalVisible(!modalVisible)}
            >
                <View
                
                onPointerLeave={()=>{setModalVisible(!modalVisible)}}
                style={{backgroundColor:'blue', width:100, height:100, top:cordenadas.y-50, left:cordenadas.x-50}}
                >
                
                <Pressable
                onPress={()=>setModalVisible(!modalVisible)}
                
                >
                <Text>NOGGERS</Text>
                </Pressable>
                </View>
                
            </Modal>
        </View>
    )
}