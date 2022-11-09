import React from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "../../styles/profile/ProfileView.css"

function ProfileView() {
    return(

        <Container className="page-container">

            <Row>

                <Col>

                    <div className="profile-user">
                        <div className="profile-user-img"></div>
                        <div>
                            <h2 className="profile-user-name">Nombre de Usuario.</h2>
                            <p>usuario@gmail.com</p>
                        </div>
                    </div>
                        
                    <div className="profile-section user-info">

                        <h3>Mi Perfil</h3>
                        <hr className="bold-hr"></hr>

                        <button className="profile-section-button">Perfil</button>

                    </div>

                    <div className="profile-section posts">

                        <h3>Mis Publicaciones</h3>
                        <hr className="bold-hr"></hr>

                        <button className="profile-section-button">Libros</button>
                        <button className="profile-section-button">Herramientas</button>
                        <button className="profile-section-button">Uniformes</button>
                        <button className="profile-section-button">Pools</button>
                        <button className="profile-section-button">Eventos</button>

                    </div>

                </Col>

                <Col></Col>

            </Row>

        </Container>

    );
}

export default ProfileView;