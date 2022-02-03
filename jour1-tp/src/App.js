import './App.css';
import Premier from "./composants/Premier" ;
import { Deuxieme } from "./composants/Deuxieme" ;
import Troisieme , {AutreComposant} from './composants/Troisieme';
import { Quatrieme } from './composants/Quatrieme';
import { Boucle } from './composants/Boucle';


function App() {
  return  <>
    <Premier /> 
    <Deuxieme />
    <Troisieme />
    <AutreComposant />
    <Quatrieme />
    <Boucle />
  </>
}

export default App;
