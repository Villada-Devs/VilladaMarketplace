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
                <Col md={6}>
                        <img className='art-det-img' src={location.state.product_images[0].image} alt="Article" />
                </Col>

                <Col md={6} sm={12}>
                    <div className='art-det-info-cont'>
                        <User 
                            userName={location.state.created_by_user}
                            creationDate={location.state.creation_date}
                        />
                        
                        <h1 className='art-det-title'>{location.state.title}</h1>
                        <h1 className='art-det-price'>${location.state.price}</h1>

                        <p>Características</p>

                        <div className="art-det-table">

                            <table>
                                {
                                    Object.keys(location.state.props).map((val, k) => {
                                        return(
                                            <tr>
                                                <th className={k === 0? "top-left-corner no-border" : "no-border"}>{val}</th>
                                                <td className="no-border">{location.state.props[val]}</td>
                                            </tr>
                                        )
                                    })
                                    

                                }
                                
                                <tr>
                                    <th className="bottom-left-corner no-border">Estado</th>
                                    <td className="no-border">{location.state.status}</td>
                                </tr>
                            </table>

                        </div>

                        <Button 
                            className='button art-det-button' 
                            variant="primary" 
                            href={`https://api.whatsapp.com/send?phone=${location.state.tel}&text=Hola ${location.state.created_by_user}. Me interesa la publicación de tu libro ${location.state.title}!`}
                        ><FaWhatsapp className="whatsapp" />Contactar</Button>

                    </div>

                </Col>

            </Row>

        </Container>

    );

}

export default ArticleDetailedView;