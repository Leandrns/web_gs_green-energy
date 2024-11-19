import styled from "styled-components"
import logo from "../../images/logo_v_yellow.svg"
import fundoHero from "../../images/3d-futuristic-background-with-low-poly-plexus-design.jpg"

const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  gap: 30px;
  height: 50vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                url(${fundoHero});
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
`

const Logo = styled.img`
  width: 120px;
`

export default function VibraniumHero() {
  return (
    <HeroContainer>
      <Titulo><span>VIBRANIUM</span>: Gerando <span>energia</span> por vibração</Titulo>
      <Logo src={logo}></Logo>
    </HeroContainer>
  )
}
