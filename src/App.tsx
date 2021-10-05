import Menu from "./components/navbar/Menu";
import Antecedentes from "./components/antecedentes/Antecedentes";
import Detalles from "./components/detalle/Detalle";
import VarGd from "./views/var-gd/VarGd"
import Comercializacion from "./views/comercializacion/Comercializacion"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Switch>
          <Route path='/' exact component = {Antecedentes}/>
          <Route path='/Antecedentes' component = {Antecedentes}/>
          <Route path='/Detalles' component = {Detalles}/>
          <Route path='/VarGd' component = {VarGd}/>
          <Route path='/Comercializacion' component = {Comercializacion}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
