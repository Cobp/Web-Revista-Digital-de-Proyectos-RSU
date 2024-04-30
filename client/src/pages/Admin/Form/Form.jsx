import { useProyect } from '../../../contexts/ProyectsContext';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

const Form = () => {
    const { register, handleSubmit, setValue } = useForm();
    const { 
        getProyect,
        createProyect,
        updatePoryect,
    } = useProyect();
    const params = useParams();

    useEffect((() =>{
        async function loadProyect() {
            if (params.id){
                const proyect = await getProyect(params.id);
                setValue('ProyectCode', proyect.proyectCode);
            }
        }
        loadProyect();
    }))

    const onSubmit = handleSubmit((proyect) => {
        if (params.id){
            updatePoryect(params.id, proyect)
        }else{
            createProyect(proyect);
        }
    })

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Código Proyecto:</label>
                <input type="number" required placeholder="Codigo del Proyecto" autoFocus {...register('ProyectCode')}  />
            </div>
            {/* <div>
                <input type='file' {...register('ImgProyect')}  />
            </div> */}
            <div>
                <label>Nombre Proyecto:</label>
                <input type="text" required placeholder="Nombre del Proyecto" {...register('ProyectName')}  />
            </div>
            <div>
                <label>Descripción:</label>
                <textarea rows='5' placeholder="Descripción" {...register('ProjectDescription')}  />
            </div>
            <div>
                <label>Semestre de Inicio:</label>
                <input type="number" required placeholder="Seleccionar" {...register('StartingSemester')}  />
            </div>
            <div>
                <label>Semestre de Finalización:</label>
                <input type="number" required placeholder="Seleccionar" {...register('EndingSemester')}  />
            </div>
            <div>
                <label>CFunción universitaria:</label>
                <input type="text" required placeholder="Codigo del Proyecto" {...register('UniversityFunction')}  />
            </div>
            <div>
                <label>Carrera Responsable:</label>
                <input type="text" required placeholder="Sigla" {...register('ResponsibleCareer')}  />
            </div>
            <div>
                <label>Facultad Responsable:</label>
                <input type="text" required placeholder="Facultad..." {...register('FacultyInCharge')}  />
            </div>
            <div>
                <label>Coordinador/a Responsable:</label>
                <input type="text" required placeholder="Codigo del Proyecto" {...register('ResponsibleCoordinator')}  />
            </div>
            <div>
                <label>Datos responsable interno:</label>
                <input type="text" required placeholder="Codigo del Proyecto" {...register('InternalResponsibleData')}  />
            </div>
            <div>
                <label>Entidad externa vinculada:</label>
                <input type="text" placeholder="Codigo del Proyecto" {...register('RelatedExternalEntity')}  />
            </div>
            <div>
                <label>Datos entidad externa:</label>
                <input type="text" placeholder="Codigo del Proyecto" {...register('ExternalEntityData')}  />
            </div>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Form
