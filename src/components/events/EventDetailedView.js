import React from "react";

import Container from "react-bootstrap/esm/Container";
import Carousel from 'react-bootstrap/Carousel';

import User from "../User";

import "../../styles/events/EventDetailedView.css";
import villada from "../../img/villada.jpg"

import {useLocation} from 'react-router-dom';

function EventDetailedView() {
    const location = useLocation();
    console.log(location);

    return(

        <Container className="page-container" fluid>

            <Carousel className="det-event-carousel" fade>

                {
                    location.state.imagesevent.map((image, index) => {
                        return(
                            <Carousel.Item className="det-event-carousel-item" interval={2000}>
                                <img
                                className="d-block w-100 det-event-img"
                                src={image.image}
                                alt="First slide"
                            />
                            </Carousel.Item>
                        );
                    })
                }

            </Carousel>

            <User
                userName={location.state.author}
                creationDate={"Fecha de Creacion: " + new Date(location.state.created_date).toDateString()}
            />

            <h1 className="detailed-event-title blue-section">{location.state.eventTitle}</h1>

            <p>{location.state.body}</p>

        </Container>

    );
}

export default EventDetailedView;