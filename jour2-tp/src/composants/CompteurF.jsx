import {useState, useEffect} from "react";

export function CompteurF(){
    const [nb , setNb] = useState(1)
    const [autre , setAutre] = useState(1);

    // componentDidMount()
    useEffect(() => {
        console.log("le composant est monté dans le DOM")
        // componentWillUnmount()
        return () => {
            console.log("le composant est supprimé du DOM")
        }
    } , [])

    // attention l'ordre dans lequel vous écrivez vos useEffet peut avoir un impact 
    // componentDidUpdate() 
     useEffect(() => {
        console.log("nb vient d'être modifié")
    }, [nb])
   

    return <div className="my-4">
    <h2>Cycle de vie des composants avec useEffect</h2>
    <button onClick={() => setNb(nb + 1)} className="btn btn-outline-warning me-2">Augmenter</button>
    <span>{nb}</span>
    <button onClick={() => setAutre(autre + 1)} className="btn btn-outline-dark me-2">Augmenter autre</button>
    <span>{autre}</span>
</div>
}