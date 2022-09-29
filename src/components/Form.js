import "../App";
import { Component } from "react";

export default class Form extends Component {
  state = {
    firstName: "",
    email: "",
    message: "",
    select: "",
    subscription: "",
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  checkedHandler = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };
  checkName = () => {
    if (this.state.firstName.length < 5) {
      alert("Your name is short");
    }
  };
  validateEmail = () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(this.state.email)) {
      alert("Email is not match");
    }
  };
  render() {
    const { firstName, message, email, select, subscription } = this.state;

    return (
      <div className="container">
        <h3 className="m-3">Name: {firstName}</h3>
        <input
          type="text"
          className="form-control w-25 m-2"
          placeholder="First Name"
          name="firstName"
          value={firstName}
          onChange={this.changeHandler}
          onBlur={this.checkName}
        />
        <h3 className="m-3">Email: {email}</h3>
        <input
          className="form-control w-25 m-2"
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={this.changeHandler}
          onBlur={this.validateEmail}
        />
        <h3 className="m-3">Message: {message}</h3>
        <textarea
          name="message"
          placeholder="message"
          className="form-control w-25 m-2"
          onChange={this.changeHandler}
          value={message}
        ></textarea>
        <h3 className="m-3">selected: {select}</h3>
        <select
          name="select"
          onChange={this.changeHandler}
          className="form-control w-25 m-2"
          value={select}
        >
          <option disabled></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <h3 className="m-3">checked {subscription}</h3>
        <label>
          <input
            type="checkbox"
            name="subscription"
            onChange={this.checkedHandler}
            checked={subscription}
          />
          <span> Subscription</span>
        </label>
      </div>
    );
  }
}
