import React, { useState } from "react";
import "../styles/cuadro.css";
import "../images/image.png";

function Cuadro() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cuadros = [
    {
      title: "Control de ruido",
      description:
        "En lugares públicos, el dispositivo puede alertar a los administradores cuando los niveles de ruido excedan ciertos límites, lo que les permitirá tomar medidas para mantener un ambiente tranquilo y agradable.",
    },
    {
      title: "Monitoreo de ruido",
      description:
        "Proporciona información en tiempo real sobre los niveles de ruido en áreas urbanas, lo que ayuda a las autoridades locales a tomar medidas para reducir la contaminación acústica",
    },
    {
      title: "Accesibilidad",
      description:
        "Disponible en cualquier dispositivo con acceso a internet, sin necesidad de descargas",
    },
    {
      title: "Recomendaciones",
      description:
        "Recibe consejos prácticos para reducir el ruido mejorar tu bienestar.",
    },
    {
      title: "Soporte Dedicado",
      description:
        "Nuestro equipo de soporte está siempre disponible para ayudarte con cualquier duda o problema",
    },
    {
      title: "Precisión",
      description:
        "Utilizamos tecnología avanzada para ofrecerte mediciones exactas del nivel de ruido",
    }
    // Añade más cuadros según sea necesario
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
