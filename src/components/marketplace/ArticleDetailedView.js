import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import User from '../User';

import "../../styles/marketplace/ArticleDetailedView.css"

function ArticleDetailedView() {

    return(

        <Container className='page-container' fluid>

            <Row>

                <Col md={1}>
                    <div className='art-det-img-cont'></div>
                </Col>

                <Col md={5}>
                    <div className='art-det-img-cont'></div>
                </Col>

                <Col md={6}>
                    <div className='art-det-info-cont'>
                        <User 
                            userName="Matias"
                            creationDate="20 de Octubre 2022"
                        />
                        
                        <h1>Libro de Lengua</h1>
                        <h1>$2000</h1>
                    </div>
                </Col>

            </Row>

        </Container>

    );

}

export default ArticleDetailedView;