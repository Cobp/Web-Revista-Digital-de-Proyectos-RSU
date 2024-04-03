import { Slider } from '../../../components'
import './textoModule.css'

const texto = () => {
    return (
        <div className='section_inicio_principal'>
            <article>
                <h1 className='titulo'>Responsabilidad Social Universitaria (RSU)</h1>
                <p className='description'>
                La Responsabilidad Social Universitaria va más allá de cumplir requisitos académicos. Proporciona oportunidades para que los estudiantes adquieran experiencia práctica en diversas áreas, fomentando valores éticos y el compromiso con la comunidad.
                </p>
            </article>
            <div className="slider_text">
                <Slider/>
            </div>
        </div>
    )
}

export default texto
