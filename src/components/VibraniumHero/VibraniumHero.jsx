import styled from "styled-components"
import logo from "../../images/logo_v_yellow.svg"
import fundoHero from "../../images/3d-futuristic-background-with-low-poly-plexus-design.jpg"
import logoTexto from "../../images/logo_texto.svg"

const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 20px 20px;
  gap: 10px;
  height: 50vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                url(https://i.pinimg.com/originals/e7/19/3d/e7193dd881c18d15ce79d8fa6d64329e.gif);
  background-size: cover;
  background-position: center;
  color: white;
`

const Titulo = styled.h1`
  font-size: 36px;
  text-shadow: 0 0 16px black;
  span {
    color: #FFCD3C;
  }

  @media screen and (max-width: 456px){
    font-size: 30px;
  }

`

const Logo = styled.img`
  width: 120px;

`

export default function VibraniumHero() {
  return (
    <HeroContainer>
      <Titulo><img src={logoTexto} alt="" /> : Gerando <span>energia</span> por vibração</Titulo>
      <Logo src={logo}></Logo>
    </HeroContainer>
  )
}
