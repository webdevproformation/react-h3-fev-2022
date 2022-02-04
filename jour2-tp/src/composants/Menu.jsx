import { useState } from "react"

export const Menu = ( props ) =>  {
    const [titre] = useState("TP jour2")

    return <nav className="navbar navbar-expand navbar-dark bg-warning px-3">
        <span className="navbar-brand">{ titre } 
            <small className="ms-2">{ props.sousTitre }</small>
        </span>
        <span className="ms-auto">
            {props.date}
        </span>
    </nav>
}

Menu.defaultProps = {
    date : (new Date()).getFullYear()
}
