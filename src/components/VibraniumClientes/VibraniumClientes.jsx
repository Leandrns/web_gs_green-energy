import styled from "styled-components";
import { SectionContainer, Titulo } from "../VibraniumOQueE/VibraniumOQueE";

const Clientes = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 60px;
`

const LogoCliente = styled.img`
    height: 80px;
`

export default function VibraniumClientes() {
    return (
        <SectionContainer>
            <Titulo>Alguns dos nossos clientes...</Titulo>
            <Clientes>
                <LogoCliente src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Metr%C3%B4-SP_logo.svg/2560px-Metr%C3%B4-SP_logo.svg.png"></LogoCliente>
                <LogoCliente src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/CPTM_%28Logo%29.svg/2560px-CPTM_%28Logo%29.svg.png"></LogoCliente>
                <LogoCliente src="https://upload.wikimedia.org/wikipedia/pt/9/9c/SPTrans_logo.png"></LogoCliente>
                <LogoCliente src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/EMTU_logo.svg/640px-EMTU_logo.svg.png"></LogoCliente>
            </Clientes>
        </SectionContainer>
    )
}