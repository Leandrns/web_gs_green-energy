import { Link } from "react-router-dom"
import styled from "styled-components"

const NavContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 60px;
`

const Button = styled.button`
    padding: 15px;
    border: none;
    background-color: #FFCD3C;
    border-radius: 16px;
    font-family: 'Outfit';
`

export default function NavProjeto() {
    return (
        <NavContainer>
            <Link to="inicio"><Button>Vibranium</Button></Link>
            <Link to="plataforma"><Button>Vibranium BI</Button></Link>
        </NavContainer>
    )
}