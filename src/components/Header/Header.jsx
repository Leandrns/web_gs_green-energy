import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"
import vibra from "../../images/logo_footer.svg"

const HeaderContainer = styled.header`
    background-color: ${(props) => props.bgColor};
    transition: 0.3s ease-in-out;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    .link {
        text-decoration: none;
        color: white;
        padding: 0px 10px 3px 10px;
        position: relative;
        ::after {
            content: " ";
            width: 0%;
            height: 2px;
            background-color: white;
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
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    width: ${(props) => props.largura || '150px;'};
    height: 60px;
    background-color: ${(props) => props.selecColor || 'defaultColor'};
    box-shadow: ${(props) => props.boxShadow || 'none'};
    img.green{
        width: 130px;
    }
    img.vibra{
        width: 245px;
        padding-top: 6px;
    }
`

export default function Header() {
    const location = useLocation()
    const coresPages = {
        '/': '#006414',
        '/vibranium/inicio': '#FFCD3C',
        '/vibranium/plataforma': '#FFCD3C'
    }
    const coresFundo = {
        '/': {
            backgroundColor: '#00cf2d',
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 50px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 26px -18px inset'
        }
    }
    const coresFundo2 = {
        '/vibranium/inicio':{
            backgroundColor: '#cf8d00',
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 50px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 26px -18px inset'
        },
        '/vibranium/plataforma':{
            backgroundColor: '#644900',
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 50px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 26px -18px inset'
        }
    }

    return (
        <HeaderContainer bgColor={coresPages[location.pathname]}>
            <NavContainer>
                <Link to="/" className="link">
                    <OpcaoHeader selecColor={coresFundo[location.pathname]?.backgroundColor} 
                        boxShadow={coresFundo[location.pathname]?.boxShadow}><img className="green" src="https://www.fiap.com.br/graduacao/global-solution/svg/header/green-energy.svg"/></OpcaoHeader>
                </Link>
                <Link to="/vibranium/inicio" className="link">
                    <OpcaoHeader largura='270px' selecColor={coresFundo2[location.pathname]?.backgroundColor} 
                        boxShadow={coresFundo2[location.pathname]?.boxShadow}><img img className="vibra" src={vibra}/></OpcaoHeader>
                </Link>
            </NavContainer>
        </HeaderContainer>
    )
}
