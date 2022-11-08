import styled from 'styled-components'

export const HomePage = styled.img`
    width: 90px;
    :hover {
        animation: navegar 0.5s infinite alternate;
    }
    @keyframes navegar {
        from {
            transform: translateX(0);
            }
            to {
                transform: translateX(25px);
        }
    }
    @media (max-width: 460px) {
        width: 70px;
    }

`

export const Main = styled.main`
    display: flex;
    max-width: 1440px;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme.backgroundDetails};
    padding: 5px;
    color: ${(props) => props.theme.text};
    @media (max-width: 950px) {
        flex-direction: column;
    }
`

export const ProfilePokemon = styled.section`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    width: 40%;
    height: 100%;
    padding: 10px;
    margin-bottom: 10px;
    @media (max-width: 950px) {
        height: 50%;
        width: 100%;
        margin-bottom: 0;
    }
`
export const ContainerImage = styled.div`
    width: 100%;
    height: 35%;
    margin-bottom: 15px;
    img {
        width: 100%;
        height: 100%;
        border-radius: 25px;
        background: ${(props) => props.theme.backgroundCardDetails};
    }
    @media (max-width: 950px) {
        margin-bottom: 10px;
    }
    @media (max-width: 550px) {
        height: 30%;
    }
    @media (max-width: 460px) {
        height: 27%;
    }
`

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${(props) => props.theme.backgroundCardDetails};
    width: 100%;
    height: 100%;
    border-radius: 25px;
    justify-content: space-evenly;
    padding: 10px;
`

export const ContainerProfile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    font-size: 55px;
    background: ${(props) => props.theme.backgroundInfo};
    h1 {
        margin-left: 20px;
        font-size: 100%;
        text-transform: capitalize;
    }
    @media (max-width: 1030px) {
        font-size: 40px;
    }
    @media (max-width: 950px) {
        font-size: 30px;
    }
    @media (max-width: 750px) {
        font-size: 22px;
    }
`
export const ContainerType = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    P {
        text-transform: UpperCase;
        padding: 5px;
        margin-right: 10px;
        border-radius: 10px;
    }
    & .normal {
        background: #A8A878;
    }
    & .psychic {
        background: #f85888;
    }
    & .grass {
        background: #78C850;
    }
    & .poison {
        background: #A040A0;
    }
    & .fire {
        background: #F08030;
    }
    & .water {
        background: #6890F0;
    }
    & .electric {
        background: #F8D030;
    }
    & .ice {
        background: #98D8D8;
    }
    & .fighting {
        background: #C03028;
    }
    & .ground {
        background: #E0C068;
    }
    & .flying {
        background: #A890F0;
    }
    & .bug {
        background: #A8B820;
    }
    & .rock {
        background: #B8A038;
    }
    & .ghost {
        background: #705898;
    }
    & .dark {
        background: #705848;
    }
    & .dragon {
        background: #7038F8;
    }
    & .steel {
        background: #F8F8F0;
    }
    & .fairy {
        background: #F0B6BC;
    }
    @media (max-width: 950px) {
        font-size: 20px;
    }
    @media (max-width: 750px) {
        font-size: 16px;
    }
`

export const ContainerMove = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
        margin-bottom: 10px;
        font-size: 40px;
        color: ${(props) => props.theme.titulo};
    }
    ul {
        align-self: center;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        font-size: 19px;
    }
    li {
        background: ${(props) => props.theme.backgroundInfo};
        width: 180px;
        padding: 5px;
        text-align: center;
        border-radius: 10px;
        margin-bottom: 10px;
        text-transform: uppercase;
    }
    @media (max-width: 950px) {
        h2 {
            font-size: 25px;
        }
        ul {
            font-size: 16px;
        }
        li {
            margin-left: 5px;
            width: 166px;
        }
    }
    @media(max-width: 750px) {
        h2 {
            font-size: 20px;
        }
        ul {
            font-size: 15px;
        }
        li {
            margin-bottom: 5px;
            width: 143px;
        }
    }
    @media (max-width: 460px) {
        ul {
            font-size: 13px;
        }
        li {
            width: 125px;
        }
    }
    @media (max-width: 310px) {
        li {
            margin-left: 0;
            width: 110px;
        }
    }
`

export const InfoPokemon = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    border-radius: 25px;
    background: ${(props) => props.theme.backgroundCardDetails};
    width: 40%;
    height: 100%;
    padding: 20px;
    h2 {
        margin: 5px 0;
        color: ${(props) => props.theme.titulo};
        align-self: center;
        font-size: 50px
    }
    @media (max-width: 950px ) {
        height: 50%;
        width: 98%;
        h2 {
            font-size: 30px;
        }
    }
    @media (max-width: 460px ) {
        h2 {
            font-size: 25px;
        }
    }
`

export const ContainerAbility = styled.div`
    margin-bottom: 25px;
    h3 {
        text-transform: capitalize;
        margin-bottom: 5px;
        color: ${(props) => props.theme.titulo};
        font-size: 30px;
    }
    p {
        margin-bottom: 15px;
        font-size: 25px;
    }
    @media (max-width: 950px) {
        margin-bottom: 5px;
        h3 {
            font-size: 24px;
        }
        p {
            font-size: 20px;
        }
    }
    @media (max-width: 750px) {
        h3 {
            font-size: 20px;
        }
        p {
            font-size: 16px;
        }
    }
    @media (max-width: 460px) {
        p {
            font-size: 15px;
        }
    }
`