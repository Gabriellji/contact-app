import React from "react";
import "./style.css";

const ContactInfo = (props) => (
        <div className="info_wrap">
            <img src={props.avatar} className="avatar_info" alt="avatar" />
              <div className="text_wrap">
                  <p className="descr">user:</p>
                <h4 className="name">{props.name}</h4>
                <p className="descr">email:</p>
                <p>{props.email}</p>
                <p className="descr">status:</p>
                <p>{props.info}</p>
                <p className="descr">last visit:</p>
                <p>{props.lastVisit}</p>
              </div>
        </div>
)

export default ContactInfo;