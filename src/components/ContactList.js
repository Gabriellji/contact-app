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
        info: "=)))))))",
        lastVisit: Date(Date.now()).toString().split(' ').slice(0,5).toString(),
      },
      {
        name: "Motoko",
        avatar: "https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2019/12/04/8074a7ae-1194-11ea-82cd-148dc44829b8_image_hires_124128.jpg?itok=Kw7x6UoL&v=1575434493",
        online: false,
        email: 'Motoko@mail.ru',
        info: "I am Motoko",
        lastVisit: Date(Date.now()).toString().split(' ').slice(0,5).toString(),
      },
      {
        name: "Batou",
        avatar:
          "https://i.pinimg.com/originals/fe/aa/fb/feaafb5d8c5039eee20a229c0deb3d00.jpg",
        online: false,
        email: 'Batou@gmail.com',
        info: "Hello stranger!",
        lastVisit: Date(Date.now()).toString().split(' ').slice(0,5).toString(),
      },
      {
        name: "Tachikoma",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQH6UdlapuhtzKrOuc1HDQBu3rdUqiUYsTHkg&usqp=CAU",
        online: true,
        email: 'Tachikoma@yahoo.com',
        info: "I am Tachikoma, a smart machine!",
        lastVisit: Date(Date.now()).toString().split(' ').slice(0,5).toString(),
      }
    ],
    selectedUser: {
      name: "Laughing-Man",
      avatar: "https://upload.wikimedia.org/wikipedia/ru/6/63/Laughing-man.gif",
      online: true,
      email: 'undefined',
      info: "=)))))))",
      lastVisit: Date(Date.now()).toString().split(' ').slice(0,5).toString(),
    }
  }

  getContact = ({ name, email, avatar, info, lastVisit, online }) => {
    this.setState({
      selectedUser: {
        name,
        email,
        avatar,
        info,
        lastVisit,
        online
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
              lastVisit={this.state.selectedUser.online ? 'last seen recently' : this.state.selectedUser.lastVisit}
            />
          }
      </div>
    );
  }
}
export default ContactList;