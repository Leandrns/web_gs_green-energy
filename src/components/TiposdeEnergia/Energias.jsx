import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CardEnergia from "../CardEnergia/CardEnergia";

const Tipos = styled.section`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
`;

const Titulo = styled.h1`
  display: flex;
  justify-content: center;
  margin: 50px 0 0 0;
`;

const Subtitulo = styled.p`
  display: flex;
  justify-content: center;
  font-size: 15px;
  margin: 0 0 30px 0;
`;

const Secao1 = styled.div`
  margin: 0 20px 50px 20px;
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
