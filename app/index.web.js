import { ScrollView, View } from "react-native";
import { PaperProvider } from 'react-native-paper';
import Anuncio from "../components/landing/Anuncio";
import Faixa1 from "../components/landing/Faixa1";
import Faixa2 from '../components/landing/Faixa2';
import Faixa3 from "../components/landing/Faixa3";
import Faixa4 from "../components/landing/Faixa4";
import Faixa5 from "../components/landing/faixa5";
import Faixa0 from '../components/landing/Faixa0';

export default function App() {
  return (
    <PaperProvider>
      <View style={{flex:1}}>
        <View style={{flex:1}}>
            <ScrollView>
                <Faixa0/>
                
                
            </ScrollView>
        </View>
      </View>
    </PaperProvider>
  )
}

