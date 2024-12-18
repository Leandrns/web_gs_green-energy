import { useLocation, Link } from "react-router-dom"
import styled from "styled-components"
import logo from "../../images/logo_footer.svg"

export const Final = styled.footer`
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: ${(props) => props.fundo};
    font-family: "Outfit";
    bottom: 0;
`

export const Inicio = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px 30px 20px 30px;
    flex-wrap: wrap;
    gap: 50px;
    @media (min-width: 768px) {
        justify-content: space-around;
        gap: 0;
    }
`

export const Logo = styled.img`
    display: flex;
    width: 228px;
    height: 85px;
`

export const Caminhos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Titulo = styled.p`
    margin: 0;
    font-size: 20px;
    color: #f5f5f5;
    font-weight: bold;
`

export const Localizar = styled.a`
    text-decoration: none;
    color: #f5f5f5;
    font-size: 17px;
    transition: all 0.3s;
    width: fit-content;
    &:hover{
        color: ${(props) => props.hover};
        font-weight: bold;
    }
`

export const Copyright = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: whitesmoke;
    background-color: #171717;
    font-size: 0.9rem;
    padding: 1rem;
    max-width: 100%;
    text-align: center;
`

export const Social = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    gap: 35px;
        @media (min-width: 768px) {
            gap: 100px;
        }
`

export const Media = styled.a`
    transition: all 0.5s;
    &:hover{
        scale: 1.2;
    }
    i{
        color: #f5f5f5;
        font-size: 23px;
        &:hover{
            color: ${(props) => props.hover};
        }
    }
`


export default function Footer(){
    const location = useLocation()
    const corHover= {
        '/': '#5ccb5f',
        '/vibranium/inicio': '#FFCD3C',
        '/vibranium/plataforma': '#FFCD3C'
    }
    const corFundo= {
        '/': '#006414',
        '/vibranium/inicio': '#644900',
        '/vibranium/plataforma': '#644900'
    }
    const imagem= {
        '/': 'https://www.fiap.com.br/graduacao/global-solution/svg/header/green-energy.svg',
        '/vibranium/inicio': logo,
        '/vibranium/plataforma': logo
    }
    return(
        <Final fundo={corFundo[location.pathname]}>
            <Inicio>
                <Logo src={imagem[location.pathname]} />
                <Caminhos>
                    <Titulo>Para onde você quer ir?</Titulo>
                    <Localizar hover={corHover[location.pathname]} href="/">Green Energy</Localizar>
                    <Localizar hover={corHover[location.pathname]} href="/vibranium/inicio">Vibranium</Localizar>
                    <Localizar hover={corHover[location.pathname]} href="/vibranium/plataforma">Vibranium BI</Localizar>
                </Caminhos>
            </Inicio>
            <Social>
                <Media hover={corHover[location.pathname]} href="#">
                    <i class="fa-brands fa-facebook"></i>
                </Media>
                <Media hover={corHover[location.pathname]} href="#">
                    <i class="fa-brands fa-linkedin"></i>
                </Media>
                <Media hover={corHover[location.pathname]} href="#">
                    <i class="fa-brands fa-youtube"></i>
                </Media>
                <Media hover={corHover[location.pathname]} href="#">
                    <i class="fa-brands fa-instagram"></i>
                </Media>
            </Social>
            <Copyright>© 2024 Todos os Direitos Reservados</Copyright>
        </Final>
    )
}