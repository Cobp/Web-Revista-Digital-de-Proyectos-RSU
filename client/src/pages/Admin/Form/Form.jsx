import { useForm } from 'react-hook-form';

const Form = ({ fetchData, DB_URI}) => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (formData) => {
        try {
            const response = await fetch(DB_URI , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Error al enviar los datos del formulario al servidor');
            }
            // Actualizar los datos después de enviar el formulario
            fetchData();
            // Limpiar el formulario después de enviar los datos
            reset();
        } catch (error) {
            console.error('Error al enviar los datos:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Código Proyecto:</label>
                <input type="number" required placeholder="Codigo del Proyecto" {...register('ProyectCode')}  />
            </div>
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
                <input type="text" required placeholder="Seleccionar" {...register('StartingSemester')}  />
            </div>
            <div>
                <label>Semestre de Finalización:</label>
                <input type="text" required placeholder="Seleccionar" {...register('EndingSemester')}  />
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
