import { DropdownMenu } from "../../../../components";
import { useProyect } from "../../../../contexts/ProyectsContext";
import "./cardTabProyect.Module.css";

export const CardTabProyect = ({ items }) => {
  const { deleteProyect, updateProyect } = useProyect();
  const codeProyect = items.ProyectCode;

  return (
    <div className="card-proyect">
      <p className="code-proyect">
        {new Date(items.updatedAt).toLocaleDateString()}
      </p>
      <picture className="image_container">
        <img
          src="https://img.freepik.com/free-photo/forest-with-trees-close-up_23-2148910463.jpg?t=st=1714748891~exp=1714752491~hmac=63eadbca75462d7b0c1199c0bb3f9978607358264ea12cfbfde2d9d3598d7d17&w=1060"
          alt=""
        />
        <span></span>
      </picture>
      <div className="main_content_cards">
        <div className="D-aling Just-SpaceB">
          <p className="title_card">{items.ProyectName}</p>
          <DropdownMenu>
            <p className="code">
              Codigo: <span>{codeProyect}</span>
            </p>
            <div className="separator"></div>
            <div className="options-menu">
              <button
                className="btn"
                type="button"
                onClick={() => {
                  deleteProyect(items._id);
                }}
              >
                Eliminar
              </button>
              <button
                className="btn"
                type="button"
                onClick={() => {
                  updateProyect(items._id, items);
                }}
              >
                Editar
              </button>
            </div>
          </DropdownMenu>
        </div>
        <p className="description_card">{items.ProjectDescription}</p>
      </div>
    </div>
  );
};
