import { Plus } from "../../assets/index.js";

const card1 = ({ selectedId, setSelectedId }) => {
    return (
        <div className="cards_show_selected">
            <div className="card_show">
                <button onClick={() => setSelectedId(null)}>
                    <Plus />
                </button>
                <img src={selectedId.image} alt="" />
                <h2 className="date name_p">{selectedId.Nombre_Proyecto}</h2>
                <h4 className="date responsible_career">
                    {selectedId.Carrera_Responsable}
                </h4>
                <h3 className="date code_p">{selectedId.Codigo_Proyecto}</h3>
                <h3 className="date responsible_coordinator">
                    {selectedId.CoordResponsable}
                </h3>
                <h3 className="date responsible_date">
                    {selectedId.Datos_responsable_interno}
                </h3>
            </div>
        </div>
    );
};

export default card1;
