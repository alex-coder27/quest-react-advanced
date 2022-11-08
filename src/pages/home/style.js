import styled from 'styled-components'

export const Logo = styled.img`
    width: 200px;
    @media (max-width: 460px) {
        width: 125px;
    }
`

export const Main = styled.main`
    background: ${props => props.theme.backgroundHome};
    display: flex;
    max-width: 1440px;
    min-height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
`
export const ListPokemon = styled.ul`
    background: ${props => props.theme.backgroundHome};
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 5px;
`
export const Button = styled.button`
    width: 250px;
    background: none;
    cursor: pointer;
    img {
        width: 100%;
    }
    img:hover {
        opacity: 0.8;
        transition: 0.3s;
    }
`