import styled from "styled-components"
import cidade from "../../images/city.png"
import rural from  "../../images/rural.png"
import planet from "../../images/planet.png"

const Secao3 = styled.section`
    margin: 0 30px 50px 30px;
`

const Titulo = styled.h2`
    font-size: 36px;
    width: 100%;
    text-align: center;
    padding: 0 14px;
    color: #0e0c0c;
    @media screen and (max-width: 688px){
        font-size: 1.6rem;
    }
    @media(max-width: 380px) {
        font-size: 1.2rem;
    }
    @media screen and (min-width: 550px){
        margin-bottom: 20px;
    }
    @media screen and (min-width: 1240px){
        margin-bottom: 45px;
    }
`

const Grid = styled.div`
    padding: 0px 10px 10px 10px;
    display: grid;
    justify-items: center;
    align-items: center;
    width: 100%;
    grid-gap: 50px;
    grid-template-areas:
        "asideEsq articleDir"
        "articleEsq asideDir"
        "asiEsquerdo artDireita";

    #asEsq {
        grid-area: asideEsq;
    }

    #asDir{
        grid-area: asideDir;
    }

    #arDir{
        grid-area: articleDir;
    }

    #arEsq{
        grid-area: articleEsq;
    }
    #asiEsquerdo{
        grid-area: asiEsquerdo;
    } 
    
    #artDireita{
        grid-area: artDireita;
    }

    @media screen and (max-width: 1000px){
        grid-template-areas:
        "asideEsq"
        "articleDir"
        "asideDir"
        "articleEsq"
        "asiEsquerdo"
        "artDireita";
}
`

const Imagem = styled.aside`
    position: relative;
    width: 100%;
    background-color: #171717;
    padding: 12px;
    gap: 12px;
    border-radius: 80px;
    display: flex;
    justify-content: center;
    &::before {
        content: '';
        position: absolute;
        inset: 0;
        left: -5px;
        margin: auto;
        width: 102.5%;
        height: 102%;
        border-radius: 80px;
        background: linear-gradient(-45deg, #00cf29 0%, #278d2a 100%);
        z-index: -10;
        pointer-events: none;
        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(-45deg, #5CCB5F 0%, #006414 100%);
        transform: translate3d(0, 0, 0) scale(0.95);
        filter: blur(20px);
        z-index: -1;
    }

    &:hover::after {
        filter: blur(30px);
    }

    &:hover::before {
        transform: rotate(-90deg) scaleX(1.1) scaleY(1.1);
    }
    img{
        width: 100%;
        border: 2px solid transparent;
        border-radius: 70px;
    }
    @media screen and (max-width: 688px){
        height: 100%;
        width: 90%;
        &::before {
        left: -3px;
        }
    }
    @media screen and (max-width: 1000px){
        width: 70%;
    }
    @media screen and (min-width: 1240px){
        width: 80%;
        &::before {
        left: -10px;
        }
    }
`


const Container = styled.article`
    margin: 0 50px;
    h3{
        color: #000000;
        font-size: 28px;
    }
    p{
        color: #0e0c0c;
        text-align: justify;
        font-size: 23px;
    }
    @media screen and (max-width: 688px){
        h3{
            font-size: 25px;
        }
        p{
            font-size: 20px;
        }
    }
    @media(max-width: 400px) {
        h3{
            font-size: 1rem;
        }
        p{
            font-size: 0.8rem;
        }
        margin: 0;
    }
`

export function Duplas() {
    return (
        <Secao3>
        <Titulo>O que a Energia Sustentável pode proporcionar?</Titulo>
        <br />
        <Grid>
            <Imagem id="asEsq"><img src={planet} /></Imagem>
            <Container id="arDir">
                <h3>Cada Escolha Conta para o Futuro do Planeta</h3>
                <p>O caminho para um planeta sustentável começa com escolhas conscientes. Ao adotar energias renováveis, não estamos apenas reduzindo nossa pegada de carbono — estamos promovendo um futuro onde a natureza e a humanidade coexistem em equilíbrio. Como nossas escolhas energéticas de hoje moldam o futuro das próximas gerações? Este é um convite para refletir sobre o impacto coletivo que podemos alcançar ao priorizar a sustentabilidade em cada decisão.</p>
            </Container>


            <Container id="arEsq">
                <h3>Fortalecendo a Educação com Energia Sustentável</h3>
                <p>O acesso a uma energia confiável é essencial na educação, permitindo o uso de tecnologia e recursos digitais para um aprendizado interativo. De centros urbanos a áreas remotas, fontes renováveis como solar e eólica possibilitam que escolas ofereçam experiências de aprendizado de alta qualidade e sem interrupções, reduzindo desigualdades e construindo um futuro mais brilhante.</p>
            </Container>
            <Imagem id="asDir"><img src={rural} /></Imagem>


            <Imagem id="asiEsquerdo"><img src={cidade} /></Imagem>
            <Container id="artDireita">
                <h3>Energia Verde para o Crescimento Econômico</h3>
                <p>Investir em energia renovável impulsiona o crescimento econômico, gerando novos empregos, aprimorando a infraestrutura local e incentivando a inovação sustentável. Ao apoiar a energia limpa, cidades e empresas reduzem custos, atraem investimentos sustentáveis e constroem economias resilientes e ambientalmente responsáveis que beneficiam a todos.</p>
            </Container>
        </Grid>
    </Secao3>
    )
}