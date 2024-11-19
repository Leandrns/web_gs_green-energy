import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faPlugCircleBolt } from "@fortawesome/free-solid-svg-icons";
import { faChargingStation } from "@fortawesome/free-solid-svg-icons";

export default function DescFuncionalidades() {
  return (
    <Container>
      
      <List>
        <ListItem>
        <p><FontAwesomeIcon icon={faBolt} style={{color: "#FFCD3C", marginRight: 5, fontSize:20}}/>Com nossa plataforma, você pode <span>acompanhar a geração de energia</span> de forma detalhada</p>
          
        </ListItem>
        <ListItem>
          <p><FontAwesomeIcon icon={faPlugCircleBolt} style={{color: "#FFCD3C", marginRight: 5, fontSize:20}}/>Acompanhe a economia de gastos com energia ao longo do tempo. Você pode <span>visualizar as reduções de custos</span> diárias, mensais e anuais.</p>
          
        </ListItem>
        <ListItem>
          <p><FontAwesomeIcon icon={faChargingStation} style={{color: "#FFCD3C", marginRight: 5, fontSize:20}}/>Com os sensores instalados, você pode visualizar em tempo real os dados, permitindo que você <span>acompanhe o desempenho dos sensores</span> ao longo do tempo</p>
          
        </ListItem>
      </List>
    </Container>
  );
}

const Container = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 50vw; 
  gap: 20px;

  @media (max-width: 768px) {
    max-width: 100%;
    align-items: center; 
  }
`;



const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: justify;
`;

const ListItem = styled.li`
  margin-bottom: 15px;
  padding: 10px;
  background-color: #f8f9fa;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  p {
    font-size: 1rem;
    margin: 0;
    line-height: 1.5;
    padding: 5px;
  }

  span{
    color: #FFCD3C;
    font-weight: bold;
  }
`;

