import React from "react";
import ContactList from "./ContactList";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    number: "",
    nameError: "",
    emailError: "",
    numberError: "",
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let numberError = "";

    if (!this.state.name) {
      nameError = "Please enter a name.";
    }

    if (!this.state.email) {
      emailError = "Please enter an email address.";
    } else if (!/\S+@\S+\.\S+/.test(this.state.email)) {
      emailError = "Please enter a valid email address.";
    }

    if (!this.state.number) {
      numberError = "Please enter a phone number.";
    } else if (!/^\d{10}$/.test(this.state.number)) {
      numberError = "Please enter a valid 10-digit phone number.";
    }

    if (nameError || emailError || numberError) {
      this.setState({ nameError, emailError, numberError });
      return false;
    }

    return true;
  };

  add = (e) => {
    e.preventDefault();

    const isValid = this.validate();

    if (isValid) {
      this.props.addContactHandler(this.state);
      this.setState({
        name: "",
        email: "",
        number: "",
        nameError: "",
        emailError: "",
        numberError: "",
      });
    }
  };

  render() {
    return (
      <div className="ui main">
        <form className="ui form " onSubmit={this.add}>
          <div className={`field ${this.state.nameError ? "error" : ""}`}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            {this.state.nameError && (
              <div className="ui pointing red basic label">
                {this.state.nameError}
              </div>
            )}
          </div>
          <div className={`field ${this.state.emailError ? "error" : ""}`}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            {this.state.emailError && (
              <div className="ui pointing red basic label">
                {this.state.emailError}
              </div>
            )}
          </div>
          <div className={`field ${this.state.numberError ? "error" : ""}`}>
            <label>Number</label>
            <input
              type="text"
              name="number"
              placeholder="Contact number"
              value={this.state.number}
              onChange={(e) => this.setState({ number: e.target.value })}
            />
            {this.state.numberError && (
              <div className="ui pointing red basic label">
                {this.state.numberError}
              </div>
            )}
          </div>
          <button className="ui button blue">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
