import { FaWhatsapp } from "react-icons/fa"

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import User from '../User';

import "../../styles/marketplace/ArticleDetailedView.css"

function ArticleDetailedView(props) {

    return(

        <Container className='page-container' fluid>

            <Row>

                <Col md={1}>
                    <div className='art-det-imgs-cont'></div>
                </Col>

                <Col md={5}>
                    <div className='art-det-img-cont'></div>
                </Col>

                <Col md={6} sm={12}>
                    <div className='art-det-info-cont'>
                        <User 
                            userName="Matias"
                            creationDate="20 de Octubre 2022"
                        />
                        
                        <h1 className='art-det-title'>Libro de Lengua</h1>
                        <h1 className='art-det-price'>$2000</h1>

                        <p>Características</p>

                        <div className="art-det-table">

                            <table>
                                <tr>
                                    <th className="top-left-corner">Autor</th>
                                    <td>Bill Gates</td>
                                </tr>
                                <tr>
                                    <th>Editorial</th>
                                    <td>555 77 854</td>
                                </tr>
                                <tr>
                                    <th>Materia</th>
                                    <td>555 77 855</td>
                                </tr>
                                <tr>
                                    <th>Año</th>
                                    <td>555 77 855</td>
                                </tr>
                                <tr>
                                    <th className="bottom-left-corner no-border">Estado</th>
                                    <td className="no-border">555 77 855</td>
                                </tr>
                            </table>

                        </div>

                        <Button 
                            className='button' 
                            variant="primary" 
                            href={`https://api.whatsapp.com/send?phone= ${props.phoneNumber}&text=Buenas me interesa contactarte por el pool !`}
                        ><FaWhatsapp className="whatsapp" />Contactar</Button>

                    </div>

                </Col>

            </Row>

        </Container>

    );

}

export default ArticleDetailedView;