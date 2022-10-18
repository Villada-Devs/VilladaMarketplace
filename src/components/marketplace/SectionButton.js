import React from "react";
import { useNavigate } from 'react-router-dom';

import Col from 'react-bootstrap/Col';

import "../../styles/marketplace/SectionButton.css"

function SectionButton(props) {

    const navigate = useNavigate();

    return(

        <Col md={4} sm={12}>
            <div className="section-button" onClick={() => { navigate(`/Marketplace/${props.sectionURL}`); }}>

                <img className="section-button-image" alt='' src={props.sectionImage}></img>
                <p>{props.sectionName}</p>

            </div>
        </Col>


    );
}

export default SectionButton;