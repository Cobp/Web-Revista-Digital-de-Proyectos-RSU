import { Inicio, PDisponibles, FAQ, HorasRSU, Login, Admin } from "./pages";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact Component={Inicio} />
          <Route path="/FAQ" exact Component={FAQ} />
          <Route path="/login" exact Component={Login} />
          <Route path="/mode-administ" exact Component={Admin} />
          <Route path="/Reg-horas-rsu" exact Component={HorasRSU} />
          <Route path="/proyectos-rsu" exact Component={PDisponibles} />
          <Route path="/proyectos-rsu/:id" exact Component={PDisponibles} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
