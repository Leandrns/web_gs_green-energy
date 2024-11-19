import styled from "styled-components";
import textoVb from "../../images/texto_vb.svg"; // Ajuste o caminho conforme necessário

export default function Chamado() {
    return (
        <Container>
            <Frase>
                <p>
                    Ajude a Construir um Futuro <br />
                    <img src={textoVb} alt="Texto vibranium" />
                </p>
            </Frase>
            <Mensagem>Faça parte do nosso time e transforme o amanhã!</Mensagem>
            <Botao>Adquira o Seu</Botao>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    padding: 1rem;
`;

const Frase = styled.div`
    font-size: 1.6rem;
    font-weight: bold;
    color: #333;
    line-height: 1.4;
    margin-bottom: 1rem;

    p {
        margin: 0;
    }

    img {
        max-height: 50px;
        margin-top: 0.5rem;
    }
`;

const Mensagem = styled.p`
    font-size: 1.2rem;
    color: #555;
    margin: 1rem 0;
`;

const Botao = styled.button`
    background-color: #FFCD3C;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition:transform 0.4s ease;

    &:hover {
        transform: scale(1.05);
    }
`;
