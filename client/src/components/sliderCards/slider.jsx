import React, { useState, useEffect } from 'react';
import Verify from './verificador.jsx';
import data from './data.json';

const SlideItem = ({ slider }) => {
    return (
        <div className="slider-item">
            {slider.image && <img className='image_fondo' src={slider.image} alt='' />}
            <div className="items">
                <Verify facultad={slider.Facultad_Responsable} />
                <div className="card_content">
                    <h1 className="card_content_title" title={slider.Nombre_Proyecto}>{slider.Nombre_Proyecto}</h1>
                    <p className="card_content_description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, a! Iusto corporis doloremque officia minima.</p>
                    <h5 className="card_content_responsible_person">{slider.Carrera_Responsable}</h5>
                </div>
            </div>
        </div>
    );
};

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const sliderData = data.Proyects.slice(-5);
    const totalSlides = sliderData.length;

    useEffect(() => {
        const handleVisibilityChange = () => {
            setIsPaused(document.visibilityState === "hidden");
        };

        const interval = setInterval(() => {
            if (!isPaused) {
                setCurrentIndex(prevIndex => (prevIndex + 1) % totalSlides);
            }
        }, 10000);

        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            clearInterval(interval);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, [isPaused, totalSlides]);

    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);
    const handleButtonClick = index => setCurrentIndex(index);

    return (
        <div className="slider-wrap" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='slider-wrap-hidden'>
                <div className="slider" style={{ width: `${totalSlides * 100}%`, transform: `translateX(-${currentIndex * (100 / totalSlides)}%)` }}>
                    {sliderData.map((slider, index) => (
                        <SlideItem key={index} slider={slider} />
                    ))}
                </div>
            </div>
            <div className="buttons">
                {sliderData.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => handleButtonClick(index)}>
                    </div>
                ))}
            </div>
            <style>
                {` .slider-wrap{
                        position: relative;
                        width: 100%;
                        overflow: hidden;
                    }
                    .slider-wrap .slider-wrap-hidden{
                        height: 300px;
                        overflow: hidden;
                    }
                    .slider-wrap .slider-wrap-hidden .slider {
                        display: flex;
                    }
                    .slider-wrap .buttons{
                        position: absolute;
                        bottom: 10px;
                        left: 50%;
                        display: flex;
                        transform: translate(-50%);
                        gap: .5em;
                    }
                    .slider-wrap .buttons .indicator{
                        width: 8px;
                        height: 8px;
                        border-radius: 50px;
                        background-color: #cecece;
                        transition: .3s ease-in-out;
                        cursor: pointer;
                    }
                    .slider-wrap .buttons .indicator.active{
                        width: 25px;
                        transform: scale(1.2);
                        background-color: var(--color-secundario);
                    }
                    .slider-wrap .buttons .indicator:hover{
                        background-color: var(--color-secundario);
                    }
                    .slider-item {
                        position: relative;
                    }
                    .slider-item .items{
                        height: 300px;
                        padding: 10px;
                        border-radius: 8px;
                        display: flex;
                        justify-content: space-between;
                        flex-direction: column;
                        background-image: linear-gradient(0deg, rgba(0, 0, 0, .85)0%, rgba(0, 0, 0, 0)100%);
                    }
                    .slider .slider-item .image_fondo{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        filter: contrast();
                        z-index: -1;
                        border-radius: 8px;
                    
                    }
                    .slider-item .card_content{
                        width: 100%;
                    }

                    .slider-item .card_image {
                        margin-right: 10px;
                        width: 60px;
                        height: 60px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .slider-item .card_image svg {
                        width: 60px;
                        height: 60px;
                        color: #ffffff;
                    
                    }

                    .slider-item .card_content .card_content_title {
                        max-width: 400px;
                        color: var(--color-principal);
                        font-size: var(--fz-text-titulo3);
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    .slider-item .card_content .card_content_description {
                        pointer-events: none;
                        font-size: var(--fz-text-subtitulo);
                        color: var(--color-principal);
                        font-size: 15px;
                    }

                    .slider-item .card_content .card_content_responsible_person {
                        padding-top: 15px;
                        font-size: var(--fz-text-subtitulo);
                        color: var(--color-principal);
                    }
                    @media screen and (max-width: 500px){
                        .slider-item .card_image{
                            display: none;
                        }
                        .slider-item .card_content .card_content_title {
                            max-width: 300px;
                            font-size: 14px;
                        }

                        .slider-item .card_content .card_content_description {
                            font-size: 12px;
                            font-weight: 300;
                        }

                        .slider-item .card_content .card_content_responsible_person {
                            font-size: 12px;
                            text-transform: uppercase;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default Slider;