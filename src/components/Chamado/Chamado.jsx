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

    padding: 5rem;

    @media(max-width: 768px){
        padding: 2rem;
    }
`;

const Frase = styled.div`
    font-size: 1.6rem;
    font-weight: bold;
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
     background-image: linear-gradient(135deg, #ffcd3c 0%, #b8a817 100%);
    box-shadow: 0 20px 30px -6px rgba(207, 175, 31, 0.671);
    outline: none;
    cursor: pointer;
    border: none;
    font-size: 24px;
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: translateY(3px);
        box-shadow: none;
    }

    &:active{
        opacity: 0.5;
    }
`;
