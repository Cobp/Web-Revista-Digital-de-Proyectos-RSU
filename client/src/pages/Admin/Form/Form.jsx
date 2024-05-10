import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useProyect } from "../../../contexts/ProyectsContext";
import { facultadesCarreras, FunctionUEB } from "./verifyForm";
import { IconoMinus, Plus, IconoX } from "../../../assets";
import { Alert } from "../../../components";
import { InputFile } from "./components";
import "./Form.Module.css";

const Form = () => {
  const [facultadSeleccionada, setFacultadSeleccionada] = useState("");
  const [carreras, setCarreras] = useState([]);
  const [image, setImage] = useState(null);
  const [nameImage, setNameImage] = useState(null);
  const [yearStarting, setYearStarting] = useState(2019);
  const [yearEnding, setYearEnding] = useState(2024);
  const [code, setCode] = useState();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { proyects, getProyect, createProyect, updatePoryect } = useProyect();
  const params = useParams();
  var EndCode = proyects[proyects.length - 1].ProyectCode + 1;

  const facultadOnChange = (e) => {
    setFacultadSeleccionada(e.target.value);
    setCarreras(facultadesCarreras[e.target.value] || []);
  };

  useEffect(() => {
    async function loadProyect() {
      if (params.id) {
        const proyect = await getProyect(params.id);
        setValue("ProyectCode", proyect.proyectCode);
      }
    }
    setCode(EndCode);
    loadProyect();
  }, [setCode, setValue, EndCode, getProyect]);

  const onSubmit = handleSubmit((proyect) => {
    if (params.id) {
      updatePoryect(params.id, proyect);
    } else {
      createProyect(proyect);
    }
  });

  return (
    <form onSubmit={onSubmit} className="Form-new-proyect">
      <div>
        <InputFile
          image={image}
          setImage={setImage}
          nameImage={nameImage}
          setNameImage={setNameImage}
        />
      </div>
      <div className="form-inputs-data">
        <div className="D-aling Just-SpaceB">
          <div>
            <p className="title-form">Codigo del proyecto:</p>
            <label
              className={`label-form-proyects number ${
                errors.ProyectCode && "error"
              }`}
            >
              <input
                type="number"
                placeholder="Codigo del Proyecto"
                value={code}
                {...register("ProyectCode", { required: true })}
              />
              <div className="btn-input-number">
                <button
                  type="button"
                  className="btn-input"
                  onClick={() => setCode(code - 1)}
                >
                  <IconoMinus />
                </button>
                <button
                  type="button"
                  className="btn-input"
                  onClick={() => setCode(code + 1)}
                >
                  <Plus />
                </button>
                <button
                  type="button"
                  className="btn-input"
                  onClick={() => setCode(0)}
                >
                  <IconoX />
                </button>
              </div>
              {errors.ProyectCode && <Alert size="small" severity="warning" />}
            </label>
          </div>
          <div className="D-aling G-1">
            <div>
              <p className="title-form">Año de inicio:</p>
              <label
              className={`label-form-proyects number ${
                errors.StartingSemester && "error"
              }`}
            >
              <input
                type="number"
                placeholder="Seleccionar"
                value={yearStarting}
                {...register("StartingSemester", { required: true })}
              />
              <div className="btn-input-number">
                <button
                  type="button"
                  className="btn-input"
                  onClick={() => setYearStarting(yearStarting - 1)}
                >
                  <IconoMinus />
                </button>
                <button
                  type="button"
                  className="btn-input"
                  onClick={() => setYearStarting(yearStarting + 1)}
                >
                  <Plus />
                </button>
              </div>
              {errors.StartingSemester && <Alert size="small" severity="warning" />}
            </label>
            </div>
            <div>
              <p className="title-form">Año de finalización:</p>
              <label
              for="EndingSemester"
              className={`label-form-proyects number ${
                errors.EndingSemester && "error"
              }`}
            >
              <input
                id="EndingSemester"
                type="number"
                placeholder="Seleccionar"
                value={yearEnding}
                {...register("EndingSemester", { required: true })}
              />
              <div className="btn-input-number">
                <button
                  type="button"
                  className="btn-input"
                  onClick={() => setYearEnding(yearEnding - 1)}
                >
                  <IconoMinus />
                </button>
                <button
                  type="button"
                  className="btn-input"
                  onClick={() => setYearEnding(yearEnding + 1)}
                >
                  <Plus />
                </button>
              </div>
              {errors.EndingSemester && <Alert size="small" severity="warning" />}
            </label>
            </div>
          </div>
        </div>
        <label
          className={`label-form-proyects text ${errors.ProyectName && "error"}`}
        >
          <input
            type="text"
            placeholder="Nombre del Proyecto"
            {...register("ProyectName", { required: true })}
          />
          {errors.ProyectName && <Alert size="small" severity="warning" />}
        </label>
        <textarea
          rows="5"
          placeholder="Descripción"
          {...register("ProjectDescription")}
        />
        <div className="D-aling Just-SpaceB">
          <div>
            <p className="title-form">Función Univeristaria</p>
            <label
              className={`label-form-proyects text ${
                errors.UniversityFunction && "error"
              }`}
            >
              <select {...register("UniversityFunction", { required: true })}>
                <option value="">Seleccionar...</option>
                {FunctionUEB.map((functionUEB, index) => (
                  <option key={index} value={functionUEB}>
                    {functionUEB}
                  </option>
                ))}
              </select>
              {errors.UniversityFunction && <Alert size="small" severity="warning" />}
            </label>
          </div>
          <div>
            <p className="title-form">Facultad a cargo:</p>
            <label
              className={`label-form-proyects text ${
                errors.FacultyInCharge && "error"
              }`}
            >
              <select
                {...register("FacultyInCharge", { required: true })}
                onChange={facultadOnChange}
              >
                <option value="">Seleccionar...</option>
                {Object.keys(facultadesCarreras).map((facultad, index) => (
                  <option key={index} value={facultad}>
                    {facultad}
                  </option>
                ))}
              </select>
              {errors.FacultyInCharge && <Alert size="small" severity="warning" />}
            </label>
          </div>
          <div>
            <p className="title-form">Carrera a cargo:</p>
            <label
              className={`label-form-proyects text ${
                errors.ResponsibleCareer && "error"
              }`}
            >
              <select
                {...register("ResponsibleCareer", { required: true })}
                disabled={!facultadSeleccionada}
              >
                <option value="">Seleccionar...</option>
                {carreras.map((ingrediente, index) => (
                  <option key={index} value={ingrediente}>
                    {ingrediente}
                  </option>
                ))}
              </select>
              {errors.ResponsibleCareer && <Alert size="small" severity="warning" />}
            </label>
          </div>
        </div>
        <label
          className={`label-form-proyects text ${
            errors.ResponsibleCoordinator && "error"
          }`}
        >
          <input
            type="text"
            placeholder="Coordinador/a Responsable:"
            {...register("ResponsibleCoordinator", { required: true })}
          />
          {errors.ResponsibleCoordinator && <Alert size="small" severity="warning" />}
        </label>
        <label
          className={`label-form-proyects text ${
            errors.InternalResponsibleData && "error"
          }`}
        >
          <input
            type="text"
            placeholder="Datos responsable interno:"
            {...register("InternalResponsibleData", { required: true })}
          />
          {errors.InternalResponsibleData && <Alert size="small" severity="warning" />}
        </label>
        <div className="D-aling G-2">
          <label className="label-form-proyects text">
            <input
              type="text"
              placeholder="Entidad externa vinculada:"
              {...register("RelatedExternalEntity")}
            />
          </label>
          <label className="label-form-proyects text">
            <input
              type="text"
              placeholder="Datos entidad externa:"
              {...register("ExternalEntityData")}
            />
          </label>
        </div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
};

export default Form;
