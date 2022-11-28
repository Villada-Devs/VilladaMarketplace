import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Circle, Popup } from "react-leaflet";

import PoolCard from "../../pool/PoolCard";

import "leaflet/dist/leaflet.css";

import ContextConnected from "../../../context/ContextConnected";

function MyPools() {

    const Connected = useContext(ContextConnected)

    const navigate = useNavigate();

    useEffect(() => {
        const loadPools = async () => {
          const token = await JSON.parse(localStorage.getItem("token"));
          if (token) {
            const url = `http://villadaapidjango-env.eba-vaws9zih.us-east-1.elasticbeanstalk.com/api/v1/pools/?created_by=${Connected.userInfo.pk}`

            const res = await fetch(url, {
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

      const fillBlueOptions = { fillColor: 'blue' }

    React.useEffect(() => {
        
        const L = require("leaflet");
    
        delete L.Icon.Default.prototype._getIconUrl;
    
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
          iconUrl: require("../../../img/pool/its.png"),
          shadowUrl: require("leaflet/dist/images/marker-shadow.png")
        });
      }, []);

    return(

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
                    Connected.pools.map((pool) => {
                        console.log(pool)
                        const position = [pool.lat, pool.lng]

                        return(
                            
                            <Circle center={position} pathOptions={fillBlueOptions} radius={150} key={pool.id}>
                                <Popup>
                                    <PoolCard
                                        key={pool.id}
                                        userName={pool.author}
                                        creationDate={pool.created_date}
                                        days={(pool.day_lunes? "Lu " : "") + (pool.day_martes? "Ma " : "") + (pool.day_miercoles? "Mi " : "") + (pool.day_jueves? "Ju " : "") + (pool.day_viernes? "Vi" : "")}
                                        places={pool.slots}
                                        phoneNumber={pool.first_tel}
                                    />
                                </Popup>
                            </Circle>
                        );
                    })
                }

        </MapContainer>

    );
}

export default MyPools;