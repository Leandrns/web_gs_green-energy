import styled from "styled-components";
import textoVb from "../../images/texto_vb.svg"; // Ajuste o caminho conforme necessário

export default function Chamado() {
    return (
        <Frase>
            <p>Ajude a Construir um Futuro <br></br><img src={textoVb} alt="Texto vibranium" /></p>
        </Frase>
    );
}

const Frase = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    text-align: center; 
    font-size: 1.6rem; 
    font-weight: bold; 
    line-height: 1.4; 
    margin: 2rem 0; 

    p {
        display: inline-block; 
        margin: 0; 
    }

    img {
        max-height: 40px; 
        margin-left: 8px;
    }
`;

