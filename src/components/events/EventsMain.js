import React from "react";

import Container from "react-bootstrap/esm/Container";

import PageHeader from "../PageHeader";
import EventsForm from "./EventsForm";
import EventCardR from "./EventCardR";
import EventCardL from "./EventCardL";

import InputFile from "../InputFile";

function EventsMain() {

    return(
        <>

            <Container className="page-container " fluid>

                <PageHeader 
                    title="Villada Eventos"
                    button="Nuevo Evento"
                />

                <EventsForm />

            </Container>

        </>
    );

}

/* 
<div className="events-content">
    <EventCardR />
    <EventCardL />
</div>
*/

export default EventsMain;