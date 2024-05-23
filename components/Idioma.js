import { useState } from "react";
import { List } from "react-native-paper";

export default function Idioma(params) {
    const [idioma, setIdioma] = useState('Português')

    return (
        <List.Section style={{zIndex:10, overflow:'hidden', }}>
            
                <List.Accordion
                    left={props => <List.Icon icon='translate'></List.Icon>}
                    title={idioma}
                >
                    <List.Item title="Português" />
                    <List.Item title="English" />
                </List.Accordion>


            
        </List.Section>
    )
}