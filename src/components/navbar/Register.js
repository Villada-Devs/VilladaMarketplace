import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import "../../styles/navbar/Register.css";


function Register({toggleLoginMenu, timeMessage, toggleRegisterMenu}) {

    const [submited, setSubmited] = useState(false);

    return (
        <>
            <div className="bg" onClick={() => toggleRegisterMenu()}></div>

            <div className="login-card">
            <FontAwesomeIcon icon={faXmark} className="cross" onClick={async () => {
                    toggleRegisterMenu();
                }} />
                
                <div className="text">
                    <h2>Hola, Bienvenido</h2>
                    <p>Que Tengas {timeMessage}!</p>
                </div>

                <div className="separator">
                    <hr/>
                    <p>Register</p>
                    <hr/>
                </div>


                {
                    !submited? (
                        <>
                            <div className="inputs register-inputs">
                                <div className="horizontal-inputs">
                                    <input type="text" className="input" placeholder="Nombre" />
                                    <input type="text" className="input" placeholder="Apellido" />
                                </div>

                                <input type="text" className="input" placeholder="Nombre de Usuario" />
                                <input type="text" className="input" placeholder="Mail Institucional" />

                                <div className="horizontal-inputs">
                                    <input type="password" className="input" placeholder="Contraseña" />
                                    <input type="password" className="input" placeholder="Repetir Contraseña" />
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="submition">
                            <p>Te hemos Enviado un Codigo al Mail!</p>
                            <input type="text" className="input" placeholder="Codigo de Verificación" />
                        </div>
                    )
                }
                

                <hr/>

                {
                    !submited? (
                        <>
                            <div className="login-button-area">
                                <button type="button" className="btn btn-login" onClick={() => {setSubmited(true)}}>Crear Cuenta</button>
                                <p className="little">¿Ya Tienes Cuenta? <span className="link hover" onClick={() => {toggleLoginMenu()}}>Logeate Aquí</span></p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="login-button-area">
                                <button type="button" className="btn btn-login" onClick={() => {setSubmited(true)}}>Verificar</button>
                                <p className="little">¿Ya Tienes Cuenta? <span className="link hover" onClick={() => {toggleLoginMenu()}}>Logeate Aquí</span></p>
                            </div>
                        </>
                    )
                }

            </div>


        </>
    );
}

export default Register;