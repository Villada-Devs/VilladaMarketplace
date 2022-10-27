import React, { useEffect, useContext } from 'react';
import { MapContainer, TileLayer, Marker, Circle, Popup } from "react-leaflet";

import Container from 'react-bootstrap/Container';

import PageHeader from "../PageHeader";
import PoolCard from "./PoolCard";

import PoolData from "./PoolData.json"

import "../../styles/pool/PoolMain.css"
import "leaflet/dist/leaflet.css";

import ContextConnected from "../../context/ContextConnected";

function PoolMain() {

    const fillBlueOptions = { fillColor: 'blue' }

    React.useEffect(() => {
        
        const L = require("leaflet");
    
        delete L.Icon.Default.prototype._getIconUrl;
    
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
          iconUrl: require("../../img/pool/its.png"),
          shadowUrl: require("leaflet/dist/images/marker-shadow.png")
        });
      }, []);

    const Connected = useContext(ContextConnected)

    useEffect(() => {
        const loadPools = async () => {
          const token = await JSON.parse(localStorage.getItem("token"));
          if (token) {
            const res = await fetch("http://villadaapidjango-env.eba-vaws9zih.us-east-1.elasticbeanstalk.com/api/v1/pools/", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token.access_token}`
              },
            })
            const data = await res.json();
            Connected.setPools(data);
            console.log(data);
          }
        };
        loadPools();
      }, [Connected.userInfo]);

    return (

        <Container className="page-container" fluid>

            <PageHeader 
                pageHeader="Villada Pool"
                pageDescription="Si no podés llevar a tu hijo al colegio o tenes lugar en el auto disponible, conectate con otros padres para organizar un pool."
                button="Nuevo Pool"
                buttonURL="/Pool/formulario"
            />

            <MapContainer className='map-container' center={[-31.404829, -64.196187]} zoom={12} scrollWheelZoom={false}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={[-31.362450, -64.276317]}>
                    <Popup className='its'>
                        <p>Instituto Técnico Salesiano Villada</p>
                    </Popup>
                </Marker>
                
                
                    {
                        Connected.pools.map((e) => {
                            const position = [e.lat, e.lng]

                            return(
                                
                                <Circle center={position} pathOptions={fillBlueOptions} radius={150} key={e.id}>
                                    <Popup>
                                        <PoolCard
                                            key={e.id}
                                            userName={e.author}
                                            creationDate={e.created_date}
                                            days={e.days}
                                            places={e.slots}
                                            phoneNumber={e.first_tel}
                                        />
                                    </Popup>
                                </Circle>
                            )
                        })
                    }

            </MapContainer>

        </Container>
    );
}

export default PoolMain;
