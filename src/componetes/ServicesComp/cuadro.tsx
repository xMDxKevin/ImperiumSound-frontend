import React, { useState } from "react";
import "../../styles/cuadro.css";

import imagen1 from "../../images/image1.png"; 
import imagen2 from "../../images/image2.png";
import imagen3 from "../../images/image3.png";
import imagen4 from "../../images/image4.png";
import imagen5 from "../../images/image5.png";
import imagen6 from "../../images/image6.png";
function Cuadro() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cuadros = [
    {
      title: "Control de ruido",
      description:
        "En lugares públicos, el dispositivo puede alertar a los administradores cuando los niveles de ruido excedan ciertos límites, lo que les permitirá tomar medidas para mantener un ambiente tranquilo y agradable.",
      image: imagen1, 
    },
    {
      title: "Monitoreo de ruido",
      description:
        "Proporciona información en tiempo real sobre los niveles de ruido en áreas urbanas, lo que ayuda a las autoridades locales a tomar medidas para reducir la contaminación acústica",
      image: imagen2, 
    },
    {
      title: "Accesibilidad",
      description:
        "Disponible en cualquier dispositivo con acceso a internet, sin necesidad de descargas",
      image: imagen3, 
    },
    {
      title: "Recomendaciones",
      description:
        "Recibe consejos prácticos para reducir el ruido mejorar tu bienestar.",
      image: imagen4, 
    },
    {
      title: "Soporte Dedicado",
      description:
        "Nuestro equipo de soporte está siempre disponible para ayudarte con cualquier duda o problema",
      image: imagen5, 
    },
    {
      title: "Precisión",
      description:
        "Utilizamos tecnología avanzada para ofrecerte mediciones exactas del nivel de ruido",
      image: imagen6, 
    }
  ];

  
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % cuadros.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide(
        (prevSlide) => (prevSlide - 1 + cuadros.length) % cuadros.length
      );
    };
  
    return (
      <div className="contenedor-principal">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {cuadros.map((cuadro, index) => (
            <div className="recuadro" key={index}>
              
                {/* Mostrar la imagen correspondiente a cada cuadro */}
                <img src={cuadro.image} alt={cuadro.title} className="imagenC" />
              
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
  <div className="imagen123">
  imagen4
  </div>
  export default Cuadro;
