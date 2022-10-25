import React, { useContext, useEffect, useState } from "react";

import Container from "react-bootstrap/esm/Container";

import PageHeader from "../PageHeader";
import EventsFilters from "./EventsFilters";
import EventCardR from "./EventCardR";
import EventCardL from "./EventCardL";

import ContextConnected from "../../context/ContextConnected";

import "../../styles/events/EventsMain.css";

function EventsMain() {

    const [eventsFiltered, setEventsFiltered] = useState([]);
    const [activeEventType, setActiveEventType] = useState(0);

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
            setEventsFiltered(data);
            console.log(data);
          }
        };
        loadEvents();
      }, [Connected.userInfo]);
    
    return(

        <>

            <Container className="page-container " fluid>

                <PageHeader 
                    pageHeader="Villada Eventos"
                    pageDescription="Informate sobre nuestros próximos eventos y actividades para padres."
                    button="Nuevo Evento"
                    buttonURL="/Eventos/formulario"
                />

                <EventsFilters 
                    events={Connected.events}
                    setEventsFiltered={setEventsFiltered}
                    activeEventType={activeEventType}
                    setActiveEventType={setActiveEventType}
                />

                <div className="events-content">
                    {
                        eventsFiltered.map((event, index) => {
                            if (index % 2 === 0) {
                                return <EventCardL key={index} userName={event.author} creationDate={event.created_date} eventTitle={event.title} eventDescription={event.short_description} eventDate={event.event_date} eventImage={event.imagesevent[0].image} />
                            } else {
                                return <EventCardR key={index} userName={event.author} creationDate={event.created_date} eventTitle={event.title} eventDescription={event.short_description} eventDate={event.event_date} eventImage={event.imagesevent[0].image} />
                            }
                        })
                    }
                </div>

            </Container>

        </>

    );

}

export default EventsMain;