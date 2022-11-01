import styled from 'styled-components'

export const Card = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px 30px 20px;
    border-radius: 20px;
    margin-left: 10px;
    margin-bottom: 15px;
    background: ${props => props.theme.backgroundCard};
    text-align: center;
    color: ${props => props.theme.text};
    h1 {
        width: 150px;
        align-self: center;
        font-size: 100%;
        padding: 3px 0;
        font-weight: 400;
        border-radius: 10px;
        text-transform: capitalize;
        background: ${props => props.theme.backgroundCardInfo};
        margin-bottom: 10px;
    }
`
export const ContainerImage = styled.div`
    background: ${props => props.theme.backgroundCardInfo};
    border-radius: 25px;
    width: 139px;
    height: 134px;
    position: relative;
    margin-bottom: 38px;
    img {
        width: 100%;
        height: 100%;
    }
    img:hover {
        transition: 0.3s;
        transform: scale(1.3); 
    }
`
export const Id = styled.p`
    padding: 5px;
    width: 35px;
    border-radius: 18px;
    background: ${props => props.theme.backgroundCardInfo};
    position: absolute;
    z-index: 10;
    margin-top: 15px;
    margin-right: 130px;
`
export const ContainerType = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    P {
        text-transform: capitalize;
        width: 65px;
        font-size: 100%;
        font-weight: 400;
        margin-right: 10px;
        border-radius: 5px;
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
`