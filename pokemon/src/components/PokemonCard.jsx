

function PokemonCard(props){
   
    const {name, imgScr} = props.pokemon
    console.log(props);
    return (  
        <figure>
           {imgScr ? <img src={imgScr} alt={name}/>   : <h1>???</h1>}
            <figcaption> {name} </figcaption>
        </figure>        
    )
     
}
 

    export default PokemonCard 