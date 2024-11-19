import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CardEnergia from "../CardEnergia/CardEnergia";
import eolica from "../../images/eolica.jpg"
import hidreletrica from "../../images/hidreletrica.jpg"
import solar from "../../images/solar.jpg"
import biomassa from "../../images/biomassa.jpg"
import geotermica from "../../images/geotermica.jpg"
import mares from "../../images/mares.jpg"

const Tipos = styled.section`
  display: grid;
  flex-wrap: wrap;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
  @media screen and (max-width: 988px){
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 660px){
    grid-template-columns: 1fr;
  }
`

const Cards = styled.div`
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
    transition: .3s cubic-bezier(.6,.4,0,1),transform .15s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    background: #e0e0e0;
    box-shadow: 15px 15px 30px #bebebe,
             -15px -15px 30px #ffffff;
    background-size: cover;
    &:hover{
      background: var(--hover-bg);
    }
    &:hover > div,
    &:hover > strong {
    opacity: 0;
  }
`
const Imagem = styled.div`
width: 100%;
height: 288px;
background-image: ${({ img }) => `url(${img || eolica})`};
background-size: cover;
background-position: center;
`

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
  font-weight: bold;
  top: 100%;
  transition: all .3s cubic-bezier(.6,.4,0,1);
  
  ${Cards}:hover & {
    top: 0;
    font-size: 1.2em;
  }

`
const Titulo = styled.h1`
  display: flex;
  justify-content: center;
  margin: 50px 0 0 0;
  font-size: 36px;
`
const Subtitulo = styled.p`
  display: flex;
  justify-content: center;
  font-size: 15px;
  margin: 0 0 30px 0;
`;

const Secao1 = styled.div`
  margin: 0 40px 50px 40px;
`;

export function TiposEnergeticos() {
  const [fontesDeEnergia, setFontesDeEnergia] = useState([]);

  useEffect(() => {
    fetch("/energia.json")
      .then((response) => response.json())
      .then((data) => setFontesDeEnergia(data.fontesDeEnergia))
      .catch((error) => console.error("Erro ao carregar o JSON:", error));
  }, []);

  return (
    <Secao1 id="secao1">
      <Titulo>Tipos de Energia</Titulo>
      <Subtitulo>(Passe o mouse/dedo sobre a imagem)</Subtitulo>
      <Tipos>
        {fontesDeEnergia.map((energia, index) => (
          <CardEnergia
            key={index}
            tipo={energia.nome}
            nome={energia.nome}
            descricao={energia.descricao}
            dadosRelevantes={energia.dadosRelevantes}  // Passando os dados relevantes
          />
        ))}
      </Tipos>
    </Secao1>
  );
}
