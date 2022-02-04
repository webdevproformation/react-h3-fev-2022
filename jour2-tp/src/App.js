import logo from './logo.svg';
import './App.css';
import { Menu } from './composants/Menu';
import { Articles } from './composants/Articles';
import { Galerie } from './composants/Galerie';

function App() {
  return (
    <div className="container">
      <Menu sousTitre="H3 Hitema" />{/** Menu({ sousTitre : "H3 Hitema"}) */}
      <Articles />
      <Galerie />
    </div>
  );
}

export default App;
