import React, { Component } from 'react';
import Contact from "./Contact";
import ContactInfo from './ContactInfo'

class ContactList extends Component {
  state = {
    messages: [
      {
        name: "Laughing-Man",
        avatar: "https://upload.wikimedia.org/wikipedia/ru/6/63/Laughing-man.gif",
        online: true,
        email: 'undefined',
        info: "=)))))))"
      },
      {
        name: "Motoko",
        avatar: "https://media2.giphy.com/media/imKrSqrDxAuvS/200.gif",
        online: false,
        email: 'Motoko@mail.ru',
        info: "I am Motoko"
      },
      {
        name: "Batou",
        avatar:
          "https://otakuusamagazine.com/wp-content/uploads/2017/08/fp-batougits.jpg",
        online: false,
        email: 'Batou@gmail.com',
        info: "Hello stranger!"
      },
      {
        name: "Tachikoma",
        avatar:
          "https://media1.tenor.com/images/9b7028c3ebbf6f91230166757a0a1f33/tenor.gif?itemid=17393395",
        online: true,
        email: 'Tachikoma@yahoo.com',
        info: "Hey there! I am Tachikoma, smart machine"
      }
    ],
    selectedUser: {}
  }

  getContact = ({ name, email, avatar, info }) => {
    this.setState({
      selectedUser: {
        name,
        email,
        avatar,
        info
      }
    })
  }

  render() {
    return (
      <div className="main_wrap">
        <div>
          {this.state.messages.map((message, index) => (
            <Contact
              key={index}
              name={message.name}
              avatar={message.avatar}
              online={message.online}
              email={message.email}
              info={message.info}
              user={message}
              getContact={this.getContact}
            />
          ))}
        </div>
          {
            this.state.selectedUser &&
            <ContactInfo
              name={this.state.selectedUser.name}
              email={this.state.selectedUser.email}
              avatar={this.state.selectedUser.avatar}
              info={this.state.selectedUser.info}
            />
          }
      </div>
    );
  }
}
export default ContactList;