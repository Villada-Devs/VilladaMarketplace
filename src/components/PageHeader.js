import React, { useContext } from "react";

import "../styles/PageHeader.css"

function PageHeader(props) {

    return (

        <div className="page-header">
            <h1 className="page-title">{props.pageHeader}</h1>
            <hr className="bold-hr" />
            <p className="page-subtitle">{props.pageDescription}</p>
            {props.children}
        </div>
        
    );
}

export default PageHeader;

/* 
            { 
                Connected && Connected.userInfo && Connected.userInfo.is_staff?
                (<Button className='button' variant="primary" onClick={() => { navigate(props.buttonURL); }}>{props.button}</Button>) :
                null
            }
*/