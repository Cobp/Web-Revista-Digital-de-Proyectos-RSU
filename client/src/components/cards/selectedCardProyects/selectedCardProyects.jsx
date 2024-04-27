import { QRCodeSVG } from "qrcode.react";
import {
    // IconoStarFilled,
    // IconoStarHalfFilled,
    Plus,
    // IconoStar,
    IconoWhatsapp,
    IconoFacebook,
    IconoInstagram,
    IconoTwitterX,
} from "../../../assets";
import Img from '../../../assets/images/logo-ueb-transparente.webp'
import './selectedCard.Module.css'
import { Tooltip } from "../..";

const card1 = ({ selectedId, setSelectedId, contentRef }) => {
    const URL = `https://ProyectosRSU/proyectos-rsu:${selectedId.Codigo_Proyecto}`;
    const Share = [
        {
            icon: <IconoWhatsapp/>,
            label: "Whatsapp",
            url: '',
        },
        {
            icon: <IconoFacebook/>,
            label: "Facebook",
            url: '',
        },
        {
            icon: <IconoInstagram/>,
            label: "Instagram",
            url: '',
        },
        {
            icon: <IconoTwitterX/>,
            label: "Twitter",
            url: '',
        }
    ]
    // const Value = false;
    // const users = 54;
    // const rating = 0;
    // const DateStarRating = rating / users;
    // const filledStars = Math.floor(DateStarRating);
    // const remainder = rating - filledStars;
    // const reviewMessage = DateStarRating === 0 ? '' : DateStarRating >= 3 ? 'Mayormente positivo' : 'Mayormente negativo';

    return (
        <div className="card_show_selected">
            <div className="card_show" ref={contentRef}>
                <button type="button" className="btn close-card_show_selected" onClick={() => setSelectedId(null)}>
                    <Plus />
                </button>
                <div className='content-card'>
                    <div className='content-card-image'>
                        <img src={selectedId.image} alt="" />
                    </div>
                    <div className='W-100 padding2430 column content-card-selected'>
                        <div className="D-aling W-100">
                            {/* <div className="D-aling W-100">
                                <div className="D-aling star-rating">
                                    {[...Array(5)].map((_, index) => (
                                        <i key={index} className="btnStar">
                                            {index < filledStars ? (
                                                <IconoStarFilled />
                                            ) : index === filledStars && remainder >= 0.5 ? (
                                                <IconoStarHalfFilled />
                                            ) : (
                                                <IconoStar />
                                            )}
                                        </i>
                                    ))}
                                </div>
                                <p className="D-center user-rating">{DateStarRating.toFixed(1)} ({DateStarRating === 0 ? "Sin Reseñas" : `${users} Reseñas`})</p>
                                <p className="D-center user-rating">{reviewMessage}</p>
                            </div> */}
                            <p className="date code_p">Codigo del Proyecto: {selectedId.Codigo_Proyecto}</p>
                        </div>
                        <div>
                            <p className='date funtion-U'>{selectedId.Funcion_universitaria}</p>
                            <p className="date responsible-career">{selectedId.Carrera_Responsable}</p>
                            <h5 className="date name-P">{selectedId.Nombre_Proyecto}</h5>
                            <div className="D-aling">
                            </div>
                            <p className='description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis dignissimos unde a in ad eum explicabo iste totam exercitationem inventore! Doloremque, nobis eaque? Quaerat possimus expedita nihil nemo, fuga sunt.
                                Unde, dignissimos maxime. Qui quis nihil illum, consequuntur dicta iure provident quam. Facilis sed esse modi officiis necessitatibus beatae assumenda magnam fuga nesciunt, harum accusantium tenetur atque quae consequuntur ex!
                                Ex, harum eos maiores aliquam temporibus eius autem sed sapiente quaerat repellendus esse asperiores in deserunt ipsa earum distinctio explicabo tenetur odit perferendis laudantium repellat iste laboriosam quam. Laborum, obcaecati.</p>
                        </div>
                    </div>
                </div>
                <div className="D-justify Just-SpaceB column W-100 H-100" >
                    <div className="container-card-secundary-data">
                        <div className="container-card-footer">
                            <div className="container-card-download" >
                                <img className="Logo-UEB" src={Img} alt="Logo UEB"/>
                                <div className="QR-svg">
                                    <QRCodeSVG
                                        value={URL}
                                        size={120}
                                        bgColor="#ffffff"
                                        fgColor="var(--color-gris4)"
                                    />
                                </div>
                            </div>
                            <div className="share-social-media">
                                <h4>Compartir Proyecto :</h4>
                                {Share.map((item, index) => (
                                    <Tooltip
                                        label={item.label}
                                        position={"bottom"}
                                        url={item.url}
                                        key={index} >
                                        {item.icon}
                                    </Tooltip>
                                ))}
                            </div>
                        </div>
                        <div className="container-card-date_C-E-R-R">
                            <div>
                                <div className="line-vertical" ></div>
                                <p className="date date_C-R-E-E">Coordinador responsable: <span className="user-rating">{selectedId.CoordResponsable}</span></p>
                                <p className="date date_C-R-E-E">Datos responsable interno: <span className="user-rating">{selectedId.Datos_responsable_interno}</span></p>
                                <p className="date date_C-R-E-E">Entidad externa vinculada: <span className="user-rating">{selectedId.Entidad_externa_vinculada}</span></p>
                                <p className="date date_C-R-E-E">Datos entidad externa: <span className="user-rating">{selectedId.Datos_entidad_externa}</span></p>
                                <p className="date date_C-R-E-E">Validacióndel Proyecto: <span className="user-rating">{selectedId.Semestre_inicio}-{selectedId.Semestre_finalizacion}</span></p>
                                <p className="date date_C-R-E-E">Horas Acumulativas</p>
                            </div>
                            {/* <div className="D-aling alingEnd JustifyEnd W-100 G-1">
                                <div className="D-aling G-1">
                                    <button type="button" className="btnSelectedCard" disabled={!Value}>Iniciar proyecto</button>
                                    {!Value && <button type="button" className="btnSelectedCard">Iniciar sesión</button>}
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default card1;
