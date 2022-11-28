import React, { useContext, useEffect } from "react";

import Row from 'react-bootstrap/Row';

import ProductCard from "../../marketplace/ProductCard";

import ContextConnected from "../../../context/ContextConnected";

function MyTools(props) {

    const Connected = useContext(ContextConnected);

    useEffect(() => {
        const loadTools = async () => {
          const token = await JSON.parse(localStorage.getItem("token"));
          if (token) {
            const res = await fetch("http://villadaapidjango-env.eba-vaws9zih.us-east-1.elasticbeanstalk.com/api/v1/marketplace/tools/", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token.access_token}`
              },
            })
            const data = await res.json();
            Connected.setTools(data.results);
            console.log(data.results);
          }
        };
        loadTools();
    }, [Connected.userInfo]);

    return(

        <>

            <h1 className="section-header">Mis Herramientas</h1>

            <Row>

                {
                    Connected.tools.map((tool) => {

                        return (

                            <ProductCard 
                                key={tool.id}
                                prodImage={tool.product_images[0].image}
                                prodTitle={tool.product_name}
                                prodPrice={tool.price}
                                prod={tool}
                            />

                        );


                    })
                }

            </Row>

        </>

    );
}

export default MyTools;