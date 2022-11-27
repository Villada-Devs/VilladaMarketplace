import React, { useContext ,  useState, useEffect}from "react";
import { Navigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContextConnected from "../../context/ContextConnected";

import ProfileSections from "./ProfileSections";

import "../../styles/profile/ProfileView.css"
import Logout from "../Logout";

import { ToastContainer, toast } from 'react-toastify';

function ProfileView() {

    const Connected = useContext(ContextConnected);

    const [profileSection, setProfileSection] = useState([]);
    const [activeSection, setActiveSection] = useState(0);

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
                                <img alt="" className="profile-user-img" src={Connected.profile.image}></img>
                            </div>
                            <div>
                                <h2 className="profile-user-name">{Connected.userInfo.first_name} {Connected.userInfo.last_name}</h2>
                                
                                <p>{Connected.userInfo.email}</p>
                            </div>
                        </div>
                            
                        <ProfileSections 
                            profile={Connected.userInfo}
                        />

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