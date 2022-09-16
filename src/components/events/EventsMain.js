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
                    <EventCardR 
                        userName="Matias"
                        creationDate="16 de septiembre 2022"
                        eventTitle="Titulo del Evento"
                        eventDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        eventDate="14 de octubre 2022"
                    />
                    <EventCardL 
                        userName="Matias"
                        creationDate="16 de septiembre 2022"
                        eventTitle="Titulo del Evento"
                        eventDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        eventDate="14 de octubre 2022"
                    />
                </div>

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