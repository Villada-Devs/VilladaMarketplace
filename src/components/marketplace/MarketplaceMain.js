import React, {useContext} from "react";
import ContextConnected from "../../context/ContextConnected";
import { useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/esm/Button";

import PageHeader from "../PageHeader";
import SectionButton from "./SectionButton";

import BooksSection from "../../img/marketplace/BooksSectionImg.png";
import ToolsSection from "../../img/marketplace/ToolsSectionImg.png";
import UniformsSection from "../../img/marketplace/UniformsSectionImg.png";

import "../../styles/marketplace/MarketplaceMain.css";

function MarketplaceMain() {

    const Connected = useContext(ContextConnected);
    
    const navigate = useNavigate();
    
    return ( 

        <Container className="page-container" fluid>

            {Connected.userInfo? (

                <>
            
                    <PageHeader
                        pageHeader="Villada Marketplace"
                        pageDescription="Publicá, comprá o vendé herramientas, libros y uniformes que no utilices más."
                    >
                        
                        <Button className='button' variant="primary" onClick={() => { navigate("/Marketplace/formulario"); }}>Nueva Publicación</Button>
                    
                    </PageHeader>

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
                </>
            ) :
            (
                <>
                    <PageHeader
                        pageHeader="Villada Marketplace"
                        pageDescription="Publicá, comprá o vendé herramientas, libros y uniformes que no utilices más."
                    />

                    <div className="marketplace-categories">
                        <p className="categories-header">Iniciá sesión y comenzá a publicar!</p>
                    </div>

                </>
            )}
        </Container>

    );
}

export default MarketplaceMain;