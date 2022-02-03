import { Fragment , useState } from "react";

export const StateF3 = () => {

    // vous pouvez mettre autant de useState que vous voulez dans un composant Fonctionnel
    // séparer les deux valeurs dans deux useState différents
    const [a , setA] = useState(1)
    const [ jours ] = useState(["lundi", "mardi" , "mercredi"])

    return (
        <Fragment>
            <button onClick={() => setA(a + 1)} >Action + 1</button>
            <p>{a}</p>
            <ul>
                {jours.map((jour , index) => <li key={index}>{jour}</li>)}
            </ul>
        </Fragment>
    )
}