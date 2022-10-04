import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import FormCard from '../FormCard';

import ImageInput from "../../img/Image Input.png"

import "../../styles/events/EventsForm.css"

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

        const imagesArray = selectedFilesArray.map(async (file) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            return await new Promise((resolve, reject) => {
                reader.onload = function () {
                    resolve(reader.result);
                };
                reader.onerror = function (error) {
                    reject(error);
                }
            });
        });

        const fIA = imagesArray.map(async (image) => {
            const imageSrc = await image;
            return imageSrc;
        });


        console.log(fIA)

        setSelectedImages((previousImages) => previousImages.concat(fIA));
    };

    const sendEvent = async () => {
        const token = await JSON.parse(localStorage.getItem("token"));
        if (token) {
            const title = document.querySelector('#validationCustom01').value;
            const event_date = new Date(document.querySelector('#validationCustom02').value).toISOString();
            const body = document.querySelector('#description').value;
            const short_description = document.querySelector('#short_description').value;

            console.log(title, event_date, body, short_description)
            console.log(selectedImages)

            const res = await fetch("http://villadaapidjango-env.eba-vaws9zih.us-east-1.elasticbeanstalk.com/api/v1/events/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token.access_token}`
                },
                body: JSON.stringify({
                    title,
                    body,
                    short_description,
                    event_date,
                    uploaded_images: selectedImages
                })
            })
            const data = await res.json();
            console.log(data);
        }
    };

    return (

        <Container className='form-container' fluid>

            <h1 className='events-form-header blue-section'>Nuevo Evento</h1>

            <FormCard>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label className='input-label events-form-image-label'>Foto</Form.Label>
                    <div className='events-form-image-input-container'>

                        <Form.Control 
                            className='events-form-image-input' 
                            type="file" 
                            multiple 
                            accept='image/png , image/jpeg'
                            onChange={onSelectFile}
                        />

                        <img className='image-input-icon' alt='' src={ImageInput} />
                        <p>Arrastra aquí tus imágenes, o <span className='blue-section'>Busca</span></p>
                    </div>
                </Form.Group>
                
                <div className='events-form-preview'>
                    {selectedImages &&
                        selectedImages.map((image, index) => {
                            return(
                                <div className='preview-image-container' key={index}>
                                    <img className='preview-image' alt='' src={image}></img>
                                    <CloseButton className='image-delete-button' onClick={() => 
                                            setSelectedImages(selectedImages.filter((e) => e !== image))
                                        }
                                    />
                                </div>
                            )
                        })
                    }
                </div>

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

                    <Form.Group>
                        <Form.Label className='input-label'>Descripción corta</Form.Label>
                        <Form.Control className='input events-form-description' id='short_description' required as="textarea" rows={3} />
                        <Form.Control.Feedback type="invalid">
                                Por favor escriba una descripción.
                            </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className='input-label'>Descripcion detallada</Form.Label>
                        <Form.Control className='input events-form-description' id='description' required as="textarea" rows={6} />
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