import styled from "styled-components"
import imagemHero from "../../images/hero_energy.jpg"


const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: linear-gradient(rgba(0, 0, 0, 0.404), rgba(0, 0, 0, 0.308)), url(${imagemHero});
  background-size: cover;
  background-position: center;
  padding: 0 20px;
  gap: 30px;
  height: 90vh;
`

const Titulo = styled.h1`
  font-size: 36px;
  color: white;
  text-shadow: 0 0 20px black;
  text-align: center;
  span{
    color: #5CCB5F;
  }
`

const Botao = styled.button`
    border: none;
    width: 15em;
    height: 5em;
    border-radius: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    background: #1C1A1C;
    cursor: pointer;
    transition: all 450ms ease-in-out;
    &:hover{
        background: linear-gradient(0deg,#047c00,#7eea3f);
        box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4),
        inset 0px -4px 0px 0px rgba(0, 0, 0, 0.2),
        0px 0px 0px 4px rgba(255, 255, 255, 0.2),
        0px 0px 180px 0px #32ff17;
        transform: translateY(-2px);
        i{
            color: white;
            transform: scale(1.2);
        }
        span{
            color: white;
        }
    }
    
    i{
        font-size: 16px;
        color: #AAAAAA;
        transition: all 800ms ease;
    }
`

const Call = styled.span`
    font-weight: 600;
    color: #AAAAAA;
    font-size: 18px;
`


export function HeroEnergy() {
  const scrollToSection1 = () => {
    const section1 = document.getElementById('secao1');
    section1?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Hero>
      <Titulo>Transforme seu impacto no planeta com <span>energia renovável.</span></Titulo>
      <Botao onClick={scrollToSection1}>
        <Call>Descubra!</Call>
        <i className="fa-regular fa-circle-down"></i>
      </Botao>
    </Hero>
  );
}