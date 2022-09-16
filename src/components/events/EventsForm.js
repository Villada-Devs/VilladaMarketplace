import React, { useState } from 'react';
import { useForm } from "react-hook-form";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import "../../styles/events/EventsForm.css"

function EventsForm() {

    const { register, handleSubmit } = useForm();

    const setRegister = (data) => {
        console.log("entro al handlesubmit");
        console.log(data);
    }

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

            <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label className='input-label'>Foto</Form.Label>
            </Form.Group>
            <div>
                <form className='event-image-input-container' onSubmit={handleSubmit(setRegister)}>
                    <input className='event-image-input' type="file" {...register('image', { required: true })}></input>
                </form>
            </div>

            <Form noValidate validated={validated} onSubmit={submit}>

                <Row className="mb-3">

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

                <Row className="mb-3">

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className='input-label'>Descripción</Form.Label>
                        <Form.Control className='input events-description' as="textarea" />
                    </Form.Group>
                    
                </Row>
                <Button className='button' type="submit">Submit form</Button>
            </Form>
        </Container>
        
    );
}

export default EventsForm;