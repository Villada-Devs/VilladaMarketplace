import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';

import UPFland from "../../img/UPF-land.png"

import "../../styles/landpage/LandPage.css"

function LandPage() {
    return (

        <Container className="page-container" fluid>
            <Row className="land-row">

                <Col className="land-left" md={6} sm={12}>
                        <h1>Bienvenidos <br></br> a la <span className="blue-section"> Unión  <br></br>Padres de Familia </span></h1>
                        <p className="land-sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <NavLink className="marketplace-button" to="/Marketplace"><Button className='button button-marketplace' variant="primary">Marketplace</Button></NavLink>
                </Col>

                <Col className="land-right">
                    <div className="land-img-container">
                        <img className="land-img" alt="" src={UPFland}></img>
                    </div>
                </Col>

            </Row>
        </Container>

    );
}

export default LandPage;