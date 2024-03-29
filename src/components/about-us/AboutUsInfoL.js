import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "../../styles/about-us/AboutUsInfo.css"

function AboutUsInfoL(props) {
    return(

        <Container className='about-info-cont' fluid>

            <Row className='row-center'>

                <Col className='about-info-l' md={7} sm={12}>
                    <h2 className='about-event-title blue-section'>{props.aboutEventTitle}</h2>
                    <p className='about-event-info'>{props.aboutEventInfo}</p>
                </Col>

                <Col className='about-img'>
                    <img className='about-event-img' alt="" src={props.aboutEventImg}></img>
                </Col>

            </Row>

        </Container>

    );
}

export default AboutUsInfoL;