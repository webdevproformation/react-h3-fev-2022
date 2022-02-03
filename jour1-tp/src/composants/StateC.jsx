import { Component , Fragment } from "react";

export class StateC extends Component{

    /* state = {
        a : 1
    } */

    constructor(){
        super();
        this.state = {
            a : 1,
            jours : ["lundi", "mardi" , "mercredi"]
        }
    }

    augmenter1(){ // méthode de class
        this.setState({ a : this.state.a + 1 })
        // setState(modifier la valeur d'une propriété du state )
        // et les autres valeurs vous êtes conservées
    }

    augmenter2 = () => { // propriété qui stocke une fonction fléchée
        this.setState({ a : this.state.a + 1 })
    }

    render = () => {
        return (
            <Fragment>
                <button onClick={this.augmenter1.bind(this)} >Augmenter</button>
                <button onClick={this.augmenter2} >Augmenter</button>
                <button onClick={() => this.setState({ a : this.state.a + 1 }) } >Augmenter</button>
                <p>{ this.state.a }</p>

                <ul>
                    {this.state.jours.map( (jour , index) => <li key={index}>{jour}</li> )}
                </ul>
            </Fragment>
        )
    }

}