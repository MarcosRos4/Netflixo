import { View, StyleSheet } from "react-native";
import { List, Text } from "react-native-paper";
import { useState } from "react";

import CriarAssinatura from "../../components/CriarAssinatura";

export default function Faixa5() {
    const [expanded, setExpanded] = useState(null)
    return (
        <View style={styles.container}>
            <Text style={styles.perguntas} variant="displayLarge">Perguntas frequentes</Text>
            <List.AccordionGroup
                expandedId={expanded}
                onAccordionPress={(e)=> e===expanded ? setExpanded(null) : setExpanded(e)}
            >
                <List.Section style={styles.section}>
                    <List.Accordion
                        id="1"
                        titleStyle={styles.acordion}
                        right={props => <List.Icon icon={'plus'} />}
                        title={'O que é a Netflix?'} >
                        <List.Item
                            title={''}
                            description={items.item1}
                            style={[styles.item, {borderTopColor:'#2d2d2d', borderTopWidth:2}]}
                            descriptionStyle={styles.item}
                            contentStyle={{ height: 130 }}
                        ></List.Item>
                    </List.Accordion>
                    <List.Accordion
                        id="2"
                        titleStyle={styles.acordion}
                        right={props => <List.Icon icon={'plus'} />}
                        title={'Quanto custa a Netflix'} >
                        <List.Item
                            title={''}
                            description={items.item2}
                            style={[styles.item, {borderTopColor:'#2d2d2d', borderTopWidth:2}]}
                            descriptionStyle={styles.item}
                            contentStyle={{ height: 130 }}
                        ></List.Item>
                    </List.Accordion>
                    <List.Accordion
                        id="3"
                        titleStyle={styles.acordion}
                        right={props => <List.Icon icon={'plus'} />}
                        title={'Onde posso assistir?'} >
                        <List.Item
                            title={''}
                            description={items.item3}
                            style={[styles.item, {borderTopColor:'#2d2d2d', borderTopWidth:2}]}
                            descriptionStyle={styles.item}
                            contentStyle={{ height: 130 }}
                        ></List.Item>
                    </List.Accordion>
                    <List.Accordion
                        id="4"
                        titleStyle={styles.acordion}
                        right={props => <List.Icon icon={'plus'} />}
                        title={'Como faço pra cancelar?'} >
                        <List.Item
                            title={''}
                            description={items.item4}
                            style={[styles.item, {borderTopColor:'#2d2d2d', borderTopWidth:2}]}
                            descriptionStyle={styles.item}
                            contentStyle={{ height: 130 }}
                        ></List.Item>
                    </List.Accordion>
                    <List.Accordion
                        id="5"
                        titleStyle={styles.acordion}
                        right={props => <List.Icon icon={'plus'} />}
                        title={'O que eu posso assistir na Netflix?'} >
                        <List.Item
                            title={''}
                            description={items.item5}
                            style={[styles.item, {borderTopColor:'#2d2d2d', borderTopWidth:2}]}
                            descriptionStyle={styles.item}
                            contentStyle={{ height: 130 }}
                        ></List.Item>
                    </List.Accordion>
                    <List.Accordion
                        id="6"
                        titleStyle={styles.acordion}
                        right={props => <List.Icon icon={'plus'} />}
                        title={'A Netflix é adequada para crianças?'} >
                        <List.Item
                            title={''}
                            description={items.item6}
                            style={[styles.item, {borderTopColor:'#2d2d2d', borderTopWidth:2}]}
                            descriptionStyle={styles.item}
                            contentStyle={{ height: 130 }}
                        ></List.Item>
                    </List.Accordion>
                </List.Section>
            </List.AccordionGroup>
            <CriarAssinatura />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flexDirection: 'column',
        paddingVertical: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    perguntas: {
        width: '100%',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '700',
        marginBottom: 40,
        userSelect:'none'
    },
    section: {
        width: '80%',
        gap: 10,
        marginBottom: 50,
    },
    acordion: {
        color: "#fff",
        fontSize: 25,
    },
    item: {
        backgroundColor: "#1c1b1f",
        fontSize: 20,
        color: 'white',
        fontWeight: '600',
        height: 170,
        
    }
})

const items = {
    item1: "A Netflix é um serviço de streaming que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet. Você pode assistir a quantos filmes e séries quiser, quando e onde quiser – tudo por um preço mensal acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.",
    item2: "Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$ 18,90 a R$ 55,90 por mês. Sem contrato nem taxas extras.",
    item3: "Assista onde quiser, quando quiser. Faça login com sua conta Netflix em netflix.com para começar a assistir no computador ou em qualquer aparelho conectado à Internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames. Você também pode baixar a sua série favorita com o aplicativo Netflix para iOS, Android ou Windows 10. Use downloads para levar a Netflix para onde quiser sem precisar de conexão com a Internet. Leve a Netflix com você para qualquer lugar.",
    item4: "A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento.",
    item5: "A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser.",
    item6: "A experiência infantil da Netflix faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos responsáveis. O recurso de controle parental, incluso nos perfis para crianças e protegido por PIN, permite restringir a classificação etária do conteúdo que as crianças podem ver e bloquear títulos específicos que você não quer que elas assistam."
}