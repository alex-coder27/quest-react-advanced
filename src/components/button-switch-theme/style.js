import styled from 'styled-components'

export const Button = styled.button`
    background: none;
    cursor: pointer;
    img {
        width: 100px;
    }
    @media (max-width: 460px) {
        img {
            width: 70px;
        }
    }
`