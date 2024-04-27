import React from 'react'

const TabProyects = ({ loading, data }) => {
    return (
        <div className='container-card-proyects'>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                data.map(item => (
                    <div key={item._id} className='card-proyect'>
                        {item._id}
                        <p>{item.ProyectCode}</p>
                    </div>
                ))
            )}
        </div>
    )
}

export default TabProyects
