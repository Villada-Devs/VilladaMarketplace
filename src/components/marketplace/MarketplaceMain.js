import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import PageHeader from "../PageHeader";
import SectionButton from "./SectionButton";

import BooksSection from "../../img/BooksSectionImg.png";
import ToolsSection from "../../img/ToolsSectionImg.png";
import UniformsSection from "../../img/UniformsSectionImg.png";

import "../../styles/marketplace/MarketplaceMain.css";

function MarketplaceMain() {
    return (

        <>

            <Container className="page-container" fluid>
                <PageHeader
                    title="Villada Marketplace"
                    button="Vender"
                />

                <div className="marketplace-categories">

                    <p className="categories-header">Comprar por Categoría</p>

                </div>

                <Row>
                    <SectionButton 
                        sectionImage={BooksSection}
                        sectionName="Libros y Apuntes"
                        sectionURL="Libros"
                    />

                    <SectionButton 
                        sectionImage={ToolsSection}
                        sectionName="Herramientas"
                        sectionURL="Herramientas"
                    />

                    <SectionButton 
                        sectionImage={UniformsSection}
                        sectionName="Uniformes"
                        sectionURL="Uniformes"
                    />
                </Row>

            </Container>
            
        </>

    );
}

export default MarketplaceMain;