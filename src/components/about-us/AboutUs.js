import React from "react";

import Container from 'react-bootstrap/Container';

import AboutUsCarousel from "./AboutUsCarousel";
import AboutUsInfo from "./AbouUsInfoL";

import "../../styles/about-us/AboutUs.css";

function AboutUs() {

    return(

        <Container className="page-container" fluid>

            <AboutUsCarousel />

            <div className="about-content">

                <h1 className="blue-section">¿Quíenes Somos?</h1>

                <hr className="bold-hr"></hr>

                <p className="about-intro">La UPF es una sociedad civil integrada por todos los padres, madres o tutores de los alumnos del ITS Villada con el fin de ofrecer de manera profunda, desinteresada y permanente un servicio en representación de las familias, promoviendo la capacidad educadora de los padres y realizando convocatorias familiares para
                crear una verdadera comunidad.
                </p>

                <h1 className="blue-section">Tareas y Acvtividades que llevamos a cabo</h1>

                <hr className="bold-hr"></hr>

                <h2 className="about-subtitle">Escuela para Padres</h2>
                <p>Junto a toda la Comunidad Educativa del
                Villada, acompañamos a los padres y familias de los alumnos ofreciendo distintos eventos que
                contribuyen al crecimiento espiritual, a la integración en la comunidad, con
                herramientas para ayudar según la edad de los hijos y según las distintas situaciones de desafío social. Así como también acompañar a otras familias más vulnerables, que no pertenecen al colegio, con acciones concretas de caridad y compromiso social.
                </p>

                <AboutUsInfo 
                    aboutEventTitle="Bienvenida a familias de primer año"
                    aboutEventInfo="Se realiza una jornada en la que se informa a las nuevas familias lo necesario para el desarrollo escolar, desde lo administrativo, pedagógico, económico, pastoral, social, a cargo de las autoridades del Instituto – de carácter obligatorio – y posteriormente se trabajan en talleres por grupos de padres que buscan favorecer el conocimiento entre las familias de los nuevos ingresantes, atendiendo a sus expectativas e inquietudes iniciales y por último se realiza un momento festivo en que compartimos una comida, para profundizar lazos de amistad, de ayuda mutua y de pertenencia institucional, en un clima de alegría y de apertura.
"
                />

            </div>
            
        </Container>

    )

}

export default AboutUs;