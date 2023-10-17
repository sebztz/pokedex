
function NavBar({setPokemonIndex, pokemonList}){
    
 /*   function pokeNext() {
		setPokemonIndex(pokemonIndex + 1);
	}

    const pokePrev = () => {
		setPokemonIndex(pokemonIndex - 1);
	};
*/
const pressClick = (index) =>{
  setPokemonIndex(index)
}

	return (
        <div>
          {pokemonList.map((pokemon, index)=>(
            <button key={index} onClick={() =>pressClick(index)}>{pokemon.name}</button>
          ))}
        </div>
        );
}
//{pokemonIndex > 0 ? (<button onClick={pokePrev}>Précédent</button>) : ("")}
//{pokemonIndex < pokemonLength ? (<button onClick={pokeNext}>Suivant</button>) : ("")}
export default NavBar