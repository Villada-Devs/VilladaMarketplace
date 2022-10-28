import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import FormCard from '../FormCard';

import "../../styles/Forms.css"
import { useNavigate } from 'react-router-dom';

function PoolForm() {
    const navigate = useNavigate();

    const [validated, setValidated] = useState(false);
    const [position, setPosition] = useState(null);

    const HandleClickMap = () => {
        const map = useMapEvents({
            click(e) {
                setPosition(e.latlng)
                map.flyTo(e.latlng)
            }
        })
    
        return position == null ? null
        :
        <Marker position={position}></Marker>;
    };

    const sendPool = async (event) => {
        event.preventDefault();

        const token = await JSON.parse(localStorage.getItem("token"));
        if (token) {
            const lat = position.lat;
            const lng = position.lng;
            const locality = "1";
            const neighborhood = "1";
            const slots = document.querySelector("#slots").value;
            const first_tel = document.querySelector("#first_tel").value;

            var formdata = new FormData();
            formdata.append("lat", lat);
            formdata.append("lng", lng);
            formdata.append("locality", locality);
            formdata.append("neighborhood", neighborhood);
            formdata.append("slots", slots);
            formdata.append("first_tel", first_tel);
            formdata.append("alternative_tel", "3516271026");

            await fetch("http://villadaapidjango-env.eba-vaws9zih.us-east-1.elasticbeanstalk.com/api/v1/pools/", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token.access_token}`
                },
                body: formdata
            }).then(() => {
                navigate("/Pool");
            })
        }
    }

    React.useEffect(() => {
        
        const L = require("leaflet");
    
        delete L.Icon.Default.prototype._getIconUrl;
    
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
          iconUrl: require("leaflet/dist/images/marker-icon.png"),
          shadowUrl: require("leaflet/dist/images/marker-shadow.png")
        });
      }, []);

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

            <h1 className='form-header blue-section'>Nuevo Pool</h1>

            <FormCard>

                <Form.Label className='input-label'>Marque en el mapa su direccion</Form.Label>

                {position == null ? null
                :
                <>
                    <p>Latitud: {position.lat} Long: {position.lng}</p>
                </>
                }

                <MapContainer className='map-container pool-form-map' center={[-31.404829, -64.196187]} zoom={12} scrollWheelZoom={false}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <HandleClickMap />
                </MapContainer>

                <Form noValidate validated={validated} onSubmit={submit}>

                    <Row>

                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label className='input-label'>Lugares Disponibles</Form.Label>
                            <Form.Control
                                className='input'
                                type="text"
                                required
                                id='slots'
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor seleccione sus lugares disponibles.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label className='input-label'>Dias Disponibles</Form.Label>
                            <div className='pool-check-container'>

                                <Form.Check
                                    className='pool-check'
                                    inline
                                    label="Lu"
                                    name="group1"
                                    type="checkbox"
                                    id="lunes"
                                />

                                <Form.Check
                                    className='pool-check'
                                    inline
                                    label="Ma"
                                    name="group1"
                                    type="checkbox"
                                    id="martes"
                                />

                                <Form.Check
                                    className='pool-check'
                                    inline
                                    label="Mi"
                                    name="group1"
                                    type="checkbox"
                                    id="miercoles"
                                />

                                <Form.Check
                                    className='pool-check'
                                    inline
                                    label="Ju"
                                    name="group1"
                                    type="checkbox"
                                    id="jueves"
                                />

                                <Form.Check
                                    className='pool-check'
                                    inline
                                    label="Vi"
                                    name="group1"
                                    type="checkbox"
                                    id="viernes"
                                />

                            </div>
                            <Form.Control.Feedback type="invalid">
                                Por favor seleccione sus dias disponibles.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="validationCustom01">
                            <Form.Label className='input-label'>Número de teléfono</Form.Label>
                            <Form.Control
                                className='input'
                                type="text"
                                required
                                id='first_tel'
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor ingrese un contacto.
                            </Form.Control.Feedback>
                        </Form.Group>

                    </Row>
                        
                    <Button className='button form-button' type="submit" onClick={(e) => sendPool(e)}>Enviar</Button>
                </Form>
                
            </FormCard>

        </Container>

    );
}

export default PoolForm;
