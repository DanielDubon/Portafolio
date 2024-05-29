import React from 'react';
import iconImage from '../assets/proyects.png';
import './Proyects.css';


const projects = [
    {
        title: 'Sanitas',
        description: 'Software para una Clinica',
        link: 'https://github.com/SanitasUVG/Sanitas.git'
    },
    {
        title: 'Evolve',
        description: 'Aplicacion fitness movil',
        link: 'https://github.com/DanielDubon/Evolve.git'
    },
    {
        title: 'Hell Divers Blog',
        description: 'Blog Web',
        link: 'https://github.com/DanielDubon/HellDiversBlog_ViteReact.git'
    },


];

const Projects = () => {
    return (

        <section id="projects" className="projects-card-main">
            <div className="project-icon-container">
                <img src={iconImage} alt="Icon" className="project-icon" />
            </div>
            <div className="projects-list">
                <h2>Proyectos</h2>
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} className="project-link">Ver más</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
