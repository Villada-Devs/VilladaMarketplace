import React from "react";

function Register(timeMessage) {
    return (
        <>
            <div className="bg"></div>

            <div className="login-card">
                <div className="text">
                    <h2>Hola, Bienvenido</h2>
                    <p>Que Tengas {timeMessage["timeMessage"]}!</p>
                </div>

                <div className="separator">
                    <hr/>
                    <p>Register</p>
                    <hr/>
                </div>

                <div className="inputs">
                    <input type="text" className="input" placeholder="Mail Institucional" />
                    <input type="text" className="input" placeholder="Contraseña" />
                    <input type="text" className="input" placeholder="Repetir Contraseña" />
                </div>

                <hr/>


                <div className="login-button-area">
                    <button type="button" className="btn btn-login">Crear Cuenta</button>
                </div>

            </div>

        </>
    );
}

export default Register;