import logo from './logo.svg';
import './App.css';
import { Menu } from './composants/Menu';
import { Articles } from './composants/Articles';
import { Galerie } from './composants/Galerie';
import { CompteurC } from './composants/CompteurC';
import { useState } from 'react';
import { CompteurF } from './composants/CompteurF';
import { CompteurFSuite } from './composants/CompteurFSuite';
import { CompteurState } from './composants/CompteurState';
import { Exo1 } from './composants/Exo1';

function App() {

  const [show , setShow] = useState(false)
  const [show2 , setShow2] = useState(true)

  return (
    <div className="container">
      <Menu sousTitre="H3 Hitema" />{/** Menu({ sousTitre : "H3 Hitema"}) */}
      <Exo1 />
      <CompteurState />
      {show2 && <CompteurFSuite />}
      {false && <CompteurF />}
      <button onClick={() => setShow2(!show2) }>suppr</button>
      <hr />
      {show && <CompteurC />}
      <button onClick={() => setShow(!show) }>suppr</button>
      <Articles />
      <Galerie />
    </div>
  );
}

export default App;
