import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';

import Button from "react-bootstrap/esm/Button";

import "../styles/PageHeader.css"
import ContextConnected from "../context/ContextConnected";

function PageHeader(props) {
    const Connected = useContext(ContextConnected)

    const navigate = useNavigate();

    return (

        <div className="page-header">
            <h1 className="page-title">{props.pageHeader}</h1>
            <hr className="bold-hr" />
            <p className="page-subtitle">{props.pageDescription}</p>
            
            {
                Connected && Connected.userInfo && Connected.userInfo.is_staff ?
                (<Button className='button' variant="primary" onClick={() => { navigate(props.buttonURL); }}>{props.button}</Button>) :
                null
            }

        </div>
        
    );
}

export default PageHeader;