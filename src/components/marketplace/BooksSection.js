import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import ProductCard from './ProductCard';

function BooksSection() {
    return(

        <>

        <Container className='page-container' fluid>

            <h1>Libros y Apuntes</h1>
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
                        <Form.Label className='market-filter'>Materia</Form.Label>

                            <Form.Check
                                className="market-filter-label"
                                reverse
                                label="Lengua"
                                type="checkbox"
                                id="lengua"
                            />

                            <Form.Check
                                className="market-filter-label"
                                reverse
                                label="Matemátcas"
                                type="checkbox"
                                id="matematicas"
                            />

                            <Form.Check
                                className="market-filter-label"
                                reverse
                                label="Historia"
                                type="checkbox"
                                id="historia"
                            />

                            <Form.Check
                                className="market-filter-label"
                                reverse
                                label="Geografía"
                                type="checkbox"
                                id="geografia"
                            />

                            <Form.Check
                                className="market-filter-label"
                                reverse
                                label="Biología"
                                type="checkbox"
                                id="biologia"
                            />

                            <Form.Check
                                className="market-filter-label"
                                reverse
                                label="Inglés"
                                type="checkbox"
                                id="ingles"
                            />
                    </Form.Group>

                    <hr className='filter-hr'></hr>

                    <Form.Group controlId="validationCustom02">
                        <Form.Label className='market-filter'>Año</Form.Label>

                            <Form.Check
                                className="market-filter-label"
                                reverse
                                label="1°"
                                type="checkbox"
                                id="1"
                            />

                            <Form.Check
                                className="market-filter-label"
                                reverse
                                label="2°"
                                type="checkbox"
                                id="2"
                            />

                            <Form.Check
                                className="market-filter-label"
                                reverse
                                label="3°"
                                type="checkbox"
                                id="3"
                            />

                            <Form.Check
                                className="market-filter-label"
                                reverse
                                label="4°"
                                type="checkbox"
                                id="4"
                            />

                            <Form.Check
                                className="market-filter-label"
                                reverse
                                label="5°"
                                type="checkbox"
                                id="5"
                            />

                            <Form.Check
                                className="market-filter-label"
                                reverse
                                label="6°"
                                type="checkbox"
                                id="6"
                            />

                            <Form.Check
                                className="market-filter-label"
                                reverse
                                label="7°"
                                type="checkbox"
                                id="7"
                            />
                    </Form.Group>

                </Col>

                <Col>
                    
                    <Row>

                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />

                    </Row>

                </Col>

            </Row>

        </Container>

        </>

    );
}

export default BooksSection;