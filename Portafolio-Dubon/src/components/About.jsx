import React from 'react';
import './About.css';
import iconImage from '../assets/Info.png';

const About = () => {
    return (
        <section id="about" className="about-card">

            <div className="about-icon-container">
                <img src={iconImage} alt="Icon" className="about-icon" />
            </div>
            <div className="about-content">
                <h2>Sobre Mí</h2>
                <p>
                    Soy un desarrollador Junior que actualmente estudia Ciencias de la Computación en la Universidad del Valle de Guatemala.
                    He tenido la oportunidad de trabajar en distintas áreas tecnológicas. Me desempeño mejor en el ambiente backend, pero me considero un desarrollador
                    full stack. Tengo conocimientos en la creación y gestión de bases de datos relacionales y no relacionales en distintos ambientes y utilizando distintas tecnologías.
                </p>
                <p>
                    Mi experiencia laboral ha sido útil para poder desarrollar mis habilidades. He trabajado como freelancer y en empresas donde desempeñé
                    el papel de asistente técnico de IT, gestionando tickets bajo solicitudes internas que requerían la gestión de plataformas, usuarios,
                    bases de datos y solución de errores de metadatos en archivos.
                </p>
            </div>
        </section >
    );
};

export default About;
