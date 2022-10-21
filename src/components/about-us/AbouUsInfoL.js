import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutUsInfo(props) {
    return(

        <Container fluid>

            <Row>

                <Col>
                    <h2 className='about-event-title'>{props.aboutEventTitle}</h2>
                    <p className='about-event-info'>{props.aboutEventInfo}</p>
                </Col>

                <Col>
                    <img className='about-event-img' alt="" src={props.EventImg}></img>
                </Col>

            </Row>

        </Container>

    );
}

export default AboutUsInfo;