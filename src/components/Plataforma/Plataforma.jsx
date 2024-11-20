import styled from "styled-components";
import VisaoGeral from "../VisaoGeral/VisaoGeral";
import Funcionalidades from "../Funcionalidades/Funcionalidades";
import Chamado from "../Chamado/Chamado";
import Dados from "../Infos/Infos";
import ApresentaPlataforma from "../ApresentaPlataforma/ApresentaPlataforma";


export default function Plataforma() {
  return (
    <Aba>
      <Secao1>
        <VisaoGeral />
        <RightSection>
          <ApresentaPlataforma />
        </RightSection>
      </Secao1>
      <Funcionalidades /> 
      <Dados />
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
  background: linear-gradient(to bottom, #ac8100, #ffcd3c);

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
