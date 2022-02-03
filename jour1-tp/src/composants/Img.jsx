import toto from "./fleur.jpg";
import { Fragment } from "react"

export const Img = () => {
    return <Fragment>
        <img src="img/mario.jpg" alt="" width="400px" />
        <img src={toto} alt="" width="400px" />
        </Fragment>
} 