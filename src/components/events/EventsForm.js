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

    return (

        <Container className='form-container' fluid>

            <h1 className='form-header blue-section'>Nuevo Evento</h1>

            <FormCard>

                <ImageInput />

                <Form noValidate validated={validated} onSubmit={submit}>

                    <Row>

                        <Form.Group as={Col} md="6" controlId="validationCustom01">
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

                        <Form.Group as={Col} md="6" controlId="validationCustom02">
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
                        
                    <Button className='button form-button' type="submit">Enviar</Button>
                </Form>
                
            </FormCard>

        </Container>
        
    );
}

export default EventsForm;