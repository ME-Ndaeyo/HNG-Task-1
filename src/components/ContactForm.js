import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
  const history = useNavigate();

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  const [submitted, setSubmitted] = useState(false);

  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [message, setMessage] = useState("");
  const [messageErr, setMessageErr] = useState(false);

  //   Email validation
  function emailHandler(e) {
    let emailVal = e.target.value;
    if (emailVal.includes("@" && ".")) {
      setEmailErr(false);
    } else {
      setEmailErr(true);
    }
    setEmail(emailVal);
  }

  //   Message validation
  function messageHandler(e) {
    let messageVal = e.target.value;
    if (messageVal) {
      setMessageErr(false);
    } else {
      setMessageErr(true);
    }
    setMessage(messageVal);
  }

  function submitHandler(event) {
    event.preventDefault();
    if (email && message) {
      firstNameInputRef.current.value = "";
      lastNameInputRef.current.value = "";
      emailInputRef.current.value = "";
      messageInputRef.current.value = "";
      setSubmitted(true);
      setEmailErr(true);
      setMessageErr(true);
      setTimeout(() => {
        history("/");
      }, 1500);
    } else {
        setEmailErr(false);
        setMessageErr(false);
    }
  }

  return (
    <form onSubmit={submitHandler}>
      {submitted && (
        <div className="success_message">✔ Your message has been sent</div>
      )}

      <div className="form_text">
        <h2 className="form_header">Contact Me</h2>
        <p>Hi there, contact me to ask me anything you have in mind.</p>
      </div>

      <div className="first_name">
        <label htmlFor="first_name">First name</label>
        <input
          type="text"
          id="first_name"
          placeholder="Enter your first name"
          ref={firstNameInputRef}
        />
      </div>

      <div className="last_name">
        <label htmlFor="first_name">Last name</label>
        <input
          type="text"
          id="last_name"
          placeholder="Enter your last name"
          ref={lastNameInputRef}
        />
      </div>

      <div className="email">
        <label htmlFor="email">Email</label>
        <input
          required
          type="email"
          id="email"
          placeholder="yourname@email.com"
          ref={emailInputRef}
          onChange={emailHandler}
        />
        {emailErr && (
          <small className="error_message">
            Email address required
          </small>
        )}
      </div>

      <div className="message">
        <label htmlFor="message">Message</label>
        <textarea
          required
          type="text"
          id="message"
          placeholder="Send me a message and I'll reply you as soon as possible..."
          ref={messageInputRef}
          onChange={messageHandler}
        />
        {messageErr && (
          <small className="error_message">Please enter a message</small>
        )}
      </div>

      <div className="agree">
        <input type="checkbox" />
        <span className="checkbox"></span>
        <span>
          I agree to provide my data to ME_Ndaeyo who may contact me.
        </span>
      </div>

      <button id="btn__submit">Send message</button>
    </form>
  );
}
