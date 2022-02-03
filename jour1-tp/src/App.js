import './App.css';
import Premier from "./composants/Premier" ;
import { Deuxieme } from "./composants/Deuxieme" ;
import Troisieme , {AutreComposant} from './composants/Troisieme';
import { Quatrieme } from './composants/Quatrieme';
import { Boucle } from './composants/Boucle';
import { Exo1 } from './composants/Exo1';
import { Condition } from './composants/Condition';
import { Exo2 } from './composants/Exo2';


function App() {
  return  <>
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
