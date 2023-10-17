
function NavBar({pokemonIndex, setPokemonIndex, pokemonLength}){
    
    function pokeNext() {
		setPokemonIndex(pokemonIndex + 1);
	}

    const pokePrev = () => {
		setPokemonIndex(pokemonIndex - 1);
	};

	return (
        <div>
		    {pokemonIndex > 0 ? (<button onClick={pokePrev}>Précédent</button>) : ("")}
        {pokemonIndex < pokemonLength ? (<button onClick={pokeNext}>Suivant</button>) : ("")}
        </div>
        );
}

export default NavBar