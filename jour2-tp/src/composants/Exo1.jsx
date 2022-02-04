import { useUtilisateur } from "../hooks/useUtilisateurs"

export const Exo1 = () => {
   
    const { utilisateurs , setUtilisateurs } = useUtilisateur(); 

    const deleteUserV1 = (id) => {
        const cloneUsers = [...utilisateurs];
        const userAsupprimer = cloneUsers.find( user => user.id === id );
        const index = cloneUsers.indexOf(userAsupprimer);
        cloneUsers.splice(index , 1);
        setUtilisateurs(cloneUsers); 
    }

    const deleteUser = (id) => {
       const cloneUsers = utilisateurs.filter ( user => user.id != id )
       setUtilisateurs(cloneUsers);
    }

    return <div className="row">
        {utilisateurs.map((user, index) => <article className="col-2 my-3" key={index} >
            <h2 className="h5">{user.name}</h2>
            <p>{user.phone}</p>
            <button className="btn btn-outline-dark" onClick={ () => deleteUser(user.id)}>delete</button>
        </article>)}
    </div>
} 