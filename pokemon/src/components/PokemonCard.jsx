import ProTypes from"prop-types";

function PokemonCard(props){
   
    const {name, imgScr} = props.pokemon
    console.log(props);
    return (  
        <figure>
           {imgScr ? <img src={imgScr} alt={name}/>   : <h1>???</h1>}
            <figcaption> {name} </figcaption>
        </figure>        
    )
PokemonCard.prototype={
    pokemon: ProTypes.shape({
     name: ProTypes.string.isRequired,
     imgScr: ProTypes.string,
    }).isRequired,
 }
 
}
 

    export default PokemonCard 