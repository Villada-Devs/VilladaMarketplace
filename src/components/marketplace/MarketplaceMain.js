import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import PageHeader from "../PageHeader";
import SectionButton from "./SectionButton";

import BooksSection from "../../img/marketplace/BooksSectionImg.png";
import ToolsSection from "../../img/marketplace/ToolsSectionImg.png";
import UniformsSection from "../../img/marketplace/UniformsSectionImg.png";

import "../../styles/marketplace/MarketplaceMain.css";

function MarketplaceMain() {
    return (

        <>

            <Container className="page-container" fluid>
                <PageHeader
                    pageHeader="Villada Marketplace"
                    pageDescription="Publicá, comprá o vendé herramientas, libros y uniformes que no utilices más."
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