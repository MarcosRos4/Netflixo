import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react';

export default function App() {

  const [selectedImage, setSelectedImage] = useState(null)
  const [showAppOptions, setShowAppOptions] = useState(false)

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing:true,
      quality:1
    })

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
      setShowAppOptions(true)
    }
    else{
      alert("Você não selecionou nenhuma imagem")
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={'./assets/noget.png'} selectedImage={selectedImage} />
      {showAppOptions ? (
      </View>
       ) : (
      <View style={styles.footerContainer}>
        <Button label='Escolha uma foto' theme='primary' onPress={pickImageAsync}></Button>
        <Button label='Use essa foto' onPress={()=>setShowAppOptions(true)}></Button>
      </View> )}
      <StatusBar style="auto" />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex:1,
    paddingTop:58,
  },
  footerContainer:{
    flex:1/3,
    alignItems:'center'
  }
});
