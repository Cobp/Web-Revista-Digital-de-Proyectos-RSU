import { Link } from 'react-router-dom'
import { CaretLeft } from '../../assets';
import Image from '../../assets/images/logo_ueb.webp'
import './LoginModule.css';

const Login = () => {
  return (
    <div className='Main login-screen'>
      <div className="Login-form-container">
        <form class="form">
          <img className='logo-UEB' src={Image} alt='logo-UEB'/>
          <input class="input" placeholder='Registro' type="tel" maxlength="9" required="" />
          <input class="input" placeholder='Pin' type="password" required="" />
          <div class="input-block">
            <button type='submit'>Entrar</button>
          </div>
        </form>
        <Link to='/'><CaretLeft/>Cancelar</Link>
        <span class="forgot">Si tiene alguna sugerencia favor de informar al correo 0000@ueb.edu.bo incluyendo su Número de Registro</span>
        {/* <IconoLogin /> */}
      </div>
    </div>
  )
}

export default Login
