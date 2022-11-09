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

        <Dropdown className="d-inline mx-2">
            <Dropdown.Toggle id="dropdown-autoclose-true">
                Filtros
            </Dropdown.Toggle>

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
