import styled from 'styled-components'

export const Header = styled.header`
    padding: 20px 50px;
    background: ${props => props.theme.header};
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 460px) {
        padding: 10px;
    }
`