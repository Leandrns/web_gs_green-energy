import React from "react";
import styled from "styled-components";
import eolica from "../../images/eolica.jpg";
import hidreletrica from "../../images/hidreletrica.jpg";  
import solar from "../../images/solar.jpg";  
import biomassa from "../../images/biomassa.jpg";  
import geotermica from "../../images/geotermica.jpg";  
import mares from "../../images/mares.jpg";  

const Card = styled.div`
  --bg: #f7f7f8;
  --hover-bg: #b9fdbb;
  --hover-text: #000000;
  width: 100%;
  height: 288px;
  text-align: center;
  background: var(--bg);
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  transition: .3s cubic-bezier(.6,.4,0,1), transform .15s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  
  background: #e0e0e0;
  box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
  background-size: cover;
  &:hover {
    background: var(--hover-bg);
    padding: 10px;
  }
  &:hover > div,
  &:hover > strong {
    opacity: 0;
    
  }

  &:hover .nome {
    opacity: 1;
    
  }
`;

const Imagem = styled.div`
  width: 100%;
  height: 288px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-position: center;
`;

const Descricao = styled.span`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--hover-text);
  border-radius: 5px;
  top: 100%;
  padding: 10px;
  transition: all .3s cubic-bezier(.6,.4,0,1);
  ${Card}:hover & {
    top: 0;
    font-size: 1.2em;
  }
`;
const Dados = styled.li`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  opacity: 0; 
  transition: opacity 0.3s ease-in-out;
`;

const Nome = styled.strong`
  font-size: 1.5em;
  color: #006414;
  font-weight: bold;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease; 
`;

const CardEnergia = ({ tipo, nome, descricao, dadosRelevantes }) => {
  let imagem;
  switch (tipo) {
    case "Energia Eólica":
      imagem = eolica;
      break;
    case "Energia Solar":
      imagem = solar;
      break;
    case "Energia Hidrelétrica":
      imagem = hidreletrica;
      break;
    case "Energia Biomassa":
      imagem = biomassa;
      break;
    case "Energia Geotérmica":
      imagem = geotermica;
      break;
    case "Energia das Marés":
      imagem = mares;
      break;
    default:
      imagem = eolica;
  }

  return (
    <Card>
      <Imagem img={imagem} />
      <Nome className="nome">{nome}</Nome>
      <Descricao>{descricao}</Descricao>
      <Dados className="dados">{dadosRelevantes}</Dados>
    </Card>
  );
};

export default CardEnergia;
