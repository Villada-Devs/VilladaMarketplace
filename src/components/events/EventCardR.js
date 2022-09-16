import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import User from "../User";

import "../../styles/events/EventCard.css";

function CardR(props) {
    return (

        <Container className="event-card-r" fluid>
            <Row>

                <Col lg={5} md={6} sm={12}>
                    <div className="event-card-photo"></div>
                </Col>

                <Col className="event-card-content">
                    <div>
                        <div className="event-card-top">
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
