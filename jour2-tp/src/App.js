import logo from './logo.svg';
import './App.css';
import { Menu } from './composants/Menu';
import { Articles } from './composants/Articles';
import { Galerie } from './composants/Galerie';
import { CompteurC } from './composants/CompteurC';
import { useState } from 'react';
import { CompteurF } from './composants/CompteurF';


function App() {

  const [show , setShow] = useState(false)
  const [show2 , setShow2] = useState(false)

  return (
    <div className="container">
      <Menu sousTitre="H3 Hitema" />{/** Menu({ sousTitre : "H3 Hitema"}) */}
      {show2 && <CompteurF />}
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
