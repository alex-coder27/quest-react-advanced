export const loadMorePokemons = async (offSet) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offSet}`)
    const data = await res.json()
    return data
}

export const getPokemons = async (results) => {
    const pokemons = await Promise.all(results.map(async (pokemon) => {
        const res = await fetch(pokemon.url)
        const data = await res.json()
        return data
    }))
    return pokemons
}

export const getAbilities = async (abilities) => {
    const pokeAbilities = await Promise.all(abilities.map(async (index) => {
        const res = await fetch(index.ability.url)
        const data = await res.json()
        return data
    }))
    return pokeAbilities
}