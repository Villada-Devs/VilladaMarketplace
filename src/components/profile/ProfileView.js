import React, { useContext ,  useState, useEffect }from "react";
import { Navigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContextConnected from "../../context/ContextConnected";

import ProfileSections from "./ProfileSections";
import MyProfile from "./sections/MyProfile";
import MyBooks from "./sections/MyBooks";
import MyTools from "./sections/MyTools";
import MyUniforms from "./sections/MyUniforms";
import MyPools from "./sections/MyPools";

import "../../styles/profile/ProfileView.css"

function ProfileView() {

    const Connected = useContext(ContextConnected);

    const [activeSection, setActiveSection] = useState("MyProfile");

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
        
            <Container className="profile-page" fluid>
                {Connected.userInfo? (

                <Row className="profile-page-row">

                    <Col className="profile-page-left" xs={12} sm={12} md={6} lg={4}>

                        <div className="profile-user">
                                <img alt="" className="profile-user-img" src={Connected.profile.image}></img>
                            <div>
                                <h2 className="profile-user-name">{Connected.userInfo.username}</h2>
                                
                                <p>{Connected.userInfo.email}</p>
                            </div>
                        </div>
                            
                        <ProfileSections
                            activeSection={activeSection}
                            setActiveSection={setActiveSection}
                        />

                    </Col>

                    <Col className="profile-page-right">

                        {activeSection === "MyProfile" ? (

                            <MyProfile 
                                userImage={Connected.profile.image}
                                userName={Connected.userInfo.username}
                                fName={Connected.userInfo.first_name}
                                sName={Connected.userInfo.last_name}
                                email={Connected.userInfo.email}
                            />
                        ) : activeSection === "MyBooks" ? (

                            <MyBooks />
                        
                        ) : activeSection === "MyTools" ? (

                            <MyTools />

                        ) : activeSection === "MyUniforms" ? (

                            <MyUniforms />

                        ) : activeSection === "MyPools" ? (

                            <MyPools />

                        ) : (

                            null
                            
                        )}

                    </Col>

                </Row>

            
        ) :(
            <Navigate to="/" />          
        )}
        </Container>

    );
}

export default ProfileView;