import React from "react";
import "./style.css";

function ContactInfo(props) {
    return (
        <div className="info_wrap">
            <img src={props.avatar} className="avatar_info" alt="avatar" />
                <h4 className="name">{props.name}</h4>
                <p>{props.email}</p>
                <p>{props.info}</p>
                <p>{props.lastVisit}</p>
        </div>
    )
}

export default ContactInfo;