import './App.css';
import Premier from "./composants/Premier" ;
import { Deuxieme } from "./composants/Deuxieme" ;
import Troisieme , {AutreComposant} from './composants/Troisieme';
import { Quatrieme } from './composants/Quatrieme';
import { Boucle } from './composants/Boucle';
import { Exo1 } from './composants/Exo1';
import { Condition } from './composants/Condition';
import { Exo2 } from './composants/Exo2';
import { Action } from './composants/Action';
import { Exo3 } from './composants/Exo3';
import { StateF } from './composants/StateF';
import { StateC } from './composants/StateC';
import { StateF2 } from './composants/StateF2';


function App() {
  return  <>
    <StateF2 />
    <StateC />
    <StateF />
    <Exo3 />
    <Action />
    <Exo2 />
    <Condition />
    <Exo1 />
    <Premier /> 
    <Deuxieme />
    <Troisieme />
    <AutreComposant />
    <Quatrieme />
    <Boucle />
  </>
}

export default App;
