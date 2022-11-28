import React from "react";

function ProfileSections({ activeSection, setActiveSection }) {
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
                <button className={`profile-section-button ${activeSection === "MyEvents" ? "active-section" : null}`} onClick={() => setActiveSection("MyEvents")}>Eventos</button>

            </div>

        </>

    );
}

export default ProfileSections;