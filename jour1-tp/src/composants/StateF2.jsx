import { Fragment , useState } from "react";

export const StateF2 = () => {
    const [state , setState] = useState({a : 1 , jours : ["lundi", "mardi" , "mercredi"]})

    // {a : 2, jours : ["lundi", "mardi" , "mercredi"]}
    // {a : 2}

    function modififA(){
        // Object.assign()
        // setState( Object.assign({} , state , { a : state.a + 1 }) )
        // spread operator ...obj
        setState( { ...state ,  a : state.a + 1  } )
    } 
    // rdv 15h47 bon café !!!!!!!!!!!!

    return <Fragment>
        <button onClick={() => modififA()}> modifier a dans le state</button>
        <p>{state.a}</p>
        {state.jours.map((jour, index) => <p key={index}>{jour}</p>)}
    </Fragment>
}