import React from "react";

import "../styles/User.css"

function User(props) {
    return (
        <div className="user-container">
            <div className="user-data">
                <div className="user-photo"></div>
                <p className="user-name">{props.userName}</p>
            </div>
            <p className="user-creation-date">{props.creationDate}</p>
        </div>
    );
}

export default User;