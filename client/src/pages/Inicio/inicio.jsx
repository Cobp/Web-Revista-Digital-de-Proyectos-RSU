import { Section1, Section2, Section3 } from './routes.jsx'
import './inicioModule.css'

const Inicio = () => {
  return (
    <div className='Main'>
      <Section1/>
      <Section2/>
      <Section3/>
      {/* <Section4/> */}
    </div>
  );
};

export default Inicio;

