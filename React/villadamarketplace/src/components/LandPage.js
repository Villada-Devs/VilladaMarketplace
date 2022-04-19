import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import "../styles/LandPage.css";

function LandPage(toggleLoginMenu) {
    
    return(

        <>


            <div className='top-nav'>
                <nav className='navbar navbar-expand-lg row container'>
                    <a className="navbar-brand col-lg-2 logo column" href=''>UPF</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
                        <FontAwesomeIcon icon={faBars} className="navbar-button" />
                    </button>

                    <div className="collapse navbar-collapse col-lg-8 column" id="navbarTogglerDemo02">

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#mint">Eventos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#team">Marketplace</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#roadmap">Portal de Trabajo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#whitepaper">Anuncios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#whitepaper">Pool</a>
                            </li>
                        </ul>

                    </div>

                    <div className='col-lg-2 column'>
                        <button type="button" className="btn btn-login" onClick={() => {
                            toggleLoginMenu["toggleLoginMenu"]();
                        }}>Login</button>
                    </div>

                </nav>
            </div>

            <hr className="top-separator"></hr>

            <div className="top-container">

                <div className="left-card">
                    <h1 className="top-title">Bienvenidos <br></br>a la <span>Unión <br></br>Padres de Familia.</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit facilis dolore, quae, doloribus esse laboriosam.</p>
                    <button type="button" className="btn btn-success"></button>
                </div>

                <div className="foto-cole">

                </div>

            </div>

        </>

    );
}

export default LandPage;