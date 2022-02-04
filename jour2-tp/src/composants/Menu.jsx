import { useState } from "react"
import { Link } from "react-router-dom"

export const Menu = ( props ) =>  {
    const [titre] = useState("TP jour2")

    return <nav className="navbar navbar-expand navbar-dark bg-warning px-3">
        <span className="navbar-brand">{ titre } 
            <small className="ms-2">{ props.sousTitre }</small>
        </span>
        <ul className="navbar-nav">
        <li className="nav-item">
                <Link to="/exo1" className="nav-link">exo 1</Link>
            </li>
            <li className="nav-item">
                <Link to="/vie" className="nav-link">Cycle de vie</Link>
            </li>
            <li className="nav-item">
                <Link to="/articles" className="nav-link">article</Link>
            </li>
            <li className="nav-item">
                <Link to="/galerie" className="nav-link">galerie</Link>
            </li>
        </ul>
        <span className="ms-auto">
            {props.date}
        </span>
    </nav>
}

Menu.defaultProps = {
    date : (new Date()).getFullYear()
}
