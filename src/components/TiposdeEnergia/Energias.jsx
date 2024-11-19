import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CardEnergia from "../CardEnergia/CardEnergia";

const Tipos = styled.section`
  display: grid;
  flex-wrap: wrap;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 0 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Titulo = styled.h1`
  display: flex;
  justify-content: center;
  margin: 50px 0 10px 0;
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 30px 0 10px 0;
  }
`;

const Subtitulo = styled.p`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  margin: 0 0 30px 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin: 0 0 20px 0;
  }
`;

const Secao1 = styled.div`
  margin: 0 20px 50px 20px;

  @media (max-width: 768px) {
    margin: 0 10px 30px 10px;
  }
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
            dadosRelevantes={energia.dadosRelevantes}
          />
        ))}
      </Tipos>
    </Secao1>
  );
}

