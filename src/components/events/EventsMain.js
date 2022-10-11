import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Container from "react-bootstrap/esm/Container";

import PageHeader from "../PageHeader";
import EventCardR from "./EventCardR";
import EventCardL from "./EventCardL";

import Events from "./Events.json"

class axiEvents {
    id = 0;
    axiEventAuthor = '';
    axiEventTitle = '';
    axiEventBody = '';
    axiEventCreatedDate = '';
    axiEventDate = '';
    axiEventImages = '';
  
    constructor(id, axiEventAuthor, axiEventTitle, axiEventBody, axiEventCreatedDate, axiEventDate, axiEventImages) {
        this.id = id;
        this.axiEventAuthor = axiEventAuthor;
        this.axiEventTitle = axiEventTitle;
        this.axiEventBody = axiEventBody;
        this.axiEventCreatedDate = axiEventCreatedDate;
        this.axiEventDate = axiEventDate;
        this.axiEventImages = axiEventImages;
    }
  
}

function EventsMain() {

    const [event, setEvent] = useState([]);

    useEffect(() => {
        axios.get('http://villadaapidjango-env.eba-vaws9zih.us-east-1.elasticbeanstalk.com/api/v1/events/')
        .then(res => {
            console.log(res.data)
            const eventMapped = res.data.map((e) => {
                let event = new axiEvents(e.id, e.author, e.title, e.body, e.created_date, e.event_date, e.imagesevent);
                return event;
            });

            setEvent(eventMapped);
        }).catch(err => {
            console.log(err)
        })
    }, [])
    
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
                        Events.map((e) => {
                            if(e.id % 2 === 0) {
                                return (
                                    <EventCardR
                                        key={e.id}
                                        userName={e.author}
                                        creationDate={e.created_date}
                                        eventTitle={e.title}
                                        eventDescription={e.short_description}
                                        eventDate={e.event_date}
                                        eventImage={e.images_event}
                                    />
                                )
                            }
                            return(
                                <EventCardL
                                    key={e.id}
                                    userName={e.author}
                                    creationDate={e.created_date}
                                    eventTitle={e.title}
                                    eventDescription={e.short_description}
                                    eventDate={e.event_date}
                                    eventImage={e.images_event}
                                />
                            )
                        })
                    }

                </div>

            </Container>

        </>

    );

}

export default EventsMain;

/* 
{
    event.map((e) => (
        <EventCardR 
            userName="Matias"
            creationDate={e.axiEventCreatedDate}
            eventTitle={e.axiEventTitle}
            eventDescription={e.axiEventBody}
            eventDate={e.axiEventDate}
            eventImage={e.axiEventImages}
        />
    ))
}
*/