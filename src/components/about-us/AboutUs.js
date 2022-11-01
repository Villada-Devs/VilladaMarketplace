import React from "react";

import Container from 'react-bootstrap/Container';

import AboutUsCarousel from "./AboutUsCarousel";
import AboutUsInfoL from "./AboutUsInfoL";
import AboutUsInfoR from "./AboutUsInfoR";

import Bienvenida from "../../img/about-us/Bienvenida.png";
import Conferencias from "../../img/about-us/Conferencias.png";
import Integracion from "../../img/about-us/Integración.png";
import RetirosEsp from "../../img/about-us/RestirosEsp.png";
import TalleresPed from "../../img/about-us/TalleresPed.png";   

import "../../styles/about-us/AboutUs.css";

function AboutUs() {

    return(

        <Container className="page-container" fluid>

            <AboutUsCarousel />

            <div className="about-content">

                <h1 className="blue-section">¿Quíenes Somos?</h1>

                <hr className="bold-hr"></hr>

                <p className="about-intro">La UPF es una sociedad civil integrada por todos los padres, madres o tutores de los alumnos del ITS Villada con el fin de ofrecer de manera profunda, desinteresada y permanente un servicio en representación de las familias, promoviendo la capacidad educadora de los padres y realizando convocatorias familiares para
                crear una verdadera comunidad.
                </p>

                <h1 className="blue-section">Tareas y Acvtividades que llevamos a cabo</h1>

                <hr className="bold-hr"></hr>

                <h2 className="about-subtitle">Escuela para Padres</h2>
                <p>Junto a toda la Comunidad Educativa del
                Villada, acompañamos a los padres y familias de los alumnos ofreciendo distintos eventos que
                contribuyen al crecimiento espiritual, a la integración en la comunidad, con
                herramientas para ayudar según la edad de los hijos y según las distintas situaciones de desafío social. Así como también acompañar a otras familias más vulnerables, que no pertenecen al colegio, con acciones concretas de caridad y compromiso social.
                </p>

            </div>

            <AboutUsInfoL
                aboutEventImg={Bienvenida}
                aboutEventTitle="Bienvenida a familias de primer año"
                aboutEventInfo="Se realiza una jornada en la que se informa a las nuevas familias lo necesario para el
                                desarrollo escolar, desde lo administrativo, pedagógico, económico, pastoral, social,
                                a cargo de las autoridades del Instituto de carácter obligatorio y posteriormente
                                se trabajan en talleres por grupos de padres que buscan favorecer el conocimiento
                                entre las familias de los nuevos ingresantes, atendiendo a sus expectativas e
                                inquietudes iniciales y luego un momento festivo en que compartimos alimentos,
                                todas las familias, en un clima de camaradería, según sus propios intereses, para
                                profundizar lazos de amistad, de ayuda mutua y de pertenencia institucional, en un
                                clima de alegría y de apertura."
            />

            <AboutUsInfoR
                aboutEventImg={TalleresPed}
                aboutEventTitle="Talleres Pedagógicos"
                aboutEventInfo="Como padres, buscamos facilitar en las familias la participación en los talleres
                                organizados oportunamente por el colegio a través de la Lic. Asesora Pedagógica, y
                                orientados a la reflexión sobre las distintas etapas psicológicas, pedagógicas,
                                sociales, de los alumnos o de situaciones que requieran una atención particular. Por
                                eso colaboramos en los talleres, desde la coordinación de los grupos de padres para
                                que puedan compartir sus reflexiones, experiencias e inquietudes para mejorar el
                                rol de primeros y principales educadores"
            />

            <AboutUsInfoL
                aboutEventImg={Conferencias}
                aboutEventTitle="Conferencias"
                aboutEventInfo="Según los intereses e inquietudes que surgen dentro de la comunidad, se organizan
                                conferencias dictadas por personas cuya idoneidad es reconocida y avalada por la
                                institución, a fin de que pueda ser una ocasión más de formación. En algunas
                                oportunidades, las mismas son conjuntas con los padres de otros colegios salesianos,
                                promoviendo un espíritu de ayuda mutua y compartiendo el mismo espíritu entre
                                las UPF."
            />

            <AboutUsInfoR 
                aboutEventImg={RetirosEsp}
                aboutEventTitle="Retiros Espirituales"
                aboutEventInfo="Junto con el acompañamiento de sacerdotes salesianos y/o laicos, los padres
                                compartimos una jornada que busca favorecer el encuentro personal con el Señor,
                                facilitando esa experiencia, de manera que, saliendo de la vida cotidiana, se puedan
                                concentrar en este momento de vida interior que busca fortalecernos para seguir
                                viviendo intensamente el compromiso de los valores evangélicos en las familias y en
                                la sociedad."
            />

            <AboutUsInfoL 
                aboutEventImg={Integracion}
                aboutEventTitle="Integracion de los padres a la labor educativa"
                aboutEventInfo="En cada reunión, consulta, taller, celebración, etc. se busca tanto la integración de
                                los padres en la labor propiamente escolar y el compromiso frente a la elección del
                                Instituto como colegio que encarna los valores elegidos por los padres para la
                                educación de sus hijos. Se procura la participación activa a través de la reunión
                                mensual de la UPF y de las distintas ocasiones gestadas por el colegio y por la UPF
                                como medios de integración comunitaria, relación entre las distintas familias y
                                conocimiento de otras realidades para que entre todos seamos partícipes activos."
            />
            
            <AboutUsInfoR 
                aboutEventImg={Bienvenida}
                aboutEventTitle="Coordinacion con el centro de estudiantes"
                aboutEventInfo="El Centro de Estudiantes del ITS Villada con las familias de la Unión de Padres son
                                partes integrantes del COCEP, coordinan algunas de sus actividades anuales dando
                                mayor relevancia, importancia y posibilidades de concreción por el trabajo diario
                                que realizan desde la gestión y los delegados da cada curso."
            />

            <div className="about-content">

                <h2 className="about-subtitle">Acción económico social</h2>
                <p>Las distintas actividades que se proponen durante el año buscan la integración de
                    los alumnos y sus familias, así como su adhesión al proyecto salesiano. Otras están
                    destinadas a la celebración como familia salesiana y como familia del ITS Villada,
                    reconociendo los logros y el paso por la institución de alumnos, docentes y padres.
                    Los beneficios económicos están destinados a sostener dichas actividades en el
                    tiempo y a favorecer una mayor participación de las familias. También se destinan a
                    complementar necesidades propias del desempeño escolar tanto en lo recreativo
                    como en lo formativo.
                </p>

            </div>

            <AboutUsInfoL 
                aboutEventImg={TalleresPed}
                aboutEventTitle="Locro del exalumno salesiano del villada"
                aboutEventInfo="Se realiza en fecha cercana al día del Exalumno salesiano (24 de junio) y de la Fiesta
                                de María Auxiliadora (24 de mayo). Es también un homenaje a los que pasaron por
                                el colegio y permite el reencuentro de los mismos, compartir sus testimonios que
                                enriquecen y emocionan a la comunidad. También nos permite, como familia, dar
                                gracias a Dios por toda la comunidad educativa salesiana y pedir juntos por sus
                                necesidades."
            />
            
            <AboutUsInfoR 
                aboutEventImg={Conferencias}
                aboutEventTitle="Agosto mes de Don Bosco: UPF solidaria"
                aboutEventInfo="Durante este mes,se acompañan las actividades propuestas por el equipo de gestión
                                y pastoral en la concreción de proyectos solidarios, a ejemplo de Don Bosco, por
                                medio de la difusión, animación y logística para que el espíritu de nuestro Santo
                                Patrono movilice los corazones en favor de los más necesitados."
            />

            <AboutUsInfoL 
                aboutEventImg={RetirosEsp}
                aboutEventTitle="Bicicleteada salesiana"
                aboutEventInfo="Peregrinación en bicicleta que implica un desafío físico y un verdadero trabajo en
                                equipo para alcanzar el objetivo. No se busca el éxito deportivo sino una experiencia
                                que implica disponer el cuerpo y el espíritu guiados por María Auxiliadora y Don
                                Bosco, culminando con la celebración de la Eucaristía y compartiendo la mesa en
                                comunidad. Hermosa experiencia al alcance de todas las familias"
            />
            
            <AboutUsInfoR 
                aboutEventImg={Integracion}
                aboutEventTitle="Asado de fin de año: Homenaje a los nuevos egresados"
                aboutEventInfo="En esta ocasión, la fiesta familiar está dedicada a homenajear a los nuevos
                                egresados, reconociendo su esfuerzo y el de sus familias para alcanzar este logro
                                académico. Es la ocasión para los padres de la nueva promoción, de recordar con
                                alegría el paso de sus hijos por el ITS Villada, y juntos dar gracias `por este logro."
            />

            <AboutUsInfoL 
                aboutEventImg={Bienvenida}
                aboutEventTitle="Convivencia en el valle de la inmaculada"
                aboutEventInfo="Esta ocasión es la culminación del año vivido en el colegio como familias. Se hace
                                una convivencia, de mayor o menor duración, según las posibilidades, y en ella se
                                vive con intensidad la alegría de la espiritualidad salesiana. Es un momento de gran
                                fraternidad y fortalecimiento de vínculos gestados en la diaria labor como familias
                                de la UPF. Momento de distensión, de diversión, de oración agradeciendo lo vivido
                                todo el año."
            />
            
        </Container>

    )

}

export default AboutUs;