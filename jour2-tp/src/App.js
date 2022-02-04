import logo from './logo.svg';
import './App.css';
import { Menu } from './composants/Menu';
import { Articles } from './composants/Articles';

function App() {
  return (
    <div className="container">
      <Menu sousTitre="H3 Hitema" />{/** Menu({ sousTitre : "H3 Hitema"}) */}
      <Articles />
    </div>
  );
}

export default App;
