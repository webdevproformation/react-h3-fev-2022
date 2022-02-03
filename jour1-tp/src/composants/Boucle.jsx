export function Boucle(){
    const jours = ["lundi", "mardi" , "mercredi"];
    const user = {
        login : "azerty@yahoo.fr",
        mdp : "123456"
    }
    return (
        <>
            <h2>récupérer une valeur dans un tableau</h2>
             <ul>
                <li>{ jours[0] }</li> {/** interpolation */}
            </ul>
            <h2>Parcourir un tableau = map() avec fonction anonyme des Array de javascript</h2>
            <ul>
                {/** Warning: Each child in a list should have a unique "key" prop. */}
                { jours.map( function( jour , index ){ 
                    return <li key={index}>{ jour }</li>
                 } ) }
            </ul>
            <h2>Parcourir un tableau = map() avec fonction fléchée des Array de javascript</h2>
            <ul>
                {/** Warning: Each child in a list should have a unique "key" prop. */}
                { jours.map( ( jour , index ) =>  <li key={index}>{ jour }</li> ) }
            </ul>
        </>
    )
}