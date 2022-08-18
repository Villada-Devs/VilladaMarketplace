import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import PageHeader from "../PageHeader";
import PoolFilter from "./PoolFilter";
import PoolCard from "./PoolCard";

import "../../styles/pool/PoolMain.css"

function PoolMain() {
    return (

        <Container className="page-container" fluid>

            <PageHeader 
                title="Villada Pool"
                button="Nuevo Pool"
            />

            <PoolFilter />
                
            <Row>
                <PoolCard 
                    locality="Córdoba Capital"
                    neighborhood="Alta Córdoba"
                    days="Lu Ma Mi Ju Vi"
                    places="2"
                />
                <PoolCard 
                    locality="Córdoba Capital"
                    neighborhood="Alta Córdoba"
                    days="Lu Ma Mi Ju Vi"
                    places="2"
                />
                <PoolCard 
                    locality="Córdoba Capital"
                    neighborhood="Alta Córdoba"
                    days="Lu Ma Mi Ju Vi"
                    places="2"
                />
                <PoolCard 
                    locality="Córdoba Capital"
                    neighborhood="Alta Córdoba"
                    days="Lu Ma Mi Ju Vi"
                    places="2"
                />
                <PoolCard 
                    locality="Córdoba Capital"
                    neighborhood="Alta Córdoba"
                    days="Lu Ma Mi Ju Vi"
                    places="2"
                />
            </Row>

        </Container>
    );
}

export default PoolMain;