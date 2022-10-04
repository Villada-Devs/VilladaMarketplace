import React, { useContext, useEffect } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import PageHeader from "../PageHeader";
import PoolFilter from "./PoolFilter";
import PoolCard from "./PoolCard";

import "../../styles/pool/PoolMain.css"

import ContextConnected from "../../context/ContextConnected";

function PoolMain() {
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
                title="Villada Pool"
                button="Nuevo Pool"
            />

            <PoolFilter />
                
            <Row>
                {
                    Connected.pools?.map((pool, index) => {
                        const daysAv = `${pool.day_lunes? "Lu" : ""}${pool.day_martes? " Ma" : ""}${pool.day_miercoles? " Mi" : ""}${pool.day_jueves? " Ju" : ""}${pool.day_viernes? " Vi" : ""}`;
                        return <PoolCard key={index} locality={pool.locality} neighborhood={pool.neighborhood} days={daysAv} places={pool.slots} userName={pool.author} />
                    })
                } 
            </Row>

        </Container>
    );
}

export default PoolMain;