import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import ContextConnected from '../../context/ContextConnected';
import ImageInput from '../ImageInput';
import FormCard from '../FormCard';

import "../../styles/Forms.css"

function EventsForm() {

    const context = useContext(ContextConnected);

    const navigate = useNavigate();

    const [validated, setValidated] = useState(false);

    const submit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }

    setValidated(true);
    };

    const [sendImages, setSendImages] = useState([]);
    const [selectedImages, setSelectedImages] = useState([]);
    

    const sendEvent = async (event) => {
        event.preventDefault();
        context.setSpinnerShowing(true)

        const token = await JSON.parse(localStorage.getItem("token"));
        if (token) {

            const title = document.querySelector("#title").value;
            const short_description = document.querySelector("#description").value;
            const body = document.querySelector("#longDescription").value;
            const event_date = new Date(document.querySelector("#date").value).toISOString();
            const event_type = document.querySelector("#type").value;

            var formdata = new FormData();
            formdata.append("title", title);
            formdata.append("body", body);
            formdata.append("short_description", short_description);
            formdata.append("event_date", event_date);
            formdata.append("event_type", event_type);

            for (let i = 0; i < selectedImages.length; i++) {
                formdata.append('uploaded_images', selectedImages[i]);
            };


            await fetch("http://villadaapidjango-env.eba-vaws9zih.us-east-1.elasticbeanstalk.com/api/v1/events/", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token.access_token}`
                },
                body: formdata
            }).then(() => {
                navigate("/Eventos");
                context.setSpinnerShowing(false)
            })

        }

        context.setSpinnerShowing(false)
    };
    

    return (

        <Container className='form-container' fluid>

            <h1 className='form-header blue-section'>Nuevo Evento</h1>

            <FormCard>

                <ImageInput setSendImages={setSendImages} setSelectedImages={setSelectedImages} selectedImages={selectedImages} sendImages={sendImages} />

                <Form noValidate validated={validated} onSubmit={submit}>

                    <Row>

                        <Form.Group as={Col} md="4">
                            <Form.Label className='input-label'>Título</Form.Label>
                            <Form.Control
                                className='input'
                                type="text"
                                id='title'
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor escriba un título.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="4">
                            <Form.Label className='input-label'>Tipo</Form.Label>
                            <Form.Select required className='input' id='type'>
                                <option value=""></option>
                                <option value="Bienvenida a familias de primer año">Bienvenida a familias de primer año</option>
                                <option value="Talleres pedagógicos">Talleres pedagógicos</option>
                                <option value="Retiros espirituales">Retiros espirituales</option>
                                <option value="Integración de los padres a la labor educativa">Integración de los padres a la labor educativa</option>
                                <option value="Locro del exalumno salesiano del villada">Locro del exalumno salesiano del villada</option>
                                <option value="UPF solidaria">UPF solidaria</option>
                                <option value="Dia del educador">Dia del educador</option>
                                <option value="Bicicleteada salesiana">Bicicleteada salesiana</option>
                                <option value="Asado de fin de año">Asado de fin de año</option>
                                <option value="Valle de la inmaculada">Valle de la inmaculada</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                Por favor seleccione un tipo.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="4">
                            <Form.Label className='input-label'>Fecha</Form.Label>
                            <Form.Control
                                className='input'
                                type="date"
                                id="date"
                                required 
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor seleccione una fecha.
                            </Form.Control.Feedback>
                        </Form.Group>

                    </Row>

                    <Form.Group>
                        <Form.Label className='input-label'>Descripción corta</Form.Label>
                        <Form.Control className='input events-form-description' required as="textarea" rows={3} id="description" />
                        <Form.Control.Feedback type="invalid">
                                Por favor escriba una descripción.
                            </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className='input-label'>Descripcion detallada</Form.Label>
                        <Form.Control className='input events-form-description' required as="textarea" rows={6} id='longDescription' />
                        <Form.Control.Feedback type="invalid">
                                Por favor escriba una descripción.
                            </Form.Control.Feedback>
                    </Form.Group>
                        
                    <Button className='button events-form-button' onClick={(e) => sendEvent(e)}>Enviar</Button>
                </Form>
                
            </FormCard>

        </Container>
        
    );
}

export default EventsForm;