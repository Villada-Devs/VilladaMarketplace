import React from "react";

import User from "../User";

import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import "../../styles/pool/PoolCard.css"

function PoolCard(props) {
    return (

        <Col lg={4} md={6} sm={12}>
            <Card className="pool-card">

                <Card.Body className="unpadding">
                    <User 
                        userName={props.userName}
                        // creationDate={props.creationDate}
                    />
                </Card.Body>

                <div className="pool-ubic"></div>

                <ListGroup className="list-group-flush unpadding">
                    <ListGroup.Item className="unpadding pool-card-item">{props.locality}, {props.neighborhood}</ListGroup.Item>
                    <ListGroup.Item className="unpadding pool-card-item">{props.days}</ListGroup.Item>
                    <ListGroup.Item className="unpadding pool-card-item">{props.places} Lugares</ListGroup.Item>
                </ListGroup>

                <Card.Body className="unpadding">
                    <Button className='button pool-button' variant="primary" type="submit">Contactar</Button>
                </Card.Body>

                </Card>
        </Col>

    );
}

export default PoolCard;