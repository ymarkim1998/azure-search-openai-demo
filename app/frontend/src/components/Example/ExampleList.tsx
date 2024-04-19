import { Example } from "./Example";

import styles from "./Example.module.css";

const DEFAULT_EXAMPLES: string[] = ["O que é governança de dados?", "Quais são os pilares da governança de dados?", "O que faz um Data Steward?"];

const GPT4V_EXAMPLES: string[] = [
    "Qual é a ordem de estudo recomendada para consultores de DG?",
    "Qual é o valor da multa aplicada em empresas que descumprirem a GDPR?",
    "Descreva sucintamente cada modelo de operação, listando seus prós e contras e em quais casos de uso se aplicam melhor"
];

interface Props {
    onExampleClicked: (value: string) => void;
    useGPT4V?: boolean;
}

export const ExampleList = ({ onExampleClicked, useGPT4V }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {(useGPT4V ? GPT4V_EXAMPLES : DEFAULT_EXAMPLES).map((question, i) => (
                <li key={i}>
                    <Example text={question} value={question} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
