import React, { useContext } from "react";

import Form from 'react-bootstrap/Form';

import ContextConnected from "../../../context/ContextConnected";

function MyProfile(props) {

    const Connected = useContext(ContextConnected);

    return (

        <>

            <h1 className="section-header">Mi Perfil</h1>

            <img className="my-profile-img" alt="" src={props.userImage}></img>

            <Form.Group>
                <Form.Label className="input-label">Nombre de Usuario</Form.Label>
                <Form.Control className="input my-profile-input" placeholder={props.userName} disabled />
            </Form.Group>

            <Form.Group>
                <Form.Label className="input-label">Nombre</Form.Label>
                <Form.Control className="input my-profile-input" placeholder={props.fName} disabled />
            </Form.Group>

            <Form.Group>
                <Form.Label className="input-label">Apellido</Form.Label>
                <Form.Control className="input my-profile-input" placeholder={props.sName} disabled />
            </Form.Group>

            <Form.Group>
                <Form.Label className="input-label">Mail</Form.Label>
                <Form.Control className="input my-profile-input" placeholder={props.email} disabled />
            </Form.Group>

        </>

    );

}

export default MyProfile;