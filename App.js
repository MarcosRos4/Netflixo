import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';

import Landing from './pages/Landing.js';



export default function App() {

  return (
    
    <View style={styles.container}>
      <Landing></Landing>

      </View>
    
        
      
     
  
    
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})