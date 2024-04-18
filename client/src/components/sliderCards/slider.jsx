import { useState, useEffect } from 'react';
import { CaretLeft, CaretRight } from '../../assets/index.js';
import Verify from './verificador.jsx';
import data from './data.json';
import './slider.Module.css'

const SlideItem = ({ slider }) => {
    return (
        <div className="slider-item">
            {slider.image && <img className='image_fondo' src={slider.image} alt={slider.Nombre_Proyecto} />}
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
    
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
      }
    
      const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderData.length) % sliderData.length);
      }

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
            <button type='button' className='left' onClick={handlePrev}><CaretLeft/></button>
            <button type='button' className='right' onClick={handleNext}><CaretRight/></button>
        </div>
    );
};

export default Slider;
