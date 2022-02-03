import React from "react";

export function Exo1(){
    const data = [
        { id : 1 , titre : "Article1" , dt_creation : new Date() },
        { id : 1 , titre : "Article2" , dt_creation : new Date() },
    ];

    function getDate(dt){
        return dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear()
    }
    // janvier => getMonth() => 0
    // decembre => getMonth() => 11
    // 03/02/2022

    return <React.Fragment>
    {data.map((article , index) => {
        const {titre , id , dt_creation } = article ; // déstructuration article qui est { id : 1 , titre : "Article1" , dt_creation : new Date() }
        return <article key={index}> 
        <h2>{ titre }</h2>
        <time>{ getDate(dt_creation) }</time>
    </article>
    }
    )}
    </React.Fragment>
}
// 13h30 