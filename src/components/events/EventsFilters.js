import { useEffect } from "react";

import Dropdown from 'react-bootstrap/Dropdown';

import eventsFilters from "./EventsFilters.json"

import "../../styles/events/EventsFilters.css"

function EventsFilters({ events, setEventsFiltered, activeEventType, setActiveEventType }) {

    useEffect(() => {
        if (activeEventType === 0) {
            setEventsFiltered(events);
            return;
        }
        const filtered = events.filter((e) => e.event_type.includes(activeEventType));
        setEventsFiltered(filtered)
    }, [activeEventType])

    return(

        <>

            <Dropdown>

                <div className="events-filters-cont">

                    <Dropdown.Toggle className="button events-filters-button">
                        Filtros
                    </Dropdown.Toggle>
                    
                    {activeEventType === 0 ? (
                        <p className="events-filters-label">Todos los eventos</p>
                    ):(
                        <p className="events-filters-label">{activeEventType}</p>
                    )}

                </div>

                <Dropdown.Menu>

                    <Dropdown.Item
                        onClick={() => setActiveEventType(0)}
                    >Todos los eventos</Dropdown.Item>

                    <Dropdown.Divider />

                    {
                        eventsFilters.map((filter) => {

                            return (

                                <Dropdown.Item
                                    key={filter.id}
                                    onClick={() => setActiveEventType(filter.value)}
                                >{filter.name}</Dropdown.Item>

                            );

                        })
                    }
                </Dropdown.Menu>
            </Dropdown>
        
        </>
    )

}

export default EventsFilters;
