import { Fragment } from "react";

export const Condition = () => {
    const data = ["lundi"];

    function afficher (){
        if(data.length == 0) return <p>aucune donnée dans la base</p>
        return (
            <ul>
                { data.map( (el, i) => <li key={i}>{el}</li> ) }
            </ul>
        )
    }
    return (
        <Fragment>
            <h2>Première manière de faire un if dans un composant</h2>
            { afficher () }
            <hr />
            <h2>Deuxième manière de faire un if dans un composant</h2>
            { data.length == 0 && <p>aucune donnée dans la base</p> }
            { data.length > 0 && <ul>
                { data.map( (el, i) => <li key={i}>{el}</li> ) }
            </ul>}
            <hr />
        </Fragment>
    )
}