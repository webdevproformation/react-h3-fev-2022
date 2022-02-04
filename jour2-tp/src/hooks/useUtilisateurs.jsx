import { useEffect, useState } from "react"

// custom hook 

export const useUtilisateur = () => {
    const [utilisateurs, setUtilisateurs] = useState([])

    useEffect( async () => {
        const req = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await req.json();
        setUtilisateurs(users)
    } , [])

    return {utilisateurs , setUtilisateurs} ; 
}
