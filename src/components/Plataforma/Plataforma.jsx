import styled from "styled-components";
import VisaoGeral from "../VisaoGeral/VisaoGeral";
import Funcionalidades from "../Funcionalidades/Funcionalidades";
import Chamado from "../Chamado/Chamado";
import HomePC from "../../images/HomePC.png";

export default function Plataforma() {
  return (
    <Aba>
      <Secao1>
        <VisaoGeral />
        <RightSection>
          <Image src={HomePC} alt="Imagem ilustrativa da plataforma" />
        </RightSection>
      </Secao1>
      <Funcionalidades /> 
      <Chamado />
    </Aba>
  );
}

const Aba = styled.div`
    font-family: "Outfit";
`

const Secao1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 60px;
  flex-wrap: wrap; 
  font-family: "Outfit";

  @media (max-width: 1024px) {
    gap: 15px; 
  }

  @media (max-width: 568px) {
    flex-direction: column; 
    padding: 30px;
    gap: 10px; 
  }

  @media (max-width: 480px) {
    
    gap: 8px; 
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px; 
  
  @media (max-width: 768px) {
    margin-top: 15px; 
  }
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 50vh;
  border-radius: 6px;
  transition: transform 0.3s ease;
  @media (max-width: 768px) {
    max-height: 40vh;
    
  }

  @media (max-width: 480px) {
    max-height: 30vh; 
  }

  &:hover {
    transform: scale(1.05);
    
  }
`;

