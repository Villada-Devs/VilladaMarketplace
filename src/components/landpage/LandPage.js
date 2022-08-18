import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "../../styles/landpage/LandPage.css"

function LandPage() {
    return (

        <Container className="page-container" fluid>
            <Row>

                <Col className="land-left" md={6} sm={12}>
                    <div>
                        <h1>Bienvenidos <br></br> a la <span className="blue-section"> Unión  <br></br>Padres de Familia </span></h1>
                        <p className="land-sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <Button className='button button-marketplace' variant="primary" type="submit">Marketplace</Button>
                    </div>
                </Col>

                <Col md sm={8}>
                    <div className="land-img"></div>
                </Col>

            </Row>
        </Container>

    );
}

export default LandPage;