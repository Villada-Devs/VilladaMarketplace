import React from "react";
import Col from 'react-bootstrap/Col';

import "../../styles/marketplace/SectionButton.css"

function SectionButton(props) {
    return(

        <Col md={4} sm={12}>
            <div className="section-button">

                <img className="section-button-image" alt='' src={props.sectionImage}></img>
                <p>{props.sectionName}</p>

            </div>
        </Col>


    );
}

export default SectionButton;