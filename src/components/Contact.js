import React from "react";
import "./style.css";

const Contact = props => (
  <div className="wrapper">
    <div className="Contact"
      onClick={() => props.getContact(props.user)}>
      <img src={props.avatar} className="avatar" alt="avatar" />
      <div>
        <h4 className="name">{props.name}</h4>
        <div className="status">
          <div
            className={props.online ? "status-online" : "status-offline"}
          ></div>
          <p className="status-text">{props.online ? "online" : "offline"}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;