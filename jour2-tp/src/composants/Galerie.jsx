import { useState } from "react"
import { Image } from "./Image"
export const Galerie = () => {
    const [images, setImages] = useState([
        {id : 1 , url : "http://via.placeholder.com/200x100?text=1" , titre:"diapo1", status:true},
        {id : 2 , url : "http://via.placeholder.com/200x100?text=2" , titre:"diapo2", status:true},
        {id : 3 , url : "http://via.placeholder.com/200x100?text=3" , titre:"diapo3", status:true},
        {id : 4 , url : "http://via.placeholder.com/200x100?text=4" , titre:"diapo4", status:true},
    ])
    function modif(img){
        const cloneImages = images.map( i => {
            if(i.id === img.id ){
                return {...i , status: !img.status }
            }
            return i
        } )
        setImages(cloneImages);
    }
    return <div className="row mt-3">
        {images.map( (img , index) => <Image key={index} data={img} action={modif} /> )}
    </div>
}