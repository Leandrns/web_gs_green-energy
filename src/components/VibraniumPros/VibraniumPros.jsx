import styled from "styled-components";
import { SectionContainer, Titulo } from "../VibraniumOQueE/VibraniumOQueE";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 40px 80px;
`

const IconTextContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    gap: 15px;
    i {
        font-size: 3rem;
    }
`

export default function VibraniumPros() {
    return (
        <SectionContainer bgColor="#FFCD3C">
            <Titulo>Por que usar o VIBRANIUM?</Titulo>
            <Container>
                <IconTextContainer>
                    <i class="fa-solid fa-piggy-bank"></i>
                    <p>Maior economia com energia</p>
                </IconTextContainer>
                <IconTextContainer>
                    <i class="fa-solid fa-lightbulb"></i>
                    <p>Faz uso de energia limpa</p>
                </IconTextContainer>
                <IconTextContainer>
                    <i class="fa-solid fa-building"></i>
                    <p>Torna sua empresa mais sustentável</p>
                </IconTextContainer>
                <IconTextContainer>
                    <i class="fa-solid fa-seedling"></i>
                    <p>Diminui a pegada de carbono</p>
                </IconTextContainer>
                <IconTextContainer>
                    <i class="fa-solid fa-face-smile-beam"></i>
                    <p>Contribui para um futuro melhor</p>
                </IconTextContainer>
            </Container>
        </SectionContainer>
    )
}