import React, { useState } from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import ImageInput from "../ImageInput";
import FormCard from "../FormCard";

import BooksSection from "../../img/marketplace/BooksSectionImg.png";
import ToolsSection from "../../img/marketplace/ToolsSectionImg.png";
import UniformsSection from "../../img/marketplace/UniformsSectionImg.png";

import "../../styles/marketplace/MarketplaceForm.css"

function MarketplaceForm() {

    const [articleType, setArticleType] = useState(null)

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
    }

    return (

        <Container className="form-container">

            <h1 className="form-header blue-section">Nueva Publicación</h1>

            <div className="form-type-selection-container">

                <FormCard>
                    <h3 className="form-type-header">Seleccione la categoría de su artículo</h3>

                    <Row>
                        <Col md={4} sm={12}>
                            <button className="form-type-btn" onClick={() => setArticleType(0)}><img alt="" className="form-type-icon-btn" src={BooksSection}></img>Libros y apuntes</button>
                        </Col>
                        <Col md={4} sm={12}>
                            <button className="form-type-btn" onClick={() => setArticleType(1)}><img alt="" className="form-type-icon-btn" src={ToolsSection}></img>Herramientas</button>
                        </Col>
                        <Col md={4} sm={12}>
                            <button className="form-type-btn" onClick={() => setArticleType(2)}><img alt="" className="form-type-icon-btn" src={UniformsSection}></img>Uniformes</button>
                        </Col>
                    </Row>
                </FormCard>

            </div>

                <Form noValidate validated={validated} onSubmit={submit}>

                    {
                        articleType === 0 ?
                        
                            <>

                                <FormCard>

                                    <h2 className="form-type-header-type">Libros y Apuntes</h2>

                                    <ImageInput setSendImages={setSendImages} setSelectedImages={setSelectedImages} selectedImages={selectedImages} sendImages={sendImages} />

                                    <Row>

                                        <Form.Group>
                                            <Form.Label className='input-label'>Título</Form.Label>
                                            <Form.Control
                                                className='input'
                                                type="text"
                                                id='book-title'
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Por favor escriba un título.
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group as={Col} md="6">
                                            <Form.Label className='input-label'>Autor</Form.Label>
                                            <Form.Control
                                                className='input'
                                                type="text"
                                                id='book-author'
                                                placeholder="Opcional"
                                            />
                                        </Form.Group>

                                        <Form.Group as={Col} md="6">
                                            <Form.Label className='input-label'>Editorial</Form.Label>
                                            <Form.Control
                                                className='input'
                                                type="text"
                                                id='book-editorial'
                                                placeholder="Opcional"
                                            />
                                        </Form.Group>

                                        <Form.Group as={Col} md="4">
                                            <Form.Label className='input-label'>Materia</Form.Label>
                                            <Form.Select required className='input' id='type'>
                                                <option value=""></option>
                                                <option value="language">Lengua</option>
                                                <option value="math">Matemáticas</option>
                                                <option value="history">Historia</option>
                                                <option value="geography">Geografía</option>
                                                <option value="biology">Biología</option>
                                                <option value="english">Inglés</option>
                                            </Form.Select>
                                            <Form.Control.Feedback type="invalid">
                                                Por favor seleccione una materia.
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group as={Col} md="4">
                                            <Form.Label className='input-label'>Curso</Form.Label>
                                            <Form.Select required className='input' id='book-curse'>
                                                <option value=""></option>
                                                <option value="1">1°</option>
                                                <option value="2">2°</option>
                                                <option value="3">3°</option>
                                                <option value="4">4°</option>
                                                <option value="5">5°</option>
                                                <option value="6">6°</option>
                                                <option value="7">7°</option>
                                            </Form.Select>
                                            <Form.Control.Feedback type="invalid">
                                                Por favor seleccione un curso.
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group as={Col} md="4">
                                            <Form.Label className='input-label'>Estado</Form.Label>
                                            <Form.Select required className='input' id='book-state'>
                                                <option value=""></option>
                                                <option value="1">Usado</option>
                                                <option value="2">Casi nuevo</option>
                                                <option value="3">Excelente</option>
                                            </Form.Select>
                                            <Form.Control.Feedback type="invalid">
                                                Por favor seleccione un estado.
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                    </Row>

                                    <Button className='button' onClick={(e) => sendEvent(e)}>Publicar</Button>

                                </FormCard>

                            </>

                        : articleType === 1 ?

                            <>

                            <FormCard>

                                <h2 className="form-type-header-type">Herramientas</h2>

                                <ImageInput setSendImages={setSendImages} setSelectedImages={setSelectedImages} selectedImages={selectedImages} sendImages={sendImages} />

                                <Row>

                                    <Form.Group as={Col} md="6">
                                        <Form.Label className='input-label'>Artículo</Form.Label>
                                        <Form.Control
                                            className='input'
                                            type="text"
                                            id='tool'
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor escriba cuál es su artículo.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} md="6">
                                        <Form.Label className='input-label'>Estado</Form.Label>
                                        <Form.Select required className='input' id='tool-state'>
                                            <option value=""></option>
                                            <option value="1">Usado</option>
                                            <option value="2">Casi nuevo</option>
                                            <option value="3">Excelente</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            Por favor seleccione un estado.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    
                                    <Form.Group>
                                        <Form.Label className='input-label'>Descripción</Form.Label>
                                        <Form.Control 
                                            className='input events-form-description' 
                                            required 
                                            as="textarea" 
                                            rows={3} 
                                            id="tool-description"
                                            placeholder="Opcional"
                                        />
                                    </Form.Group>

                                </Row>

                                <Button className='button' onClick={(e) => sendEvent(e)}>Publicar</Button>

                            </FormCard>

                                    
                            </>
                        : articleType === 2 ?

                            <>

                                <FormCard>

                                    <h2 className="form-type-header-type">Uniformes</h2>

                                    <ImageInput setSendImages={setSendImages} setSelectedImages={setSelectedImages} selectedImages={selectedImages} sendImages={sendImages} />

                                    <Row>

                                        <Form.Group>
                                            <Form.Label className='input-label'>Artículo</Form.Label>
                                            <Form.Control
                                                className='input'
                                                type="text"
                                                id='uniform'
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Por favor escriba cuál es su artículo.
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group as={Col} md="6">
                                            <Form.Label className='input-label'>Talle</Form.Label>
                                            <Form.Select required className='input' id='uniform-size'>
                                                <option value=""></option>
                                                <option value="XS">XS</option>
                                                <option value="S">S</option>
                                                <option value="M">M</option>
                                                <option value="L">L</option>
                                                <option value="XL">XL</option>
                                                <option value="XXL">XXL</option>
                                            </Form.Select>
                                            <Form.Control.Feedback type="invalid">
                                                Por favor seleccione un talle.
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group as={Col} md="6">
                                            <Form.Label className='input-label'>Estado</Form.Label>
                                            <Form.Select required className='input' id='uniform-state'>
                                                <option value=""></option>
                                                <option value="1">Usado</option>
                                                <option value="2">Casi nuevo</option>
                                                <option value="3">Excelente</option>
                                            </Form.Select>
                                            <Form.Control.Feedback type="invalid">
                                                Por favor seleccione un estado.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        
                                        <Form.Group>
                                            <Form.Label className='input-label'>Descripción</Form.Label>
                                            <Form.Control 
                                                className='input events-form-description' 
                                                required 
                                                as="textarea" 
                                                rows={3} 
                                                id="uniform-description"
                                                placeholder="Opcional" 
                                            />
                                        </Form.Group>

                                    </Row>

                                    <Button className='button' onClick={(e) => sendEvent(e)}>Publicar</Button>

                                </FormCard>

                            </>
                        : null
                    }

                </Form>

        </Container>

    );
}

export default MarketplaceForm;