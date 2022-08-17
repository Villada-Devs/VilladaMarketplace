import React from "react";

import Container from "react-bootstrap/esm/Container";

import PageHeader from "../PageHeader";
import EventCardR from "./EventCardR";
import EventCardL from "./EventCardL";

function EventsMain() {

    return(
        <>

            <Container className="page-container " fluid>

                <PageHeader 
                    title="Villada Eventos"
                    button="Nuevo Evento"
                />

                <div className="events-content">
                    <EventCardR />
                    <EventCardL />
                </div>

            </Container>

        </>
    );

}

export default EventsMain;