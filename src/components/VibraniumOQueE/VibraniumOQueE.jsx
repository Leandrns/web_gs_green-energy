import styled from "styled-components"
import vibranium1 from "../../images/vibranium1.png"
import vibranium2 from "../../images/vibranium2.png"
import bg from "../../images/Design.png"

export const SectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 50px 25px;
    min-height: 60vh;
    background: ${props => props.bgColor || 'transparent'};
    background-size: 100%;
    background-position: center;
`

export const Titulo = styled.h2`
    font-size: 30px;
    text-align: center;
`   

const ImgTextContainer = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 620px){
        flex-direction: column;
    }
`

const Texto = styled.p`
    font-size: 26px;
    margin: 0;
    span {
        font-weight: 700;
        color: #e7ad00;
    }

    @media screen and (max-width: 620px){
        font-size: 20px;
    }

`

const Imagem = styled.img`
    width: 40%;
    filter: drop-shadow(5px 12px 8px rgba(255, 166, 0, 0.8));
    @media screen and (max-width: 620px){
        width: 90%;
        margin: 20px 0;
    }
`

export default function VibraniumOQueE() {
    return (
        <SectionContainer bgColor={`url(${bg})`}>
            <Titulo>O que é o VIBRANIUM?</Titulo>
            <ImgTextContainer>
                <Texto>
                    O <span>VIBRANIUM</span> consiste em um sistema formado por <span>sensores piezoelétricos</span>,
                    sendo capaz de detectar qualquer tipo de vibração e convertê-la em 
                    <span> energia elétrica</span>.
                </Texto>
                <Imagem src={vibranium1}></Imagem>
            </ImgTextContainer>
            <ImgTextContainer>
                <Imagem src={vibranium2}></Imagem>
                <Texto>
                    Esse dispositivo <span>inovador</span> pode ser extramamente eficiente quando instalado
                    em áreas muito <span>movimentadas</span>, podendo gerar um potencial elétrico suficiente
                    para <span>energizar</span> tarefas comuns do dia a dia, como sistemas de iluminação.
                </Texto>
            </ImgTextContainer>
        </SectionContainer>
    )
}