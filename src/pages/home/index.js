import { useState, useEffect, useContext } from 'react'
import { getPokemons, loadMorePokemons } from '../../services/index'
import { CardPokemon } from '../../components/card-pokemon'
import { Heading } from '../../components/header'
import { ThemeSwitcherButton } from '../../components/button-switch-theme'
import { ThemeContext } from '../../context/theme-switcher'
import * as C from "./style"
import loadPage from '../../images/carregar-mais.png'
import logo from '../../images/logo.png'

export const HomePage = () => {
    const [pokemons, setPokemons] = useState([])
    const [offSet, setOffSet] = useState(0)
    const { theme } = useContext(ThemeContext)
    const addOffSet = 10

    useEffect(() => {
        const showPokemons = async () => {
            const data = await loadMorePokemons(offSet)
            const pokemonsObjects = await getPokemons(data.results)
            setPokemons([...pokemons, ...pokemonsObjects])
        }
        showPokemons()
    }, [offSet])

    function loadMore() {
        setOffSet(offSet + addOffSet)
    }

    return (
        <>
            <Heading>
                <C.Logo src={logo} alt='Logo de Bem Vindo'></C.Logo>
                <ThemeSwitcherButton />
            </Heading>
            <C.Main theme={theme}>
                <C.ListPokemon>
                    {pokemons.map((pokemon, index) => {
                        return (
                            <CardPokemon
                                name={pokemon.name}
                                id={pokemon.id}
                                image={pokemon.sprites.other.dream_world.front_default}
                                key={index}
                                types={pokemon.types}
                            />
                        )
                    })}
                </C.ListPokemon>
                <C.Button onClick={loadMore}>
                    <img src={loadPage}  alt='Botão Carregar'/>
                </C.Button>
            </C.Main>
        </>
    )
}