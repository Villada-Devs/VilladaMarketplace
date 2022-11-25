import React, { useContext, useState, useEffect } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BooksFilters from "./BooksFilters";
import ProductCard from '../ProductCard';

import ContextConnected from "../../../context/ContextConnected";

function BooksSection() {

    const Connected = useContext(ContextConnected);

    const [booksFiltered, setBooksFiltered] = useState([]);
    const [activeSubject, setActiveSubject] = useState([]);

    useEffect(() => {
        const loadBooks = async () => {
          const token = await JSON.parse(localStorage.getItem("token"));
          if (token) {
            const res = await fetch("http://villadaapidjango-env.eba-vaws9zih.us-east-1.elasticbeanstalk.com/api/v1/marketplace/books/", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token.access_token}`
              },
            })
            const data = await res.json();
            Connected.setBooks(data.results);
            console.log(data.results);
          }
        };
        loadBooks();
    }, [Connected.userInfo]);

    return(

        <>

        <Container className='page-container' fluid>

            <h1>Libros y Apuntes</h1>
            <hr className='section-hr'></hr>

            <Row>

                <BooksFilters />

                <Col>
                    
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

                </Col>

            </Row>

        </Container>

        </>

    );
}

export default BooksSection;