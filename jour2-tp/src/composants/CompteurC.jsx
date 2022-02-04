import { Component  } from "react";

export class CompteurC extends Component{
    state = {
        nb : 1,
        interval : null
    }

    // 13h40 !!!! bon appétit !!!
    constructor(){
        super();
        console.log("le composant CompteurC est créé / mais pas dans le DOM")
    }

    // https://fr.reactjs.org/docs/react-component.html#componentdidmount
    // des Questions ??

    componentDidMount(){
        console.log("le composant vient d'être ajouté dans le DOM");
        // cette fonction est exécuté 1 seule fois lorsque le composant est insérer dans le DOM 
        // action fetch() récupérer des données api => mettre à jour le state du composant
        this.interval = setInterval( () => {
            this.setState(this.setState({ 
                nb : this.state.nb + 1 
            }))
        }, 1000)
    }
    componentDidUpdate(){
        console.log("le composant vient d'être modifié (props / state)")
        // cette fonction est lancée à chaque fois 
        // idéal pour lancer la modification d'un autre composant qui aurait besoin d'etre mis à jour
    }
    componentWillUnmount(){
        console.log("le composant vient d'être supprimé du DOM");
        // nettoyage
        clearInterval(this.interval); 
    }

    augmenter = () => {
        this.setState({ 
            nb : this.state.nb + 1 
        })
    }
    render(){
        const {augmenter , state} = this ; 
        return <div className="my-4">
            <h2>Cycle de vie des composants</h2>
            <button onClick={augmenter} className="btn btn-success me-2">Augmenter</button>
            <span>{state.nb}</span>
        </div>
    }
}