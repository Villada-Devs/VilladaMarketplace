import React from "react";
import { useNavigate } from 'react-router-dom';

import Button from "react-bootstrap/esm/Button";

import "../styles/PageHeader.css"

function PageHeader(props) {

    const navigate = useNavigate();

    return (

        <div className="page-header">
            <h1 className="page-title">{props.pageHeader}</h1>
            <hr className="bold-hr" />
            <p className="page-subtitle">{props.pageDescription}</p>
            <Button className='button' variant="primary" onClick={() => { navigate(props.buttonURL); }}>{props.button}</Button>
        </div>
        
    );
}

export default PageHeader;