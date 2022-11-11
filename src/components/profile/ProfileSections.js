import React from "react";

function ProfileSections() {
    return(

        <>

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

        </>

    );
}

export default ProfileSections;