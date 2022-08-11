import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBars } from '@fortawesome/free-solid-svg-icons';

import "../styles/TopNav.css";


function TopNav({toggleLoginMenu, toggleRegisterMenu, selectedView, setSelectedView, views}) {

    return(

        <>

            <div className='top-nav'>
                <nav className='navbar navbar-expand-lg row container'>
                    <a className="navbar-brand col-lg-2 logo" href=''>UPF</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
                        <FontAwesomeIcon icon={faBars} className="navbar-button" />
                    </button>

                    <div className="collapse navbar-collapse col-lg-8 column" id="navbarTogglerDemo02">

                        <ul className="navbar-nav ml-auto">

                            {
                                views.map((view, index) => {
                                    return (
                                        <>
                                            <li className="nav-item" key={index}>
                                                <a className={view == selectedView? "nav-link selected-view" : "nav-link"} onClick={() => setSelectedView(view)} >{view}</a>
                                            </li>
                                        </>
                                    )
                                })
                            }

                        </ul>

                    </div>

                    <div className='col-lg-2 column'>
                        <button id="btn-login" type="button" className="btn btn-login" onClick={() => {
                            toggleLoginMenu();
                        }}>Login</button>
                        <button id="btn-register" type="button" className="btn btn-register" onClick={() => {
                            toggleRegisterMenu();
                        }} onMouseOver={() => {
                            document.querySelector("#btn-register").style.borderRadius = "4px";
                            document.querySelector("#btn-login").style.borderRadius = "4px 0 0 4px";
                            document.querySelector("#btn-login").style.background = "transparent";
                            document.querySelector("#btn-login").style.color = "black";
                        }} onMouseOut={() => {
                            document.querySelector("#btn-login").style.borderRadius = "4px";
                            document.querySelector("#btn-register").style.borderRadius = "0 4px 4px 0";
                            document.querySelector("#btn-login").style.background = "rgb(94, 145, 221)";
                            document.querySelector("#btn-login").style.color = "rgb(240, 240, 240)";
                        }}>Register</button>
                    </div>

                </nav>
            </div>

        </>

    );



}

export default TopNav;