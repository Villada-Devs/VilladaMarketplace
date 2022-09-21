import React from "react";

import Container from "react-bootstrap/esm/Container";

import "../styles/FormCard.css"

function FormCard({children}) {
    return(

        <Container className="form" fluid>
            {children}
        </Container>

    );
}

export default FormCard;