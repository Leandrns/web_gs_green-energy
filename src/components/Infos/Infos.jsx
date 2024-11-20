import styled from "styled-components"
import InfosPC from "../../images/InfosPC.png"
export default function Dados(){
    return(
        <Secao3>
            <img src={InfosPC}/>
            <Textos>
                <Texto>
                    <h2>Segurança</h2>
                    <p>Com tecnologia avançada e criptografia de ponta, nossa plataforma garante o funcionamento contínuo e seguro dos sensores, protegendo dados em tempo real para oferecer máxima confiabilidade e desempenho operacional.</p>
                </Texto>
                <Texto>
                    <h2>Suporte</h2>
                    <p>Nosso suporte especializado oferece assistência completa para garantir os sensores necessários e sua instalação eficiente, assegurando integração perfeita e funcionamento ideal para atender às suas necessidades.</p>
                </Texto>
            </Textos>
        </Secao3>
    )
}

const Secao3 = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #FFCD3C;

    img {
        max-width: 100%;
        max-height: 50vh;
        margin-bottom: 20px;
        transition: transform 0.3s ease;

        &:hover {
    transform: scale(1.05);
    
  }
    }

    @media (min-width: 768px) {
        img {
            margin-bottom: 30px;
        }
    }
`;

const Textos = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
        gap: 100px;
    }

`;

const Texto = styled.div`
    text-align: center;
    max-width: 300px;

    h2 {
        font-size: 1.7rem;
        margin-bottom: 10px;
    }

    p {
        font-size: 1.2rem;
        line-height: 1.5;
        text-align: justify;
    }

    @media (max-width: 768px) {
        p{
        font-size: 1rem;
        }
    }
`;
