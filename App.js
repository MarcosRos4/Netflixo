import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { PaperProvider } from 'react-native-paper'
import Landing from './pages/queda/Landing.js';


export default function App() {



  return (
    <PaperProvider>
      <View style={{flex:1}}>
        <Landing/>
        <StatusBar />
      </View>
    </PaperProvider>
  )
}
