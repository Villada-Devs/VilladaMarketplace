import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import ImageInput from '../ImageInput';
import FormCard from '../FormCard';

import "../../styles/Forms.css"

function EventsForm() {

    const [validated, setValidated] = useState(false);

    const submit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }

    setValidated(true);
    };

    const [selectedImages, setSelectedImages] = useState([]);
    const onSelectFile = (event) => {
        const selectedFiles = event.target.files;
        const selectedFilesArray = Array.from(selectedFiles);

        const imagesArray = selectedFilesArray.map((file) => {
            return URL.createObjectURL(file);
        });

        setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    };

    const sendEvent = async (event) => {
        event.preventDefault();
        const token = await JSON.parse(localStorage.getItem("token"));
        if (token) {
            const res = await fetch("http://villadaapidjango-env.eba-vaws9zih.us-east-1.elasticbeanstalk.com/api/v1/events/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token.access_token}`
                },
                body: JSON.stringify({
                    title: event.target.title.value,
                    body: event.target.body.value,
                    event_date: event.target.event_date.value,
                    imagesevent: selectedImages
                })
            })
            const data = await res.json();
            console.log(data);
        }
    };

    return (

        <Container className='form-container' fluid>

            <h1 className='form-header blue-section'>Nuevo Evento</h1>

            <FormCard>

                <ImageInput />

                <Form noValidate validated={validated} onSubmit={submit}>

                    <Row>

                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label className='input-label'>Título</Form.Label>
                            <Form.Control
                                className='input'
                                type="text"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor escriba un título.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label className='input-label'>Tipo</Form.Label>
                            <Form.Select required className='input'>
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

                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label className='input-label'>Fecha</Form.Label>
                            <Form.Control
                                className='input'
                                type="date"
                                required 
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor seleccione una fecha.
                            </Form.Control.Feedback>
                        </Form.Group>

                    </Row>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label className='input-label'>Descripción corta</Form.Label>
                        <Form.Control className='input events-form-description' required as="textarea" rows={3} />
                        <Form.Control.Feedback type="invalid">
                                Por favor escriba una descripción.
                            </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label className='input-label'>Descripcion detallada</Form.Label>
                        <Form.Control className='input events-form-description' required as="textarea" rows={6} />
                        <Form.Control.Feedback type="invalid">
                                Por favor escriba una descripción.
                            </Form.Control.Feedback>
                    </Form.Group>
                        
                    <Button className='button events-form-button' onClick={() => sendEvent()}>Enviar</Button>
                </Form>
                
            </FormCard>

        </Container>
        
    );
}

export default EventsForm;