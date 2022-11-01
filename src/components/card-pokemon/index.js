import { useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../../context/theme-switcher"
import * as C from "./style"

export const CardPokemon = ({ name, image, id, types }) => {
    const { theme } = useContext(ThemeContext)
    return (
        <C.Card theme={theme}>
            <Link to={`/pokemon/${name}`}>
                <C.ContainerImage theme={theme}>
                    <img src={image} alt={name} />
                </C.ContainerImage>
            </Link>
            <C.Id theme={theme}>{id}</C.Id>
            <h1>{name}</h1>
            <C.ContainerType>
                {types.map(type => {
                    return (
                        <p className={type.type.name}>{type.type.name}</p>
                    )
                })}
            </C.ContainerType>
        </C.Card>
    )
}