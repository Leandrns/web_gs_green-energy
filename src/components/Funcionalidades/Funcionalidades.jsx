import styled from "styled-components";
import Dados from "../../images/DadosPC.png";
import DescFuncionalidades from "../DescFuncionalidades/DescFuncionalidades";

export default function Funcionalidades() {
  return (
    <div>
    <Title>Segurança e Desempenho</Title>
    <Secao2>
      <Image src={Dados} alt="Imagem ilustrativa da funcionalidade" />
      <DescFuncionalidades />
    </Secao2>
    </div>
  );
}

const Secao2 = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  gap: 40px; 
  padding: 60px;
  flex-wrap: wrap; 

  @media (max-width: 1024px) {
    gap: 30px;
  }

  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: center; 
    gap: 20px;
    padding: 50px;
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Image = styled.img`
  max-height: 50vh; 
  width: auto;
  max-width: 50vw; 
  border-radius: 6px;
  transition: transform 0.3s ease, max-width 0.3s ease;

  @media (max-width: 1024px) {
    max-width: 45%; 
  }

  @media (max-width: 768px) {
    max-width: 80%; 
    max-height: 40vh;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    max-height: 30vh;
  }

  &:hover {
    transform: scale(1.05);
    
  }
`;
