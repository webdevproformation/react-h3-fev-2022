import { Fragment , useState } from "react";

export const Exo4 = () => {
    const [show , setShow] = useState(false);
    const [etudiants] = useState([
        {id : 1 , nom : "Mario" , age : 20 },
        {id : 2 , nom : "Luigi" , age : 25 },
        {id : 3 , nom : "Peach" , age : 18 },
    ]);

    return <Fragment>
        <button onClick={() => setShow(!show)}>Action Exo </button>
        { show && <ul>{
            etudiants.map((etudiant , index) => <li key={index}>{ etudiant.nom + " - " + etudiant.age }</li> )
                }
            </ul>  }
        <hr />
    </Fragment>
}