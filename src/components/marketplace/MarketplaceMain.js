import React from "react";

import Container from 'react-bootstrap/Container';
 
import PageHeader from "../PageHeader";

function MarketplaceMain() {
    return (

        <>

            <Container className="page-container">
                <PageHeader
                    title="Villada Marketplace"
                    button="Vender"
                />
            </Container>
            
        </>

    );
}

export default MarketplaceMain;