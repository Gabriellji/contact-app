import React from "react";
import ContactInfo from './ContactInfo'
import "./style.css";


// function Contact(props) {
//   return (
//     <div className="wrapper">
//     <div className="Contact"
//     >
//       <img src={props.avatar} className="avatar" alt="avatar" />
//       <div>
//         <h4 className="name">{props.name}</h4>
//         <div className="status">
//           <div
//             className={props.online ? "status-online" : "status-offline"}
//           ></div>
//           <p className="status-text">{props.online ? "online" : "offline"}</p>
//         </div>
//       </div>
//     </div>
//     <div className="foarm">
//     </div>
//     </div>
//   );
// }

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      avatar: "",
      email:'',
      info: ""
    };
  }
  renderInfo(state) {
    return <ContactInfo
    name={state.name}
    avatar={state.avatar}
    email={state.email}
    info={state.info}
    />;
  }
  render() {
    return (
    <div className="wrapper">
      <div className="Contact"
      onClick={()=>{
        const newName = this.props.name;
        const newAvatar = this.props.avatar;
        const newEmail = this.props.email;
        const newInfo = this.props.info;
        this.setState({name: newName, avatar: newAvatar, email: newEmail, info: newInfo})
      }}>
        <img src={this.props.avatar} className="avatar" alt="avatar" />
        <div>
          <h4 className="name">{this.props.name}</h4>
          <div className="status">
            <div
              className={this.props.online ? "status-online" : "status-offline"}
            ></div>
            <p className="status-text">{this.props.online ? "online" : "offline"}</p>
          </div>
        </div>
      </div>
      <div className="foarm">
        {this.renderInfo(this.state)}
      </div>
    </div>
    );
  }
}

export default Contact;
