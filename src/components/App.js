import React, { useState, useEffect } from "react";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };
  const getEditContactId = (id) => {
    console.log(`Editing contact with id ${id}`);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };
  const editContactHandler = (id) => {
    // TODO: Implement edit contact functionality
    console.log(`Editing contact with id ${id}`);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <div className="main">
        <div className="contact">
          <h2>Contact List</h2>
          <ContactList
            contacts={contacts}
            getContactId={removeContactHandler}
          />
        </div>

        <div className="add">
          <h2>Add Contact</h2>
          <AddContact
            addContactHandler={addContactHandler}
            getEditContactId={editContactHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
