import styled from "styled-components";

export default function VisaoGeral() {
    return (
        <Container>
          <Textos>
            <Title>Conheça a Nossa Plataforma Inteligente de Monitoramento</Title>
            <Text>
              Acompanhe o funcionamento do software e visualize dados de vibração e energia gerada diretamente no dashboard.
            </Text>
          </Textos>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 30vh;
  max-width: 40vw;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  background: linear-gradient(to bottom, #f0f0f0, #ffce3c90);
  border-radius: 20px;
  margin: 20px;
  transition: transform 0.3s ease;
  padding: 50px;
  @media (max-width: 768px) {
    max-width: 80vw;
    height: auto;
    padding: 20px;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const Textos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: justify;
  gap: 10px;
  
  @media (max-width: 768px) {
    align-items: center;
    text-align: start;
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1.3rem; 
  }

  @media (max-width: 560px) {
    font-size: 1rem; 
  }
`;

const Text = styled.p`
  font-size: 1rem;
  margin-top: 10px;
  
  @media (max-width: 768px) {
    font-size: 0.9rem; 
  }
`;
