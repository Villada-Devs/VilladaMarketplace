import React from "react";

import image from "../img/image.png";

function BlogEntry() {
    return(
        <>

            <hr className="top-separator"></hr>

            <div className="contenedor blog-entry row">

                <div className="left-side col-lg-7">

                    <p className="blog-creator">Nombre de Usuario</p>

                    <div className="blog-info">
                        <h2 className="notice-title">Título de la Noticia</h2>
                        <p className="blog-date">6 de Mayo de 2022</p>
                    </div>

                    <div className="blog-image-div">
                        <img src={image} className="blog-image" />
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, saepe, adipisci nobis commodi iure incidunt aut itaque dolore dolor voluptatibus, repellat laudantium mollitia enim ex cupiditate pariatur consequatur sed debitis!
                    Doloremque impedit voluptates ratione culpa amet soluta dolor blanditiis reiciendis quas neque. Quaerat facere quae mollitia molestiae vel officiis explicabo velit enim voluptatem dolor, maxime repellat eligendi maiores reprehenderit laudantium!
                    Ipsa odit distinctio nisi magni voluptates voluptate ratione illo vitae repellendus dignissimos suscipit soluta libero in, ut amet hic quia voluptatibus sequi commodi facere repellat nulla deserunt.</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nobis voluptatem a, officiis, soluta eligendi dolorum ea distinctio animi, dignissimos laborum. Illum explicabo aperiam officiis voluptates pariatur minus dicta saepe.
                    Sed excepturi non placeat voluptas iste iure maxime aliquam veniam nulla dolorem officiis obcaecati quod nobis odit architecto necessitatibus similique voluptatem, error exercitationem eveniet suscipit? Non sapiente saepe quod doloremque?</p>

                    <button type="button" className="btn btn-warning">Modificar Publicación</button> 
                    <button type="button" className="btn btn-danger">Borrar Publicación</button> 

                </div>

                <div className="vertical-hr col-lg-1">
                    <div></div>
                </div>

                <div className="right-side col-lg-4">

                    <h2 className="comments-title">Comentarios</h2>
                    <hr className="comments-hr"></hr>

                    <div className="comentarios-box">

                        <div className="comentario">

                            <p>Nombre de Usuario</p>
                            <p>Doloremque impedit voluptates ratione culpa amet soluta dolor blanditiis reiciendis quas neque. Quaerat facere quae mollitia molestiae vel officiis.</p>
                            <p>6 de Mayo de 2022</p>

                        </div>

                    </div>

                </div>

            </div>

        </>
    );
}

export default BlogEntry;