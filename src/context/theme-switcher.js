import { createContext, useState } from 'react'
import chandelureNormal from '../images/chandelure-normal.png'
import chandelureApagado from '../images/chandelure-apagado.png'
import setaBranca from '../images/seta-branca.png'
import setaPreta from '../images/seta-preta.png'

export const themes = {
    light: {
        backgroundDetails: '#FD3F3E',
        backgroundCardDetails: '#FFFFEBEE',
        backgroundInfo: '#B2A6A6',
        titulo: '#FD3F3E',

        header: '#FD3F3E',
        text: '#000000',
        image: chandelureNormal,
        alt: "Switch to 'dark mode'",
        seta: setaPreta,

        backgroundCard: '#AB0000',
        backgroundCardInfo: '#FFD0D0',
        backgroundHome:'#FEF0F0'
    },
    dark: {
        backgroundDetails: '#0B081D',
        backgroundCardDetails: '#141124',
        backgroundInfo: '#201D30',
        titulo: '#FFFFFF',

        header: '#0B081D',
        text: '#FFFFFF',
        image: chandelureApagado,
        alt: "Switch to 'light mode'",
        seta: setaBranca,

        backgroundCard: '#100D21',
        backgroundCardInfo: '#1A193C',
        backgroundHome: '#141118'
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const  [ theme, setTheme ]  = useState(themes.light)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}