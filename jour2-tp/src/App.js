import logo from './logo.svg';
import './App.css';
import { Menu } from './composants/Menu';
import { Articles } from './composants/Articles';
import { Galerie } from './composants/Galerie';
import { CompteurC } from './composants/CompteurC';
import { Fragment, useState } from 'react';
import { CompteurF } from './composants/CompteurF';
import { CompteurFSuite } from './composants/CompteurFSuite';
import { CompteurState } from './composants/CompteurState';
import { Exo1 } from './composants/Exo1';
import { Routes, Route } from "react-router-dom"; 

function App() {

  const [show , setShow] = useState(false)
  const [show2 , setShow2] = useState(true)

  return (
    <div className="container">
      <Menu sousTitre="H3 Hitema" />{/** Menu({ sousTitre : "H3 Hitema"}) */}
      <Routes>
      <Route path="/exo1" element={<Fragment>
        <Exo1 />
        <CompteurState />
        {show2 && <CompteurFSuite />}
        {false && <CompteurF />}
        <button onClick={() => setShow2(!show2) }>suppr</button>
      </Fragment>} />
        <Route path="/vie" element={<Fragment>
              <hr />
          {show && <CompteurC />}
          <button onClick={() => setShow(!show) }>suppr</button>
        </Fragment>} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/galerie" element={<Galerie />} />
      </Routes>
    </div>
  );
}

export default App;
