import { useState , useEffect } from "react";
import { Article } from "./Article";

export function Articles(){
    const [data , setData] = useState( [
        {id : 1 , titre : "Article 1" , contenu : "lorem isum" , dt_creation : Date.now() , like : 2},
        {id : 2 , titre : "Article 2" , contenu : "lorem isum" , dt_creation : Date.now() , like : 1},
        {id : 3 , titre : "Article 3" , contenu : "lorem isum" , dt_creation : Date.now() , like : 10}
    ] )

    useEffect(function(){
        setData(data);
    }, [data] )

    function augmenter ( idArticle ){ // il est possible d'envoyer des fonctions dans les props 
        const articleAModifier = data.find( d => d.id === idArticle );
        const index = data.indexOf(articleAModifier);
        data[index].like++ ; // modification effectuée
        console.log(data);
        setData(data);
        console.log(data);
        // traitement setData()
    }

    return <div className="row">
        {data.map( (d, index) => <Article key={index} data={d} action={augmenter} /> )}
    </div>
}
