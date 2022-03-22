import React from "react";

function Login(timeMessage) {
    return (

        <>
            <div className="bg"></div>

            <div className="login-card">
                <div className="text">
                    <h2>Hola De Nuevo</h2>
                    <p>Que Tengas {timeMessage["timeMessage"]}!</p>
                </div>

                <div className="separator">
                    <hr/>
                    <p>Login</p>
                    <hr/>
                </div>

                <div className="inputs">
                    <input type="text" className="input" placeholder="Mail Institucional" />
                    <input type="text" className="input" placeholder="Contraseña" />
                    <p className="hover text-start little">Recuperar Contraseña</p>
                </div>

                <hr/>


                <div className="login-button-area">
                    <button type="button" className="btn btn-login">Iniciar Sesión</button>
                    <p className="little">¿No Tienes Cuenta? <span className="link hover">Registrate Aquí</span></p>
                </div>

            </div>
        </>
    );
}

export default Login;