import styled from "styled-components";
import HomePC from "../../images/HomePC.png";

export default function ApresentaPlataforma() {
    return(
          <Image src={HomePC} alt="Imagem ilustrativa da plataforma" />
    )
}

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