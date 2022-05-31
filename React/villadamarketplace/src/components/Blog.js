import React, { useState } from "react";

import "../styles/Blog.css";

import image from "../img/image.png";
import BlogCard from "./BlogCard";
import BlogEntry from "./BlogEntry";

function Blog() {

    const [blogEntryOpened, setBlogEntryOpened] = useState(false);

    return(
        <>

            {
                !blogEntryOpened? (
                    <>
                        <div className="header-seccion">
                            <div className="contenedor">
                                <h2>Villada Blog</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem eligendi nulla adipisicing elit. Voluptatem eligendi nulla.</p>
                                <button type="button" className="btn btn-marketplace">Nueva Publicación</button> 
                            </div>
                        </div>

                        <div className="contenedor">

                            <div className="row">

                                <BlogCard setBlogEntryOpened={setBlogEntryOpened} image={image} title={"Titulo de la Noticia"} description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit eligendi nulla adipisicing elit Lorem ipsum dolor sit."} date={"4 de Mayo de 2022"} />
                                <BlogCard setBlogEntryOpened={setBlogEntryOpened} image={image} title={"Titulo de la Noticia"} description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit eligendi nulla adipisicing elit Lorem ipsum dolor sit."} date={"4 de Mayo de 2022"} />
                                <BlogCard setBlogEntryOpened={setBlogEntryOpened} image={image} title={"Titulo de la Noticia"} description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit eligendi nulla adipisicing elit Lorem ipsum dolor sit."} date={"4 de Mayo de 2022"} />
                                <BlogCard setBlogEntryOpened={setBlogEntryOpened} image={image} title={"Titulo de la Noticia"} description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit eligendi nulla adipisicing elit Lorem ipsum dolor sit."} date={"4 de Mayo de 2022"} />
                                <BlogCard setBlogEntryOpened={setBlogEntryOpened} image={image} title={"Titulo de la Noticia"} description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit eligendi nulla adipisicing elit Lorem ipsum dolor sit."} date={"4 de Mayo de 2022"} />
                                <BlogCard setBlogEntryOpened={setBlogEntryOpened} image={image} title={"Titulo de la Noticia"} description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit eligendi nulla adipisicing elit Lorem ipsum dolor sit."} date={"4 de Mayo de 2022"} />
                                <BlogCard setBlogEntryOpened={setBlogEntryOpened} image={image} title={"Titulo de la Noticia"} description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit eligendi nulla adipisicing elit Lorem ipsum dolor sit."} date={"4 de Mayo de 2022"} />
                                <BlogCard setBlogEntryOpened={setBlogEntryOpened} image={image} title={"Titulo de la Noticia"} description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit eligendi nulla adipisicing elit Lorem ipsum dolor sit."} date={"4 de Mayo de 2022"} />
                                <BlogCard setBlogEntryOpened={setBlogEntryOpened} image={image} title={"Titulo de la Noticia"} description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit eligendi nulla adipisicing elit Lorem ipsum dolor sit."} date={"4 de Mayo de 2022"} />
                                <BlogCard setBlogEntryOpened={setBlogEntryOpened} image={image} title={"Titulo de la Noticia"} description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit eligendi nulla adipisicing elit Lorem ipsum dolor sit."} date={"4 de Mayo de 2022"} />
                                <BlogCard setBlogEntryOpened={setBlogEntryOpened} image={image} title={"Titulo de la Noticia"} description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit eligendi nulla adipisicing elit Lorem ipsum dolor sit."} date={"4 de Mayo de 2022"} />
                        
                            </div>

                        </div>
                    </>
                ) : (

                    <BlogEntry />

                )
            }
            

        </>
    );

}

export default Blog;