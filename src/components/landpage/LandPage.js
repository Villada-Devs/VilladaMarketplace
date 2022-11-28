import React from "react";
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import UPFland from "../../img/land/UPF-land.png";

import "../../styles/landpage/LandPage.css"

function LandPage() {

    const navigate = useNavigate();

    return (

        <Container className="page-container" fluid>
            <Row className="land-row">

                <Col className="land-left" md={6} sm={12}>
                        <h1>Bienvenidos <br /> a la <span className="blue-section"> Unión  <br />Padres de Familia</span> <br />Del Villada</h1>
                        <p className="land-sub-title">Sitio web oficial de la UPF, creado con el fin de facilitar la comunicacion entre la comunidad del ITS Villada.</p>
                        <Button className='button button-marketplace' variant="primary" onClick={() => { navigate("/Marketplace"); }}>Marketplace</Button>
                </Col>

                <Col className="land-right">
                    <div className="land-img-container">
                        <img className="land-img" alt="" src={UPFland} />
                    </div>
                </Col>

            </Row>
        </Container>

    );
}

export default LandPage;