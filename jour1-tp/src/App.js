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
import { StateF3 } from './composants/StateF3';
import { Exo4 } from './composants/Exo4';
import { Img } from './composants/Img';
import { A } from './composants/A';


function App() {
  return  <>
    <A source="http" couleur="rouge" />
    <div>
      <Img />
    </div> 
    <Exo4 />
    <StateF3 />
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
