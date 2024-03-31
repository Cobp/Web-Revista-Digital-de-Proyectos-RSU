import { useRef } from "react";
import { useInView } from "framer-motion";
import { IconoFAQ, IconoCalendario, IconoComputadora, IconoFolder } from "../../../assets";
import './cardsContainerModule.css';

const ContainerCards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cards = [
    {
      title: "Actualizaciones",
      svg2: <IconoFolder />,
      img: 'https://img.freepik.com/free-photo/close-up-young-man-looking-vinyls-store_23-2148237245.jpg?t=st=1709924555~exp=1709928155~hmac=5ab07205b2d6a13d57cda57cbd8a40086c6477181b167f4ac199de4eb5dbc7f3&w=1060',
      description: "Mantengase al día de los proyectos recientes RSU"
    },
    {
      title: "ACCESIBILIDAD",
      svg2: <IconoComputadora />,
      img: 'https://img.freepik.com/free-photo/business-woman-hand-with-financial-charts-mobile-phone-laptop-table_1232-4863.jpg?t=st=1709924719~exp=1709928319~hmac=c229a256e07e350ccdd81feb06ccfe72ae0d488f046cfd5902ede54cc338a614&w=1060',
      description: "Flexibilidad y Comodidad al alcance de distintos Dispositivos"
    },
    {
      title: "Ingreso de horas",
      svg2: <IconoCalendario />,
      img: 'https://img.freepik.com/free-photo/woman-checking-calendar_53876-13451.jpg?t=st=1709924403~exp=1709928003~hmac=42c8e68ce1cc3252e85c6506480e7e6a31989af29773fee30d2c49ad6c60f0bc&w=1060',
      description: "La Manera mas Rapida y Util de Marcar tus Horas RSU"
    }, {
      title: "FAQ",
      svg2: <IconoFAQ />,
      img: 'https://img.freepik.com/free-photo/group-young-people-sitting-conference-together_58466-11188.jpg?t=st=1709923624~exp=1709927224~hmac=7c2b9c206031ca025e46763bac135e62de9df81a0c16839315a204904892bd06&w=1060',
      description: "Preguntas Frecuentes más Pensadas por los estudiantes"
    }
  ];

  return (
    <section className='cards_container_objetives'>
      <div className='cards_container' ref={ref}>
        {cards.map((item, index) => (
          <div className='card' key={index}
            style={{
              transform: isInView ? "none" : "translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.${index + 1}s`
            }}>
            <img src={item.img} alt="" />
            <div className='content'>
              <div className="logo">
                {item.svg2}
              </div>
              <h1 className="title">{item.title}</h1>
              <p className="text">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContainerCards;
