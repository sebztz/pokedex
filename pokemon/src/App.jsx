import PokemonCard from './components/PokemonCard';
import "./App.css"

const pokemonList = [
  {
      name: "bulbasaur",
      imgScr:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
      name: "mew",
  },
];


function App() {

const pokemon = pokemonList[0]
  return (

      <div>
        <PokemonCard pokemon={pokemon} />
      </div>
     
  )
}

export default App
