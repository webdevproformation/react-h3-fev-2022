import { Fragment } from "react"

export function Action (){

    function afficherAlert(){ // fonction sans paramètres
        alert("j'ai cliqué ")
    }

    function afficherDansConsole(text){
        console.log(text)
    }

    return (
        <Fragment>
            <button onClick={afficherAlert}>Action 1</button>
            <button onClick={() => { afficherAlert() }}>Action 1 prim</button>
            <button onClick={() => { afficherDansConsole("une valeur") }}>Action 2</button>
        </Fragment>
    )
        
}