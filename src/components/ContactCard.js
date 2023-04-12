import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email, number } = props.contact;

  const handleClick = (action) => {
    if (action === "delete") {
      props.clickHandler(id);
    } else if (action === "edit") {
      props.clickHandler1(id);
    }
  };

  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />

      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
        <div>{number}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "50px" }}
        onClick={() => handleClick("delete")}
      ></i>
      <i
        className="edit alternate outline icon"
        style={{ color: "blue", marginTop: "50px" }}
        onClick={() => handleClick("edit")}
      ></i>
    </div>
  );
};

export default ContactCard;
