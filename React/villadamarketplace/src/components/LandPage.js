import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBars } from '@fortawesome/free-solid-svg-icons';

import "../styles/LandPage.css";

function LandPage() {
    
    return(

        <>
            <hr className="top-separator"></hr>

            <div className="top-container">

                <div className="left-card">
                    <h1 className="top-title">Bienvenidos <br></br>a la <span>Unión <br></br>Padres de Familia.</span></h1>
                    <p className="sub-title">Aquí puedes actualizarte con las últimas noticias del colegio, y comprar útiles, libros y herramientas.</p>
                    <button type="button" className="btn btn-marketplace">Marketplace</button>
                    <p className="texto-conoce-mas">Conocé más sobre nosotros  <FontAwesomeIcon className="conocer-link" icon={faArrowRight} /></p>
                </div>

                <div className="foto-cole"></div>

            </div>

        </>

    );
}

export default LandPage;