import styled from "styled-components"

export const Final = styled.footer`
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #006414;
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

export const Logo = styled.div`
    display: flex;
    width: 228px;
    height: 85px;
    background-image: ${({ url }) => `url(${url})`};
    background-size: cover;
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
        color: #5ccb5f;
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
    width: 100%;
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
        color: #5ccb5f;
        }
    }
`


export default function Footer(){
    return(
        <Final>
            <Inicio>
                <Logo url="https://www.fiap.com.br/graduacao/global-solution/svg/header/green-energy.svg" />
                <Caminhos>
                    <Titulo>Para onde você quer ir?</Titulo>
                    <Localizar href="#hero">Início</Localizar>
                    <Localizar href="#tipoEnergia">Tipos de Energia</Localizar>
                    <Localizar href="#title_beneficios_desafios">Benefícios e Desafios</Localizar>
                </Caminhos>
            </Inicio>
            <Social>
                <Media href="#">
                    <i class="fa-brands fa-youtube"></i>
                </Media>
                <Media href="#">
                    <i class="fa-brands fa-linkedin"></i>
                </Media>
                <Media href="#">
                    <i class="fa-brands fa-youtube"></i>
                </Media>
                <Media href="#">
                    <i class="fa-brands fa-instagram"></i>
                </Media>
            </Social>
            <Copyright>© 2024 Todos os Direitos Reservados</Copyright>
        </Final>
    )
}