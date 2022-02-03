import './App.css';
import Premier from "./composants/Premier" ;
import { Deuxieme } from "./composants/Deuxieme" ;
import Troisieme , {AutreComposant} from './composants/Troisieme';

function App() {
  return  <>
    <Premier /> 
    <Deuxieme />
    <Troisieme />
    <AutreComposant />
  </>
}

export default App;
