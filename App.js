import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import { PaperProvider } from 'react-native-paper'
import Landing from './pages/queda/Landing.js';



export default function App() {

  return (
    
    <PaperProvider>
      <View style={styles.container}>
      <Landing></Landing>

      </View>
    
    </PaperProvider>
        
      
     
  
    
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1
  }
})