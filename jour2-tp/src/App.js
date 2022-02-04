import logo from './logo.svg';
import './App.css';
import { Menu } from './composants/Menu';
import { Articles } from './composants/Articles';
import { Galerie } from './composants/Galerie';
import { CompteurC } from './composants/CompteurC';
import { useState } from 'react';


function App() {

  const [show , setShow] = useState(true)

  return (
    <div className="container">
      <Menu sousTitre="H3 Hitema" />{/** Menu({ sousTitre : "H3 Hitema"}) */}
      {show && <CompteurC />}
      <button onClick={() => setShow(!show) }>suppr</button>
      <Articles />
      <Galerie />
    </div>
  );
}

export default App;
