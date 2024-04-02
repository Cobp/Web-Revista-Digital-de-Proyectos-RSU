import { Inicio, PDisponibles, FAQ, HorasRSU, Login } from "./routers";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact Component={Inicio} />
          <Route path="/FAQ" exact Component={FAQ} />
          <Route path="/proyectos-rsu" exact Component={PDisponibles} />
          <Route path="/Reg-horas-rsu" exact Component={HorasRSU} />
          <Route path="/login" exact Component={Login} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
