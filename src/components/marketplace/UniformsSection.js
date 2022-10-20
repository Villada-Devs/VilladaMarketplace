import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import ProductCard from './ProductCard';

function UniformsSection() {
    return(

        <Container className='page-container' fluid>

            <h1>Uniformes</h1>
            <hr className='section-hr'></hr>

            <Row>

                <Col md={3}>

                    <Form.Group>
                        <Form.Label className='market-filter'>Ordenar por</Form.Label>

                            <Form.Check
                                className="market-filter-label"
                                reverse
                                name="order"
                                label="Recientes"
                                type="radio"
                                id="lengua"
                            />

                            <Form.Check
                                className="market-filter-label"
                                reverse
                                name="order"
                                label="Menor Precio"
                                type="radio"
                                id="matematicas"
                            />

                            <Form.Check
                                className="market-filter-label"
                                reverse
                                name="order"
                                label="Mayor Precio"
                                type="radio"
                                id="historia"
                            />

                    </Form.Group>

                    <hr className='filter-hr'></hr>

                    <Form.Group>

                        <Form.Label className='market-filter'>Tipo</Form.Label>

                            <Form.Check
                                className="market-filter-label"
                                reverse
                                label="Remera"
                                type="checkbox"
                                id="lengua"
                            />

                            <Form.Check
                                className="market-filter-label"
                                reverse
                                label="Chomba"
                                type="checkbox"
                                id="matematicas"
                            />

                            <Form.Check
                                className="market-filter-label"
                                reverse
                                label="Buzo"
                                type="checkbox"
                                id="historia"
                            />

                            <Form.Check
                                className="market-filter-label"
                                reverse
                                label="Campera"
                                type="checkbox"
                                id="historia"
                            />

                            <Form.Check
                                className="market-filter-label"
                                reverse
                                label="Guardapolvo"
                                type="checkbox"
                                id="historia"
                            />

                    </Form.Group>

                    <hr className='filter-hr'></hr>

                    <Form.Group>

                        <Form.Label className='market-filter'>Talle</Form.Label>

                            <Form.Check
                                className="market-filter-label"
                                reverse
                                label="S"
                                type="checkbox"
                                id="lengua"
                            />

                            <Form.Check
                                className="market-filter-label"
                                reverse
                                label="M"
                                type="checkbox"
                                id="matematicas"
                            />

                            <Form.Check
                                className="market-filter-label"
                                reverse
                                label="L"
                                type="checkbox"
                                id="historia"
                            />

                            <Form.Check
                                className="market-filter-label"
                                reverse
                                label="XL"
                                type="checkbox"
                                id="historia"
                            />

                            <Form.Check
                                className="market-filter-label"
                                reverse
                                label="XXL"
                                type="checkbox"
                                id="historia"
                            />

                    </Form.Group>

                </Col>

                <Col>
                    
                    <Row>

                        <ProductCard
                            prodTitle="Buzo ITS"
                            prodPrice="5500"
                         />
                         <ProductCard
                            prodTitle="Buzo ITS"
                            prodPrice="5500"
                         />
                         <ProductCard
                            prodTitle="Buzo ITS"
                            prodPrice="5500"
                         />
                         <ProductCard
                            prodTitle="Buzo ITS"
                            prodPrice="5500"
                         />
                         <ProductCard
                            prodTitle="Buzo ITS"
                            prodPrice="5500"
                         />
                         <ProductCard
                            prodTitle="Buzo ITS"
                            prodPrice="5500"
                         />
                         <ProductCard
                            prodTitle="Buzo ITS"
                            prodPrice="5500"
                         />
                         <ProductCard
                            prodTitle="Buzo ITS"
                            prodPrice="5500"
                         />
                         <ProductCard
                            prodTitle="Buzo ITS"
                            prodPrice="5500"
                         />

                    </Row>

                </Col>

            </Row>

        </Container>

    );
}

export default UniformsSection;