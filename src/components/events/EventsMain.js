import React, { useContext, useEffect } from "react";

import Container from "react-bootstrap/esm/Container";

import PageHeader from "../PageHeader";
import EventCardR from "./EventCardR";
import EventCardL from "./EventCardL";

import ContextConnected from "../../context/ContextConnected";

function EventsMain() {
    const Connected = useContext(ContextConnected)

    useEffect(() => {
        const loadEvents = async () => {
          const token = await JSON.parse(localStorage.getItem("token"));
          if (token) {
            const res = await fetch("http://villadaapidjango-env.eba-vaws9zih.us-east-1.elasticbeanstalk.com/api/v1/events/", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token.access_token}`
              },
            })
            const data = await res.json();
            Connected.setEvents(data);
            console.log(data);
          }
        };
        loadEvents();
      }, [Connected.userInfo]);
    
    return(
        <>

            <Container className="page-container " fluid>

                <PageHeader 
                    title="Villada Eventos"
                    button="Nuevo Evento"
                    buttonURL="/Eventos/formulario"
                />

                <div className="events-content">
                    {
                        Connected.events?.map((event, index) => {
                            if (index % 2 === 0) {
                                return <EventCardL key={index} userName={event.author} creationDate={event.created_date} eventTitle={event.title} eventDescription={event.body} eventDate={event.event_date} eventImage={event.imagesevent[0].image} />
                            } else {
                                return <EventCardR key={index} userName={event.author} creationDate={event.created_date} eventTitle={event.title} eventDescription={event.body} eventDate={event.event_date} eventImage={event.imagesevent[0].image} />
                            }
                        })
                    }
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