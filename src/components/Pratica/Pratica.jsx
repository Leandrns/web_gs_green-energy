import styled from "styled-components";
import { useState } from "react";

export default function Pratica() {
    const [conteudo, setConteudo] = useState(""); 
    const [imagem, setImagem] = useState(""); 
    const [isVisible, setIsVisible] = useState(false);

    const mostrarBrasil = () => {
        setIsVisible(false);
        setTimeout(() => {
            setConteudo("O Brasil é um dos líderes em energia renovável, com grande foco em hidroeletricidade e biocombustíveis. O país tem investido em diversas fontes de energia limpa, com destaque para os parques solares no Nordeste e o uso do etanol. Com isso, o Brasil se destaca na matriz energética global, buscando cada vez mais soluções sustentáveis para atender à crescente demanda de energia.");
            setImagem("https://static.wixstatic.com/media/8c703f_11dc80702ccb45aeb011e9efe838dd3d~mv2.png/v1/fill/w_740,h_739,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/8c703f_11dc80702ccb45aeb011e9efe838dd3d~mv2.png"); 
            setIsVisible(true); 
        }, 500); 
    };
  
    const mostrarMundo = () => {
        setIsVisible(false);
        setTimeout(() => {
            setConteudo("O mundo está em transição para fontes de energia mais limpas e sustentáveis. A energia solar e eólica se destacam como alternativas à energia fóssil, com países como Alemanha e China investindo em parques solares e turbinas eólicas. A energia hidrelétrica segue sendo fundamental em muitas nações, enquanto a biomassa e os biocombustíveis ganham destaque na redução das emissões de carbono. O combate às mudanças climáticas está no centro das ações globais, com governos acelerando a adoção de energias renováveis para promover um planeta mais verde e equilibrado.");
            setImagem("https://1.bp.blogspot.com/-kaL8tThOvKs/YLznQei9AJI/AAAAAAAAIrc/CK-hIi-KlGcoDXmpcyahFEkmqlOTbXm7wCLcBGAsYHQ/s320/potential-energy-kinetic-energy-differences-explained-light-image.jpg"); 
            setIsVisible(true);
        }, 500); 
    };

    return (
        <Container>
            <Titulo>Evolução da Sustentabilidade Energética</Titulo>
            <Descricao>
                A geração de energia sustentável é essencial para atender às demandas globais sem comprometer o meio ambiente. Investir em fontes renováveis como solar, eólica e biomassa reduz a poluição, preserva recursos naturais e combate as mudanças climáticas, garantindo um futuro equilibrado e sustentável.
            </Descricao>
            <Subtitulo>Veja Como Atua as Fontes de Energia Renovável no Brasil e no Mundo</Subtitulo>
            <Botoes>
                <Botao onClick={mostrarBrasil}>Brasil</Botao>
                <Botao onClick={mostrarMundo}>Mundo</Botao>
            </Botoes>
            <ConteudoExibido>
                <Texto className={isVisible ? 'ativo' : ''}>{conteudo}</Texto>
                {imagem && <Imagem className={isVisible ? 'ativo' : ''} src={imagem} alt="Imagem Energia Mundo" />}
            </ConteudoExibido>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
`;

const Descricao = styled.p`
    font-size: 1.5rem;
    text-align: justify;
    margin-top: 20px;
    max-width: 60vw;
  
    @media (max-width: 768px) {
        font-size: 1.2rem;
        max-width: 80vw;
    }
`;

const Titulo = styled.h1`
    font-size: 2rem;
    text-align: center;
    margin: 20px 0;
  
    @media (max-width: 768px) {
        font-size: 1.5rem;
        margin: 15px 0;
    }
`;

const Subtitulo = styled.p`
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    margin: 0 0 30px 0;
    text-align: center;
    font-weight: bold;
  
    @media (max-width: 768px) {
        font-size: 1rem;
        margin: 0 0 20px 0;
    }
`;

const Botoes = styled.div`
    display: flex;
    gap: 60px;
    justify-content: center;
  
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
    }
`;

const Botao = styled.button`
    background-color: #009929;
    display: flex;
    justify-content: center;
    padding: 17px 40px;
    border-radius: 10px;
    border: 0;
    letter-spacing: 1.5px;
    font-size: 15px;
    transition: all 0.3s ease;
    box-shadow: rgb(46, 201, 46) 0px 10px 0px 0px;
    color: hsl(0, 0%, 100%);
    cursor: pointer;
    transition: all 0.3s ease;
  
    &:hover {
        box-shadow: rgb(46, 201, 46) 0px 7px 0px 0px;
    }

    &:active{
        background-color: #006414;
        box-shadow: rgb(46, 201, 46) 0px 0px 0px 0px;
        transform: translateY(5px);
        transition: 200ms;
    }
  
    @media (max-width: 768px) {
        font-size: 1rem;
        padding: 10px 20px;
        width: 30vw;
    }
`;

const ConteudoExibido = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    gap: 20px;
    max-width: 1000px;
    margin-top: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
    }
`;

const Imagem = styled.img`
    width: 40vw;
    height: 80vh;
    object-fit: cover;
    border-radius: 10px;
    max-width: 100%;  
    

    @media (max-width: 768px) {
        width: 100%;  
        height: auto; 
    }
`;

const Texto = styled.p`
    font-size: 1.2rem;
    text-align: justify;
    width: 40vw;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;

    &.ativo {
        opacity: 1;
    }

    @media (max-width: 768px) {
        font-size: 1rem;
        width: 80vw;
    }
`;

