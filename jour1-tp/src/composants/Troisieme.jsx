//import React from "react";

const Troisieme = () => {
    return (
        <>
            <h2>troisième</h2>
            <ul>
                <li>element1</li>
                <li>element2</li>
            </ul>
        </>
    )
}
export default Troisieme ; // import Troisieme from "./.../Troisieme"

export const AutreComposant = () => { // import { AutreComposant } from "./.../Troisieme"
    return <p>autre</p>
}

// export Troisieme ; // import { Troisieme } from "./.../Troisieme"

// function Troisieme(){}