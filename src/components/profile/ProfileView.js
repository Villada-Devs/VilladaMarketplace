import React, { useContext ,  useState, useEffect}from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContextConnected from "../../context/ContextConnected";

import ProfileSections from "./ProfileSections";

import "../../styles/profile/ProfileView.css"
import Logout from "../Logout";

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
    console.log()
    
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
                            
                        <ProfileSections />

                    </Col>

                    <Col></Col>

                </Row>

            
        ) :(
            <Logout />
        )}
        </Container>

    );
}

export default ProfileView;