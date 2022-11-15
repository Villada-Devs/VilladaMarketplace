import React, { useContext, useEffect } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import ProductCard from './ProductCard';

import ContextConnected from "../../context/ContextConnected";

function ToolsSection() {

    const Connected = useContext(ContextConnected);

    useEffect(() => {
        const loadTools = async () => {
          const token = await JSON.parse(localStorage.getItem("token"));
          if (token) {
            const res = await fetch("http://villadaapidjango-env.eba-vaws9zih.us-east-1.elasticbeanstalk.com/api/v1/marketplace/tools/", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token.access_token}`
              },
            })
            const data = await res.json();
            Connected.setTools(data.results);
            console.log(data.results);
          }
        };
        loadTools();
    }, [Connected.userInfo]);

    return(

        <>

        <Container className='page-container' fluid>

            <h1>Herramientas</h1>
            <hr className='section-hr'></hr>

            <Row>

                <Col md={3}>

                    <Form.Group>
                        <Form.Label className='market-filter'>Ordenar por</Form.Label>

                            <Form.Check
                                className="market-filter-label"
                                reverse
                                name="group1"
                                label="Recientes"
                                type="radio"
                                id="lengua"
                            />

                            <Form.Check
                                className="market-filter-label"
                                reverse
                                name="group1"
                                label="Menor Precio"
                                type="radio"
                                id="matematicas"
                            />

                            <Form.Check
                                className="market-filter-label"
                                reverse
                                name="group1"
                                label="Mayor Precio"
                                type="radio"
                                id="historia"
                            />

                    </Form.Group>

                    <hr className='filter-hr'></hr>

                    <Form.Group controlId="validationCustom02">
                        <Form.Label className='market-filter'>Tipo</Form.Label>

                            <Form.Check
                                className="market-filter-label"
                                reverse
                                label="Herramientas"
                                type="checkbox"
                                id="lengua"
                            />

                            <Form.Check
                                className="market-filter-label"
                                reverse
                                label="Equipo de seguridad"
                                type="checkbox"
                                id="matematicas"
                            />

                            <Form.Check
                                className="market-filter-label"
                                reverse
                                label="Dibujo técnico"
                                type="checkbox"
                                id="historia"
                            />

                    </Form.Group>

                </Col>

                <Col>
                    
                    <Row>

                        {
                            Connected.tools.map((tool) => {

                                return (

                                    <ProductCard 
                                        key={tool.id}
                                        prodImage={tool.product_images[0].image}
                                        prodTitle={tool.tool}
                                        prodPrice={tool.price}
                                        prod={tool}
                                    />

                                );


                            })
                        }

                    </Row>

                </Col>

            </Row>

        </Container>

        </>

    );
}

export default ToolsSection;