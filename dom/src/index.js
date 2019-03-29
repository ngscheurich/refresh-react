import React, { useState } from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./style.css";

function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const form = (
    <form class="card" role="form">
      <Input
        title="Your name"
        name="name"
        value={name}
        handleChange={setName}
      />
      <Input
        title="Email address"
        name="email"
        type="email"
        value={email}
        handleChange={setEmail}
      />
      <button onClick={() => setSubmitted(true)}>Submit</button>
    </form>
  );

  return submitted ? <Thanks name={name} email={email} /> : form;
}

function Input(props) {
  const { title, name, value, handleChange } = props;
  const type = props.type ? props.type : "text";

  return (
    <React.Fragment>
      <label htmlFor={name}>{title}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        autoComplete="off"
        onChange={e => handleChange(e.target.value)}
      />
    </React.Fragment>
  );
}

function Thanks(props) {
  const { name, email } = props;
  return (
    <div class="card card--submitted">
      <div class="envelope">📩</div>
      <p class="thanks">Thanks, {name}!</p>
      <p class="email">We’ll be in touch at {email}.</p>
    </div>
  );
}

ReactDOM.render(<SignupForm />, document.getElementById("form"));
