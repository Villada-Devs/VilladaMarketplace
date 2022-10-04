import React from "react";
import { useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import User from "../User";

import "../../styles/events/EventCard.css";

function CardR(props) {

    const navigate = useNavigate();

    return (

        <Container className="event-card-r" fluid onClick={() => { navigate('/Eventos/detalles'); }} >
            <Row>

                <Col lg={5} md={12} sm={12}>
                    <img className="event-card-photo" src={props.eventImage} />
                </Col>

                <Col className="event-card-content">
                    <div>
                        <div className="event-card-top card-r">
                            <User 
                                userName={props.userName}
                                creationDate={props.creationDate}
                            />
                        </div>

                        <div className="event-card-description">
                            <h2 className="event-title">{props.eventTitle}</h2>
                            <p className="event-text">{props.eventDescription}</p>
                        </div>
                    </div>

                    <div className="event-card-footer">
                        <p className="event-date"> <span className="blue-section">Fecha del Evento: </span>{props.eventDate}</p>
                    </div>
                </Col>

            </Row>
        </Container>

    );
}

export default CardR;
