import { useProyect } from '../../../contexts/ProyectsContext'
import './TabProyects.Module.css'

const TabProyects = ({ proyects }) => {

    const { deleteProyect } = useProyect()

    return (
        <div className='container-card-proyects'>
            {proyects.map((items) => (
                <div className='card-proyect' key={items._id}>
                    <p>{items.ProyectCode}</p>
                    <p>{items.ProyectName}</p>
                    <p>{items.ProjectDescription}</p>
                    <p>{new Date(items.updatedAt).toLocaleDateString()}</p>
                    <button onClick={() => {
                        deleteProyect(items._id)
                    }}>Borrar</button>
                </div>
            ))}
        </div>
    )
}

export default TabProyects
