import React, { useContext } from "react";

import ContextConnected from "../../context/ContextConnected";

function ProfileSections({ activeSection, setActiveSection }) {

    const Connected = useContext(ContextConnected)

    return(

        <>

            <div className="profile-section user-info">

                <h3>Mi Perfil</h3>
                <hr className="bold-hr"></hr>

                <button className={`profile-section-button ${activeSection === "MyProfile" ? "active-section" : null}`} onClick={() => setActiveSection("MyProfile")}>Perfil</button>

            </div>

            <div className="profile-section posts">

                <h3>Mis Publicaciones</h3>
                <hr className="bold-hr"></hr>

                <button className={`profile-section-button ${activeSection === "MyBooks" ? "active-section" : null}`} onClick={() => setActiveSection("MyBooks")}>Libros</button>
                <button className={`profile-section-button ${activeSection === "MyTools" ? "active-section" : null}`} onClick={() => setActiveSection("MyTools")}>Herramientas</button>
                <button className={`profile-section-button ${activeSection === "MyUniforms" ? "active-section" : null}`} onClick={() => setActiveSection("MyUniforms")}>Uniformes</button>
                <button className={`profile-section-button ${activeSection === "MyPools" ? "active-section" : null}`} onClick={() => setActiveSection("MyPools")}>Pools</button>

                { 
                    Connected && Connected.userInfo && Connected.userInfo.is_staff?
                        (<button className={`profile-section-button ${activeSection === "MyEvents" ? "active-section" : null}`} onClick={() => setActiveSection("MyEvents")}>Eventos</button>) :
                    null
                }

            </div>

        </>

    );
}

export default ProfileSections;