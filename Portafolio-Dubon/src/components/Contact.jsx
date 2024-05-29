import React from 'react';
import './Contact.css';
import iconImage from '../assets/contact-icon.png';


const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-icon-container">
                <img src={iconImage} alt="Icon" className="contact-icon" />
            </div>
            <div className="contact-container">
                <h2>Contacto</h2>
                <ul className="contact-list">
                    <li>Correo: <a href="mailto:danieldubob@gmail.com">danieldubob@gmail.com</a></li>
                    <li>Número: <a href="tel:+50259345311">+502 59345311</a></li>
                </ul>
            </div>
        </section>
    );
};

export default Contact;
