import { useEffect } from "react";
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

        <div className="events-categories-cont">
            <button 
                className={activeEventType === 0 ? "event-category-btn-active" : "event-category-btn-inactive"} 
                onClick={() => setActiveEventType(0)}>Todos los eventos</button>

            <button 
                className={activeEventType === "Bienvenida a familias de primer año" ? "event-category-btn-active" : "event-category-btn-inactive"} 
                onClick={() => setActiveEventType("Bienvenida a familias de primer año")}>Beinvenida a familias de primer año</button>

            <button 
                className={activeEventType === "Talleres pedagógicos" ? "event-category-btn-active" : "event-category-btn-inactive"} 
                onClick={() => setActiveEventType("Talleres pedagógicos")}>Talleres pedagógicos</button>
            
            <button 
                className={activeEventType === "Conferencias" ? "event-category-btn-active" : "event-category-btn-inactive"} 
                onClick={() => setActiveEventType("Conferencias")}>Conferencias</button>
            
            <button 
                className={activeEventType === "Retiros espirituales" ? "event-category-btn-active" : "event-category-btn-inactive"} 
                onClick={() => setActiveEventType("Retiros espirituales")}>Retiros espirituales</button>
            
            <button 
                className={activeEventType === "Integración de los padres a la labor educativa" ? "event-category-btn-active" : "event-category-btn-inactive"} 
                onClick={() => setActiveEventType("Integración de los padres a la labor educativa")}>Integración de los padres a la labor educativa</button>
            
            <button 
                className={activeEventType === "Locro del exalumno salesiano del villada" ? "event-category-btn-active" : "event-category-btn-inactive"} 
                onClick={() => setActiveEventType("Locro del exalumno salesiano del villada")}>Locro del exalumno salesiano Villada</button>
            
            <button 
                className={activeEventType === "UPF solidaria" ? "event-category-btn-active" : "event-category-btn-inactive"} 
                onClick={() => setActiveEventType("UPF solidaria")}>UPF solidaria</button>
            
            <button 
                className={activeEventType === "Dia del educador" ? "event-category-btn-active" : "event-category-btn-inactive"} 
                onClick={() => setActiveEventType("Dia del educador")}>Dia del educador</button>
            
            <button 
                className={activeEventType === "Bicicleteada salesiana" ? "event-category-btn-active" : "event-category-btn-inactive"} 
                onClick={() => setActiveEventType("Bicicleteada salesiana")}>Bicicleteada</button>
            
            <button 
                className={activeEventType === "Asado de fin de año" ? "event-category-btn-active" : "event-category-btn-inactive"} 
                onClick={() => setActiveEventType("Asado de fin de año")}>Asado de fin de año</button>
            
            <button 
                className={activeEventType === "Valle de la inmaculada" ? "event-category-btn-active" : "event-category-btn-inactive"} 
                onClick={() => setActiveEventType("Valle de la inmaculada")}>Valle de la inmaculada</button>
        </div>

    )

}

export default EventsFilters;