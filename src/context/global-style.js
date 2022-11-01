import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: 'Kanit', sans-serif;
    box-sizing: border-box;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`