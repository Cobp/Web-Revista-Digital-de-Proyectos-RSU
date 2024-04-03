import { NavbarWhite } from '../../../components/index.js'
import { Link } from 'react-router-dom'
import { Buttons } from './buttonsmain.jsx'
import './screenMainModule.css'

const preguntas = [
    { pregunta1: '¿Sabes lo que son las Horas RSU?' },
    { pregunta1: '¿Aún no sabes qué proyecto elegir para iniciar?' },
    { pregunta1: '¿Todavía tienes Horas Pendientes y no sabes cómo terminarlas?' },
    { pregunta1: <p>Mira las <Link to={'/FAQ'} >Preguntas Frecuentes</Link> más respondidas.</p>}
]

const screenMain = () => {
    
    return (
        <section className='main_container' id='Main'>
            <NavbarWhite/>
            <div className='content_main'>
                <h1 className='titulo_principal'>
                    Catálogo de Proyectos RSU
                </h1>
                <ul className='primary_content'>
                {preguntas.map((item, index) => (
                    <li key={index}>
                        {item.pregunta1}
                    </li>
                ))}
                </ul>
                <p className='secondary_content'>
                    ¡Descubre, aprende y construye tu camino hacia el éxito profesional!
                </p>
                <Buttons />
            </div>
        </section>
    )
}

export default screenMain
