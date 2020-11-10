import React from "react";
import "./style.css";

function ContactInfo(props) {
    return (
        <div>
            <img src={props.avatar} className="avatar" alt="avatar" />
            <div>
                <h4 className="name">{props.name}</h4>
                <p>{props.email}</p>
                <p>{props.info}</p>
            </div>
        </div>
    )
}

export default ContactInfo;