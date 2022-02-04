import { useState } from "react";
import { Article } from "./Article";

export function Articles(){
    const [data , setData] = useState( [
        {id : 1 , titre : "Article 1" , contenu : "lorem isum" , dt_creation : Date.now() , like : 2},
        {id : 2 , titre : "Article 2" , contenu : "lorem isum" , dt_creation : Date.now() , like : 1},
        {id : 3 , titre : "Article 3" , contenu : "lorem isum" , dt_creation : Date.now() , like : 10}
    ] )

    function augmenterV1 ( idArticle ){ // il est possible d'envoyer des fonctions dans les props 
        // mutabilité des données 
        // 1 "toto" false
        // []
        // data => l'impression de le modifier mais en fait non
        const cloneData = [...data]; // copie 
        const articleAmodifier = data.find( d => d.id === idArticle)
        const index = data.indexOf(articleAmodifier);
        // data[index].like++ // impression de modifier la variable data => pas de modification  
        //erreur 
        cloneData[index].like++ // modifier la valeur d'une copie de data 
        cloneData[index].titre = "titre modifié" ; 
        setData(cloneData);
        // console.log(data); 
    }

    function augmenter(idArticle){
        // const cloneData = data.map() // parcourir le tableau copier la modification dans un nouveau tableau
        const cloneData = data.map(function(d){
            if(d.id === idArticle){
                //return {...d , like : d.like + 1}
                return Object.assign({}, d , {like : d.like + 1})
            }
            return d ;
        })

        setData( cloneData );
    }

    return <div className="row">
        {data.map( (d, index) => <Article key={index} data={d} action={augmenter} /> )}
    </div>
}
