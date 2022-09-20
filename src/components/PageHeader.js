import React from "react";
import { useNavigate } from 'react-router-dom';

import Button from "react-bootstrap/esm/Button";

import "../styles/PageHeader.css"

function PageHeader(props) {

    const navigate = useNavigate();

    return (

        <div className="page-header">
            <h1 className="page-title">{props.title}</h1>
            <hr className="bold-hr"></hr>
            <p className="page-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
            <Button className='button' variant="primary" onClick={() => { navigate(props.buttonURL); }}>{props.button}</Button>
        </div>
        
    );
}

export default PageHeader;