import { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoUEB from '../../assets/images/logo2-ueb-transparente.webp'

const Navbar = () => {
    const [clickedLink, setClickedLink] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const Links = [
        {
            name: "Inicio",
            link: "/"
        },
        {
            name: "Horas",
            link: "/Reg-horas-rsu"
        },
        {
            name: "P. Disponibles",
            link: "/proyectos-rsu"
        },
        {
            name: "Contáctenos",
            link: "https://ueb.edu.bo/contactenos/"
        },
        {
            name: "Administ",
            link: "/mode-administ"
        },
        {
            name: "Regístrate",
            link: "/login"
        }
    ];

    const handleClick = (index) => {
        setClickedLink(index);
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <nav className="navbar-container">
                <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <a href="https://ueb.edu.bo/" title="Universidad Evangélica Boliviana">
                    <img src={LogoUEB} alt="" />
                </a>
                <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
                    {Links.map((link, index) => (
                        <li key={index}>
                            <Link
                                to={link.link}
                                className={clickedLink === index ? 'clicked-link' : ''}
                                onClick={() => handleClick(index)}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <style>
                {`
                    header {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
                        background-color: #ffffff;
                        z-index: 100;
                    }
                    .navbar-container {
                        position: relative;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 10px 15px;
                        max-width: 1150px;
                        width: 100%;
                        height: 7em;
                    }

                    /* Menu Hamburguesa navbar*/

                    .navbar-container .menu-icon {
                        position: relative;
                        width: 25px;
                        height: 20px;
                        background: transparent;
                        cursor: pointer;
                        display: none;
                    }
                    .navbar-container .menu-icon span {
                        display: block;
                        position: absolute;
                        height: 3.5px;
                        width: 100%;
                        background: #bb262d;
                        border-radius: 9px;
                        opacity: 1;
                        left: 0;
                        transform: rotate(0deg);
                        transition: all .25s ease-in-out;
                    }
                    .navbar-container .menu-icon span:nth-of-type(1) {
                        top: 0px;
                        transform-origin: left center;
                    }
                    .navbar-container .menu-icon span:nth-of-type(2) {
                        top: 50%;
                        transform: translateY(-50%);
                        transform-origin: left center;
                    }
                    .navbar-container .menu-icon span:nth-of-type(3) {
                        top: 100%;
                        transform-origin: left center;
                        transform: translateY(-100%);
                    }
                    .navbar-container .menu-icon.open span:nth-of-type(1) {
                        transform: rotate(45deg);
                        top: 0;
                        left: 5px;
                    }
                    .navbar-container .menu-icon.open span:nth-of-type(2) {
                        width: 0%;
                        opacity: 0;
                    }
                    .navbar-container .menu-icon.open span:nth-of-type(3) {
                        transform: rotate(-45deg);
                        top: 18px;
                        left: 5px;
                    }
                    .navbar-container .navbar-links {
                        display: flex;
                        gap: 3em;
                        list-style: none;
                    }
                    .navbar-container .navbar-links .clicked-link::after {
                        position: absolute;
                        content: "";
                        width: 100%;
                        height: 4px;
                        left: 0;
                        top: -12px;
                        background-color: #bb262d;
                        transition: all .3s ease-in-out;
                    }
                    .navbar-container a img {
                        width: 145px;
                    }
                    .navbar-container a {
                        position: relative;
                        display: flex;
                        align-items: center;
                        color: #bb262d;
                        font-family: "Exo 2", sans-serif;
                        font-size: var(--fz-text-titulo3);
                        text-decoration: none;
                        transition: all .3s ease-in-out;
                    }
                    .navbar-container .navbar-links a::before {
                        position: absolute;
                        content: "";
                        width: 100%;
                        height: 0;
                        bottom: -12px;
                        background-color: #bb262d;
                        transition: all .3s ease-in-out;
                    }
                    .navbar-container .navbar-links a:hover::before {
                        height: 4px;
                    }
                    @media screen and (max-width: 950px) {
                        .navbar-container {
                            height: 5em;
                        }
                        .navbar-container a img {
                            width: 120px;
                        }
                        .navbar-container .menu-icon {
                            display: block;
                        }
                        .navbar-container .navbar-links {
                            position: absolute;
                            height: 0;
                            top: 5em;
                            left: 0;
                            right: 0;
                            padding: 25px 15px;
                            display: flex;
                            flex-direction: column;
                            background-color: #ffffff;
                            border-top: 1px solid #bb262d;
                            z-index: 5;
                            visibility: hidden;
                            opacity: 0;
                            overflow: hidden;
                            transition: all .3s ease-in-out;
                        }
                        .navbar-container .navbar-links li {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            padding: 17px 15px;
                            width: 100%;
                            border-bottom: 1px solid #cccccc;
                        }
                        .navbar-container .navbar-links.open {
                            visibility: visible;
                            opacity: 1;
                            padding: 0;
                            height: 338px;
                            box-shadow: 0px 5px 5px 0px #cccccc;
                            gap: 0;
                        }
                    }
                `}
            </style>
        </header>
    );
};

export default Navbar;
