import React, { useContext, useEffect } from "react";

import Row from 'react-bootstrap/Row';

import ProductCard from "../../marketplace/ProductCard";

import ContextConnected from "../../../context/ContextConnected";

function MyBooks(props) {

    const Connected = useContext(ContextConnected);

    useEffect(() => {
        const loadBooks = async () => {
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
            Connected.setBooks(data.Book);
            console.log(data.Book);
          }
        };
        loadBooks();
    }, [Connected.userInfo]);

    return(

        <>

            <h1 className="section-header">Mis Libros</h1>

            <Row>

                {
                    Connected.books.map((book) => {

                        return (

                            <ProductCard 
                                key={book.id}
                                prodImage={book.product_images[0].image}
                                prodTitle={book.product_name}
                                prodPrice={book.price}
                                prod={book}
                            />

                        );


                    })
                }

            </Row>

        </>

    );
}

export default MyBooks;