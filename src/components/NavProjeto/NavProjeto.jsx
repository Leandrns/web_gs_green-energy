import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"

const NavContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 70px;
    background-color: #c99300;
`

const Button = styled.button`
    padding: 15px;
    border: none;
    background-color: #FFCD3C;
    border-radius: 16px;
    font-family: 'Outfit';
    box-shadow: ${(props) => (props.isActive ? 'inset 2px 2px 6px rgba(0,0,0,0.5)' : 'none')};
    transition: background-color 0.2s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.1s ease-in-out;

    &:active {
        box-shadow: inset 2px 2px 6px rgba(0,0,0,0.5);
    }

    &:hover {
        background-color: #ffe598;
        transform: translate3d(-3px, -3px, -3px);
    }
`

export default function NavProjeto() {
    const location = useLocation()

    const navButtons = [
        {name: 'Vibranium', path: 'inicio'},
        {name: 'Vibranium BI', path: 'plataforma'}
    ]

    return (
        <NavContainer>
            {navButtons.map(button => (
                <Link to={button.path}><Button isActive={location.pathname === `/vibranium/${button.path}`}>{button.name}</Button></Link>
            ))}
        </NavContainer>
    )
}