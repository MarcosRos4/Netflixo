import { useState } from "react";
import { View } from "react-native";
import { List, Text } from "react-native-paper";

import CriarAssinatura from "../../components/CriarAssinatura";

export default function Faixa5({estilo}){
    const [expanded, setExpanded] = useState(null)
    return (
        <View style={estilo.f5Container}>
            <Text style={estilo.f5Title} variant="displayLarge">Perguntas frequentes</Text>
            <List.AccordionGroup
                expandedId={expanded}
                onAccordionPress={(e)=> e===expanded ? setExpanded(null) : setExpanded(e)}
            >
                <List.Section style={estilo.f5Section}>
                    <List.Accordion
                        id="1"
                        titleStyle={estilo.f5Accordion}
                        right={props => <List.Icon icon={'plus'} />}
                        title={'O que é a Netflix?'} >
                        <List.Item
                            title={''}
                            description={items.item1}
                            style={[estilo.f5Item, {borderTopColor:'#2d2d2d', borderTopWidth:2}]}
                            descriptionStyle={estilo.f5Item}
                            contentStyle={{ height: 130 }}
                        ></List.Item>
                    </List.Accordion>
                    <List.Accordion
                        id="2"
                        titleStyle={estilo.f5Accordion}
                        right={props => <List.Icon icon={'plus'} />}
                        title={'Quanto custa a Netflix'} >
                        <List.Item
                            title={''}
                            description={items.item2}
                            style={[estilo.f5Item, {borderTopColor:'#2d2d2d', borderTopWidth:2}]}
                            descriptionStyle={estilo.f5Item}
                            contentStyle={{ height: 130 }}
                        ></List.Item>
                    </List.Accordion>
                    <List.Accordion
                        id="3"
                        titleStyle={estilo.f5Accordion}
                        right={props => <List.Icon icon={'plus'} />}
                        title={'Onde posso assistir?'} >
                        <List.Item
                            title={''}
                            description={items.item3}
                            style={[estilo.f5Item, {borderTopColor:'#2d2d2d', borderTopWidth:2}]}
                            descriptionStyle={estilo.f5Item}
                            contentStyle={{ height: 130 }}
                        ></List.Item>
                    </List.Accordion>
                    <List.Accordion
                        id="4"
                        titleStyle={estilo.f5Accordion}
                        right={props => <List.Icon icon={'plus'} />}
                        title={'Como faço pra cancelar?'} >
                        <List.Item
                            title={''}
                            description={items.item4}
                            style={[estilo.f5Item, {borderTopColor:'#2d2d2d', borderTopWidth:2}]}
                            descriptionStyle={estilo.f5Item}
                            contentStyle={{ height: 130 }}
                        ></List.Item>
                    </List.Accordion>
                    <List.Accordion
                        id="5"
                        titleStyle={estilo.f5Accordion}
                        right={props => <List.Icon icon={'plus'} />}
                        title={'O que eu posso assistir na Netflix?'} >
                        <List.Item
                            title={''}
                            description={items.item5}
                            style={[estilo.f5Item, {borderTopColor:'#2d2d2d', borderTopWidth:2}]}
                            descriptionStyle={estilo.f5Item}
                            contentStyle={{ height: 130 }}
                        ></List.Item>
                    </List.Accordion>
                    <List.Accordion
                        id="6"
                        titleStyle={estilo.f5Accordion}
                        right={props => <List.Icon icon={'plus'} />}
                        title={'A Netflix é adequada para crianças?'} >
                        <List.Item
                            title={''}
                            description={items.item6}
                            style={[estilo.f5Item, {borderTopColor:'#2d2d2d', borderTopWidth:2}]}
                            descriptionStyle={estilo.f5Item}
                            contentStyle={{ height: 130 }}
                        ></List.Item>
                    </List.Accordion>
                </List.Section>
            </List.AccordionGroup>
            <CriarAssinatura weight={8} />
        </View>
    )
}

const items = {
    item1: "A Netflix é um serviço de streaming que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet. Você pode assistir a quantos filmes e séries quiser, quando e onde quiser – tudo por um preço mensal acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.",
    item2: "Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$ 18,90 a R$ 55,90 por mês. Sem contrato nem taxas extras.",
    item3: "Assista onde quiser, quando quiser. Faça login com sua conta Netflix em netflix.com para começar a assistir no computador ou em qualquer aparelho conectado à Internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames. Você também pode baixar a sua série favorita com o aplicativo Netflix para iOS, Android ou Windows 10. Use downloads para levar a Netflix para onde quiser sem precisar de conexão com a Internet. Leve a Netflix com você para qualquer lugar.",
    item4: "A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento.",
    item5: "A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser.",
    item6: "A experiência infantil da Netflix faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos responsáveis. O recurso de controle parental, incluso nos perfis para crianças e protegido por PIN, permite restringir a classificação etária do conteúdo que as crianças podem ver e bloquear títulos específicos que você não quer que elas assistam."
}