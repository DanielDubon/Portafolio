import React from 'react';

const projects = [
    {
        title: 'Proyecto 1',
        description: 'Descripción breve del proyecto 1.',
        link: '#'
    },
    {
        title: 'Proyecto 2',
        description: 'Descripción breve del proyecto 2.',
        link: '#'
    },

];

const Projects = () => {
    return (
        <section id="projects">
            <h2>Proyectos</h2>
            <p>Lista de tus proyectos.</p>
        </section>
    );
};

export default Projects;
