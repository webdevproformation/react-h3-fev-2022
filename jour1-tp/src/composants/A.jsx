export const A = ( props ) => { // props = { source:"http", couleur:"rouge", show:"false" }
    if(! props.show) 
    console.log(props)
    return <p></p>
}

// donner une valeur par défaut à une props
// https://www.reactjstutorials.com/react-basics/17/react-default-props
A.defaultProps = {
    show : false
}

// https://www.reactjstutorials.com/react-basics/19/react-prop-types

// rdv 9h00 demain pour la suite !! 


