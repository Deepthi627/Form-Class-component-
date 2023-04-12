import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  const editContactHandler = (id) => {
    props.getEditContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteConactHandler}
        clickHandler1={editContactHandler} // Define clickHandler1 here
        key={contact.id}
      />
    );
  });

  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
