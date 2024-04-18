import { NavbarWhite } from '../../../components'
import { IconoSuccesHistory } from '../../../assets'
import { Link } from 'react-router-dom'
import './screenMainModule.css'

const preguntas = [
    { pregunta1: '¿Sabes lo que son las Horas RSU?' },
    { pregunta1: '¿Aún no sabes qué proyecto elegir para iniciar?' },
    { pregunta1: '¿Todavía tienes Horas Pendientes y no sabes cómo terminarlas?' },
    { pregunta1: <p>¿Buscas respuestas rápidas? Explora nuestras <Link to={'/FAQ'} >Preguntas Frecuentes</Link> para encontrar más información.</p> }
]

const screenMain = () => {

    return (
        <section className='main_container' id='Main'>
            <NavbarWhite />
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
                    ¡ Descubre, aprende y construye tu camino hacia el éxito profesional !
                </p>
                <div className='main_buttons'>
                    <div className='container_btn'>
                        <Link to={'/proyectos-rsu'} className='D-center btn_all_proyects'>
                            <p>Inicia tu Proyecto</p>
                        </Link>
                    </div>
                    <div className='container_btn'>
                        <Link to={''} className='D-center btn_quiz'>
                            <IconoSuccesHistory />
                            <p>Historias de Éxito</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default screenMain
