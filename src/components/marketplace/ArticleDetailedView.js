import { FaWhatsapp } from "react-icons/fa"

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import User from '../User';

import "../../styles/marketplace/ArticleDetailedView.css"
import { useLocation } from "react-router-dom";

function ArticleDetailedView(props) {
    const location = useLocation();

    return(

        <Container className='page-container' fluid>

            <Row>
                <Col md={5}>
                <img className='art-det-img-cont' src={location.state.imagesbook[0].image} />
                </Col>

                <Col md={6} sm={12}>
                    <div className='art-det-info-cont'>
                        <User 
                            userName={location.state.author}
                            creationDate={location.state.creation_date}
                        />
                        
                        <h1 className='art-det-title'>{location.state.title}</h1>
                        <h1 className='art-det-price'>${location.state.price}</h1>

                        <p>Características</p>

                        <div className="art-det-table">

                            <table>
                                <tr>
                                    <th className="top-left-corner">Autor</th>
                                    <td>{location.state.author}</td>
                                </tr>
                                <tr>
                                    <th>Editorial</th>
                                    <td>{location.state.editorial}</td>
                                </tr>
                                <tr>
                                    <th>Materia</th>
                                    <td>{location.state.subject}</td>
                                </tr>
                                <tr>
                                    <th>Año</th>
                                    <td>{location.state.course}</td>
                                </tr>
                                <tr>
                                    <th className="bottom-left-corner no-border">Estado</th>
                                    <td className="no-border">{location.state.status}</td>
                                </tr>
                            </table>

                        </div>

                        <Button 
                            className='button' 
                            variant="primary" 
                            href={`https://api.whatsapp.com/send?phone=${location.state.tel}&text=Hola. Me interesa contactarte por el pool!`}
                        ><FaWhatsapp className="whatsapp" />Contactar</Button>

                    </div>

                </Col>

            </Row>

        </Container>

    );

}

export default ArticleDetailedView;