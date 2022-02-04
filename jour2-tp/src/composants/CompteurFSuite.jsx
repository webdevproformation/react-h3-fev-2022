import { Fragment, useEffect, useState } from "react";

export const CompteurFSuite = () => {

    const [data, setData] = useState([]);

    // lorsqu'il rentre dans le DOM
    useEffect(async () => { 
        const req = await fetch("https://jsonplaceholder.typicode.com/posts")
        const articles = await req.json()
        console.log(articles);
        setData(articles)
    } , []) 
    
    // unmount
    useEffect(() => {
        return () => {
            console.log("unmount")
        }
    }, [])

    return <Fragment></Fragment>

}