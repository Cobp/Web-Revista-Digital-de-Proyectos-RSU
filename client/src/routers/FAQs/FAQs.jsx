import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './FAQsModule.css';

const CollapsibleTimeline = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const icon = {
        hidden: {
            opacity: 0,
            pathLength: 0
        },
        visible: {
            opacity: 1,
            pathLength: 1
        }
    }
    const Datos = [
        {
            pregunta: '¿Qué son las horas RSU?',
            respuesta: 'La Responsabilidad Social Universitaria más allá de ser solamente horas para cumplir con el objetivo de graduarse de cualquier carrera de la UEB, es también una puerta abierta a un amplio abanico de oportunidades para que los estudiantes de diferentes carreras puedan tener práctica y puedan experimentar en distintas áreas inimaginables.'
        },
        {
            pregunta: '¿A quién debo contactar o dónde debo dirigirme para participar?',
            respuesta: 'Respuesta 2'
        },
        {
            pregunta: '¿Hay oportunidades específicas para mi área de estudio?',
            respuesta: 'Respuesta 3'
        },
        {
            pregunta: '¿Puedo hacer alguna actividad que no esté dentro de mi área de estudio o carrera?',
            respuesta: 'Respuesta 4'
        },
        {
            pregunta: '¿Se evalúa? ¿Cómo?',
            respuesta: 'Respuesta 5'
        },
        {
            pregunta: '¿Cómo puedo elegir la más adecuada para mí?',
            respuesta: 'Respuesta 6'
        },
        {
            pregunta: '¿Puedo proponer un proyecto propio?',
            respuesta: 'Respuesta 7'
        },
        {
            pregunta: '¿Hay oportunidades de seguimiento o continuidad en proyectos a largo plazo?',
            respuesta: 'Respuesta 8'
        }
    ];

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setOpenIndex(0);
        }, 1500);

        return () => clearTimeout(timeoutId);
    }, []);

    const toggleCollapse = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="timeline">
            <h1>Preguntas Frecuentes RSU</h1>
            {Datos.map((item, index) => (
                <div className={`timeline__item ${openIndex === index ? 'active' : ''}`}
                    key={index}>
                    <div className="timeline__item-header">
                        <button
                            className="timeline__arrow"
                            type="button"
                            onClick={() => toggleCollapse(index)}>
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                                <motion.path
                                    d="m9 18 6-6-6-6"
                                    variants={icon}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{
                                        delay: 1.2
                                    }} />
                            </svg>
                        </button>
                        <span className="timeline__dot"></span>
                        <motion.span className="timeline__meta"
                            initial={{ x: 180, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: .1 * index,
                                type: "spring",
                                stiffness: 200,
                                damping: 20
                            }}
                            onClick={() => toggleCollapse(index)}>
                            {item.pregunta}
                        </motion.span>
                    </div>
                    <motion.div className={openIndex === index ? 'timeline__item-body--expanded' : 'timeline__item-body'}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}>
                        <p className="timeline__item-p">
                            {item.respuesta}
                        </p>
                    </motion.div>
                </div>
            ))}
        </div>
    );
};

export default CollapsibleTimeline;
