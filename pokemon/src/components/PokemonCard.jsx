const pokemonList = [
    {
        name: "bulbasaur",
        imgScr:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
    },
]

function PokemonCard(){
    let pokemon = pokemonList[0]
    
    return (  
        <figure>
           {pokemon.imgScr ? <img src={pokemon.imgScr} alt={pokemon.name}/>   : <h1>???</h1>}
            <figcaption> {pokemon.name} </figcaption>
        </figure>        
    )
     
}
 

    export default PokemonCard 