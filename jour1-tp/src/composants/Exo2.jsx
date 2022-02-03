export const Exo2 = () => {
    const users = [
        { id : 1 , nom : "Alain" , isAdmin : true },
        { id : 2 , nom : "Mario" , isAdmin : false },
    ];

    function verif(role){
        if(role) return <li>est le gestionnaire du site</li>
        return <li>n'est pas le gestionnaire du site</li>
    }

    return <>
        {users.map((user, index) => <ul key={index}>
            <li>{user.nom}</li>
            {user.isAdmin && <li>est le gestionnaire du site</li>}
            {!user.isAdmin && <li>n'est pas le gestionnaire du site</li>}
            {verif(user.isAdmin)}
        </ul>)}
    </>
} 