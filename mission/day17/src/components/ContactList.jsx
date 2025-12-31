import "./ContactList.css";
import ContactItem from "./ContactItem";
import { useContext } from "react";
import { stateContext } from "../App";

function ContactList() {
  const contacts = useContext(stateContext);

  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {contacts.map((contact) => {
        return <ContactItem key={contact.id} {...contact} />;
      })}
    </div>
  );
}

export default ContactList;
