import React, { useContext, useEffect } from "react";

import Row from 'react-bootstrap/Row';

import ProductCard from "../../marketplace/ProductCard";

import ContextConnected from "../../../context/ContextConnected";

function MyUniforms(props) {

    const Connected = useContext(ContextConnected);

    useEffect(() => {
        const loadUniforms = async () => {
          const token = await JSON.parse(localStorage.getItem("token"));
          if (token) {
            const url = "http://villadaapidjango-env.eba-vaws9zih.us-east-1.elasticbeanstalk.com/api/v1/marketplace/myposts/"

            const res = await fetch(url, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token.access_token}`
              },
            })
            const data = await res.json();
            Connected.setUniforms(data.Clothing);
            console.log(data.Clothing);
          }
        };
        loadUniforms();
    }, [Connected.userInfo]);

    return(

        <>

            <h1 className="section-header">Mis Herramientas</h1>

            <Row>

                {
                    Connected.uniforms.map((uniform) => {

                        return (

                            <ProductCard 
                                key={uniform.id}
                                prodImage={uniform.product_images[0].image}
                                prodTitle={uniform.product_name}
                                prodPrice={uniform.price}
                                prod={uniform}
                            />

                        );


                    })
                }

            </Row>

        </>

    );
}

export default MyUniforms;