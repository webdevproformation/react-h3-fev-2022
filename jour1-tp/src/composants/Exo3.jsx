import {Fragment} from "react";

export function Exo3() {
    const users = [
        { id : 1 , nom : "Alain" , isAdmin : true },
        { id : 2 , nom : "Mario" , isAdmin : false },
    ];

    function getRole(role){
        if(role) return console.log("est admin")
        console.log("n'est pas admin")
    }

    return <Fragment>
        {users.map( ( user, index ) => 
            <ul key={index}>
                <li>{user.nom}</li>
                <li><button onClick={ () => { getRole(user.isAdmin)  } }>Action</button></li>
            </ul>
        )}
    </Fragment>
}