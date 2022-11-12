import React, { useContext ,  useState, useEffect}from "react";
import {Navigate} from 'react-router-dom';



import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContextConnected from "../../context/ContextConnected";

import "../../styles/profile/ProfileView.css"
import Logout from "../Logout";

import LandPage from "../landpage/LandPage"

import { ToastContainer, toast } from 'react-toastify';

function ProfileView() {
    const Connected = useContext(ContextConnected);

    useEffect(() => {
        const loadProfile = async () => {
          const token = await JSON.parse(localStorage.getItem("token"));
          if (token) {
            const url = `http://villadaapidjango-env.eba-vaws9zih.us-east-1.elasticbeanstalk.com/api/v1/profile/${Connected.userInfo.profile_image.pk}`
            
            const res = await fetch(url, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token.access_token}`
              },
            })
            const data = await res.json();
            Connected.setProfile(data);
          }
        };
        loadProfile();
    }, [Connected.userInfo]);
    console.log(Connected.userInfo.is_staff)
    
    return(
        
            <Container className="page-container">
                {Connected.userInfo? (

                <Row>

                    <Col>

                        <div className="profile-user">
                            <div className="profile-user-img">
                                <img className="profile-user-img" src={Connected.profile.image}></img>
                            </div>
                            <div>
                                <h2 className="profile-user-name">{Connected.userInfo.first_name} {Connected.userInfo.last_name}</h2>
                                
                                <p>{Connected.userInfo.email}</p>
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

            
        ) :(
            <Navigate to="/" />            
        )}
        </Container>

    );
}

export default ProfileView;