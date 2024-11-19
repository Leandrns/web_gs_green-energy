import styled from "styled-components"
import eolica from "../../images/eolica.jpg"
import hidreletrica from "../../images/hidreletrica.jpg"
import solar from "../../images/solar.jpg"
import biomassa from "../../images/biomassa.jpg"
import geotermica from "../../images/geotermica.jpg"
import mares from "../../images/mares.jpg"

const Tipos = styled.section`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
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
`
const Subtitulo = styled.p`
  display: flex;
  justify-content: center;
  font-size: 15px;
  margin: 0 0 30px 0;
`
const Secao1 = styled.div`
  margin: 0 20px 50px 20px;
`

export function TiposEnergeticos() {
  return (
    <Secao1 id="secao1">
      <Titulo>Tipos de Energia</Titulo>
      <Subtitulo>(passe o mouse/dedo sobre a imagem)</Subtitulo>
      <Tipos>
          <Cards>
              <Imagem>
                  {/* IMAGEM AQUI */}
              </Imagem>
              <Descricao>Energia Eólica:</Descricao>
          </Cards>
          <Cards>
              <Imagem img={hidreletrica}>
                  {/* IMAGEM AQUI */}
              </Imagem>
              <Descricao>Energia Hidrelétrica::</Descricao>
          </Cards>
          <Cards>
              <Imagem img={solar}>
                  {/* IMAGEM AQUI */}
              </Imagem>
              <Descricao>Energia Solar:</Descricao>
        </Cards>
        <Cards>
              <Imagem img={biomassa}>
                  {/* IMAGEM AQUI */}
              </Imagem>
              <Descricao>Energia Biomassa:</Descricao>
        </Cards>
        <Cards>
              <Imagem img={geotermica}>
                  {/* IMAGEM AQUI */}
              </Imagem>
              <Descricao>Energia Geotérmica:</Descricao>
        </Cards>
        <Cards>
              <Imagem img={mares}>
                  {/* IMAGEM AQUI */}
              </Imagem>
              <Descricao>Energia das Marés:</Descricao>
        </Cards>
      </Tipos>
    </Secao1>
  )
}