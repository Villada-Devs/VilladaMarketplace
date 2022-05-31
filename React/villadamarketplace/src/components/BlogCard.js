import React from "react";

function BlogCard({image, title, description, date, setBlogEntryOpened}) {

    return(
        <>

            <div className="blog-card col-lg-4" onClick={() => {
                setBlogEntryOpened(true);
            }} >

                <img src={image} />

                <div className="card-body">
                    <h3>{title}</h3>
                    <p className="description">{description}</p>
                    <p className="date">{date}</p>
                </div>

            </div>

        </>
    );

}

export default BlogCard;