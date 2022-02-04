import { useState } from "react"

export const CompteurState = () => {

    const [nb, setNb] = useState({nom : "compteur" , nb : 0})
    const modif = () => {
        // setNb(nb + 2)
       /*  setNb(nb + 1);
        setNb(nb + 1); */
        setNb( function( precValeur ){ // copie du state précédent
            //return {...precValeur , nb:precValeur.nb + 1}
            return Object.assign({}, precValeur , {nb:precValeur.nb + 2})
        })
        setNb( function( precValeur ){
            return {...precValeur , nb:precValeur.nb + 10}
        })
    }
    return <p onClick={ modif }>{nb.nb}</p>
}


