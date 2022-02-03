// Hook de React => fonction use...
// useState
import { useState, Fragment } from "react";

export const StateF = () => {

  // let a = 1;

  const [ a , setA ] =  useState(1000000000) ; // fonction dans laquelle on va stocker la valeur 
                                 // fonction retourne tableau avec 2 valeurs 
                                 // a => nom de la variable (à utiliser dans la vue)
                                 // fonction qui va permettre de modifier la valeur de la variable a 

    function augmenter(){
        setA(a + 1); // setA(la nouvelle valeur de a)
        // modifier la vue du composant concerné ! 
    }
    
    return <Fragment>
        <button onClick={augmenter}>Augmenter la valeur de a</button>
        <button onClick={() => setA( a - 1 ) }>diminuer la valeur de a</button>
        <p>{a}</p>
    </Fragment>

}