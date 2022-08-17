import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import User from "../User";

import "../../styles/events/EventCard.css";

function CardR() {
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
                                userName="Nombre de Usuario"
                                creationDate="12 de Agosto 2022"
                            />
                        </div>

                        <div className="event-card-description">
                            <h2 className="event-title">Titulo del Evento.</h2>
                            <p className="event-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className="event-card-footer">
                        <p className="event-date"> <span className="blue-section">Fecha del Evento:</span> 20 de Agosto 2022</p>
                    </div>
                </Col>

            </Row>
        </Container>

    );
}

export default CardR;
