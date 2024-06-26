import { useEffect, useState, useRef } from "react";
import { Plus } from "../../assets/index.js";
import { NavbarRed } from "../../components";
import { useProyect } from "../../contexts/ProyectsContext.jsx";
import TabProyects from "./TabProyects/TabProyects.jsx";
import Form from "./Form/Form.jsx";
import "./Admin.Module.css";

function AdminMode() {
  const [openFomr, setOpenForm] = useState(false);
  const nombre = "Fabio Cobb";
  const contentRef = useRef(null);

  const { proyects, getProyects } = useProyect();

  useEffect(() => {
    getProyects();

    const handleKeyPress = (e) => {
      if (e.keyCode === 27) {
        setOpenForm(false);
      }
    };
    const handleClickOutside = (e) => {
      if (contentRef.current && !contentRef.current.contains(e.target)) {
        setOpenForm(false);
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpenForm]);

  const buttonAdd = () => {
    return (
      <button
        type="button"
        className="button-add"
        onClick={() => setOpenForm(!openFomr)}
      >
        <span><Plus/> Nuevo</span>
      </button>
    );
  };

  return (
    <div className="Main">
      <NavbarRed />
      <div className="navbar-administration">
        <div>
          <h1>Administración</h1>
          <p>Bienvenido {nombre} al panel de administración</p>
        </div>
        {buttonAdd()}
      </div>
      <TabProyects proyects={proyects} />
      {openFomr && (
        <div className="screen-form">
          <div className="screen-form-data" ref={contentRef}>
            <Form />
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminMode;
