import React from "react";


import Carousel from 'react-bootstrap/Carousel';

import User from "../User";

import "../../styles/events/EventDetailedView.css";
import villada from "../../img/villada.jpg"

function EventDetailedView() {
    return(

        <>

            <Carousel className="det-event-carousel">

                <Carousel.Item className="det-event-carousel-item" interval={2000}>
                    <img
                    className="d-block w-100 det-event-img"
                    src={villada}
                    alt="First slide"
                />
                </Carousel.Item>

                <Carousel.Item className="det-event-carousel-item" interval={2000}>
                    <img
                    className="d-block w-100 det-event-img"
                    src={villada}
                    alt="First slide"
                />
                </Carousel.Item>

            </Carousel>

            <User
                userName="Nombre de Usuario."
                creationDate="9 de Septiembre 2022"
            />

            <h1 className="detailed-event-title blue-section">Titulo del Evento.</h1>

        </>

    );
}

export default EventDetailedView;