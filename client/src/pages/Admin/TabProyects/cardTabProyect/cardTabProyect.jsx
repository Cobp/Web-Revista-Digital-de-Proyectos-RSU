import { IconoFileShredder } from "../../../../assets";
import { Tooltip } from "../../../../components";
import { useProyect } from "../../../../contexts/ProyectsContext";
import "./cardTabProyect.Module.css";

export const CardTabProyect = ({ items }) => {
    const { deleteProyect, updateProyect } = useProyect();

    return (
        <div className="card-proyect">
            <p className="code-proyect">
                {new Date(items.updatedAt).toLocaleDateString()}-{items.ProyectCode}
            </p>
            <picture className="image_container">
                <img
                    src="https://img.freepik.com/free-photo/forest-with-trees-close-up_23-2148910463.jpg?t=st=1714748891~exp=1714752491~hmac=63eadbca75462d7b0c1199c0bb3f9978607358264ea12cfbfde2d9d3598d7d17&w=1060"
                    alt=""
                />
                <span></span>
            </picture>
            <div className="main_content_cards">
                <p className="title_card">{items.ProyectName}</p>
                <div className="D-aling Just-SpaceB">
                    <p className="description_card">{items.ProjectDescription}</p>
                    <div className="bottons-cards-adm">
                        <Tooltip position={"bottom"} label={"Eliminar"}>
                            <button
                                className="btn-tooltip btn-delete"
                                type="button"
                                onClick={() => {
                                    deleteProyect(items._id);
                                }}
                            >
                                <IconoFileShredder />
                            </button>
                        </Tooltip>
                        <button
                            type="button"
                            onClick={() => {
                                updateProyect(items._id, items);
                            }}
                        >
                            Editar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
