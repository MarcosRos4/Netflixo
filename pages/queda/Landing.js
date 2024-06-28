import { ScrollView, View } from "react-native";
import Anuncio from "../../components/Anuncio";
import Capa from './Capa';
import definirEstilo from "./Estilos";
import Faixa1 from "./Faixa1";
import Faixa2 from './Faixa2';
import Faixa3 from "./Faixa3";
import Faixa4 from "./Faixa4";
import Faixa5 from "./faixa5";

export default function Landing() {
    let estilo = definirEstilo()
    return (
        <View style={{flex:1}}>
            <ScrollView>
                <Capa estilo={estilo}/>
                <Anuncio estilo={estilo}/>
                <Faixa1 estilo={estilo}/>
                <View style={{
                    gap: 7,
                    flexDirection: 'column',
                    backgroundColor: '#232323',
                    borderTopColor: '#232323',
                    borderTopWidth: 7 }}>
                    <Faixa2 estilo={estilo}/>
                    <Faixa3 estilo={estilo}/>
                    <Faixa4 estilo={estilo}/>
                    <Faixa5 estilo={estilo}/>
                </View>
            </ScrollView>
        </View>
    )
}