import toto from "./fleur.jpg";
import { Fragment } from "react";
import "./Img.css" ;
import { Toto } from "./Toto";
 

export const Img = () => {
    return <Fragment>
            <img src="img/mario.jpg" alt="" className="img1" />
            <img src={toto} alt="" className="img2" />
            <Toto source="img/mario.jpg" />
            <Toto source="https://via.placeholder.com/200x100" />
            <Toto />
        </Fragment>
} 