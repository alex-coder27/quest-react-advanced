import { Link } from "react-router-dom"
import * as C from "./style"
import { ThemeSwitcherButton } from '../button-switch-theme/index'
import { useContext } from "react"
import { ThemeContext } from "../../context/theme-switcher"

export const PokeDetails = ({ name, image, moves, types, abilities, id }) => {
    const { theme } = useContext(ThemeContext)

    return (
        <>
            <C.Header theme={theme}>
                <Link to='/quest-react-advanced/'>
                    <C.Voltar src={theme.seta} alt="seta" />
                </Link>
                <ThemeSwitcherButton />
            </C.Header>
            <C.Main theme={theme}>
                <C.ProfilePokemon>
                    <C.ContainerImage theme={theme}>
                        <img src={image} alt={name} />
                    </C.ContainerImage>
                    <C.ProfileInfo theme={theme}>
                        <C.ContainerProfile theme={theme}>
                            <p>N°{id}</p>
                            <h1>{name}</h1>
                        </C.ContainerProfile>
                        <C.ContainerType>
                            {types.map((type, index) => {
                                return (
                                    <p key={index} className={type.type.name}>{type.type.name}</p>
                                )
                            })}
                        </C.ContainerType>
                        <C.ContainerMove theme={theme}>
                            <h2>Moves</h2>
                            <ul>
                                {moves.map((move, index) => {
                                    return (
                                        <li key={index}>
                                            <p>{move.move.name}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </C.ContainerMove>
                    </C.ProfileInfo>
                </C.ProfilePokemon>
                <C.InfoPokemon theme={theme}>
                    <h2>Abilities</h2>
                    {abilities.map((ability, index) => {
                        return (
                            <C.ContainerAbility key={index} theme={theme}>
                                <h3>{ability.name}</h3>
                                <p>{ability.flavor_text_entries[0].flavor_text}</p>
                            </C.ContainerAbility>
                        )
                    })}
                </C.InfoPokemon>
            </C.Main>
        </>
    )
}