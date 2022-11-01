import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getAbilities } from "../services/index"
import { PokeDetails } from "../components/pokemon-details/index"

export const Details = () => {
    const { name } = useParams()
    const [abilities, setAbilities] = useState([])
    const [pokemon, setPokemon] = useState({
        id: '',
        name: '',
        image: '',
        moves: [],
        types: []
    })

    useEffect(() => {
        async function fetchAbilities(data) {
            const abilitiesData = await getAbilities(data.abilities);
            setAbilities(abilitiesData)
        }
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((res) => res.json())
            .then((data) => {
                const pokemon = {
                    id: data.id,
                    image: data.sprites.other.dream_world.front_default,
                    name: data.name,
                    moves: data.moves.slice(0, 4),
                    types: data.types
                };
                setPokemon(pokemon);
                fetchAbilities(data);
            });
    }, [name]);

    return (
        <PokeDetails
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            moves={pokemon.moves}
            types={pokemon.types}
            abilities={abilities}
        />
    )
}
