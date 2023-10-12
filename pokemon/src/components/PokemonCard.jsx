import PropTypes from "prop-types";

function PokemonCard({ pokemon }){
    
PokemonCard.propTypes = {
        pokemon: PropTypes.shape({
         name: PropTypes.string.isRequired,
         imgScr: PropTypes.string,
        }).isRequired,
     };
    

    return (  
        <figure>
           {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name}/>   : <h1>???</h1>}
            <figcaption> {pokemon.name} </figcaption>
        </figure>        
    );
        
}
 

    export default PokemonCard 