import React, { useState } from 'react';
import "../styles/cuadro.css";
import "../images/image.png";

function Cuadro() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const cuadros = [
        {
            title: "Control de ruido",
            description: "En lugares públicos, el dispositivo puede alertar a los administradores cuando los niveles de ruido excedan ciertos límites, lo que les permitirá tomar medidas para mantener un ambiente tranquilo y agradable."
        }
        ,{
title: "Control de ruido",
            description: "En lugares públicos, el dispositivo puede alertar a los administradores cuando los niveles de ruido excedan ciertos límites, lo que les permitirá tomar medidas para mantener un ambiente tranquilo y agradable."
        },{
            title: "Control de ruido",
            description: "En lugares públicos, el dispositivo puede alertar a los administradores cuando los niveles de ruido excedan ciertos límites, lo que les permitirá tomar medidas para mantener un ambiente tranquilo y agradable."
        },{
            title: "Control de ruido",
            description: "En lugares públicos, el dispositivo puede alertar a los administradores cuando los niveles de ruido excedan ciertos límites, lo que les permitirá tomar medidas para mantener un ambiente tranquilo y agradable."
        }
        
        // Añade más cuadros según sea necesario
    ];
    
        

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % cuadros.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + cuadros.length) % cuadros.length);
    };

    return (
        <div className="contenedor-principal">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {cuadros.map((cuadro, index) => (
                    <div className="recuadro" key={index}>
                        <div className="icono">
                            <div className="imagenC"></div>
                        </div>
                        <div className="texto">
                            <h2>{cuadro.title}</h2>
                            <p>{cuadro.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="boton boton-derecha" onClick={nextSlide}></div>
            <div className="boton boton-izquierda" onClick={prevSlide}></div>
        </div>
    );
}

export default Cuadro;