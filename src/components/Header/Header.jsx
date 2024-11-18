import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"

const HeaderContainer = styled.header`
    background-color: ${(props) => props.bgColor};
    transition: 0.3s ease-in-out;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    .link {
        text-decoration: none;
        color: black;
        padding: 10px;
        position: relative;
        ::after {
            content: " ";
            width: 0%;
            height: 2px;
            background-color: black;
            position: absolute;
            bottom: 0;
            left: 0;
            transition: 0.4s ease-in-out;
        }

        &:hover ::after {
            width: 100%;
        }
    }
`

const OpcaoHeader = styled.a`
    font-size: 20px;
`

export default function Header() {
    const location = useLocation()
    const coresPages = {
        '/': '#5CCB5F',
        '/vibranium': '#FFCD3C'
    }

    return (
        <HeaderContainer bgColor={coresPages[location.pathname]}>
            <NavContainer>
                <Link to="/" className="link">
                    <OpcaoHeader>Green Energy</OpcaoHeader>
                </Link>
                <Link to="/vibranium" className="link">
                    <OpcaoHeader>Projeto VIBRANIUM</OpcaoHeader>
                </Link>
            </NavContainer>
        </HeaderContainer>
    )
}
