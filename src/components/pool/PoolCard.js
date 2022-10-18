import React from "react";
import { FaWhatsapp } from "react-icons/fa"

import User from "../User";

import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import "../../styles/pool/PoolCard.css"

function PoolCard(props) {
    return (

            <Card className="pool-card">

                <Card.Body className="unpadding">
                    <User 
                        userName={props.userName}
                        // creationDate={props.creationDate}
                    />
                </Card.Body>

                <ListGroup className="list-group-flush unpadding">
                    <ListGroup.Item className="unpadding pool-card-item">Días disponibles: {props.days}</ListGroup.Item>
                    <ListGroup.Item className="unpadding pool-card-item">Lugares disponibles: {props.places}</ListGroup.Item>
                </ListGroup>

                <Card.Body className="unpadding">
                    <Button 
                        className='button pool-button' 
                        variant="primary" 
                        type="submit"
                        href={`https://api.whatsapp.com/send?phone= ${props.phoneNumber}&text=Buenas me interesa contactarte por el pool !`}
                    ><FaWhatsapp className="whatsapp" />Contactar</Button>
                </Card.Body>

            </Card>

    );
}

export default PoolCard;