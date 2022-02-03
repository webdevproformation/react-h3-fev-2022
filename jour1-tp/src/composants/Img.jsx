import toto from "./fleur.jpg";
import { Fragment } from "react";
import "./Img.css" ; 

export const Img = () => {
    return <Fragment>
            <img src="img/mario.jpg" alt="" className="img1" />
            <img src={toto} alt="" className="img2" />
        </Fragment>
} 