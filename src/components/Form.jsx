import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Success } from "./FormSuccess";
import "../styles/styles";
import FormInput from "./FormInput";

const Form = () => {
  const form = useRef();
  const [submit, setSubmit] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e);

    emailjs
      .sendForm(
        "service_celav5e",
        "template_gvrci9b",
        form.current,
        "bMoALCYnJGcbG4-W9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setSubmit(true);
  };

  return (
    <div className="formContainer">
      {!submit ? (
        <form ref={form} onSubmit={sendEmail} className="form">
          <FormInput placeholder="Name " type="text" name="user_name" />
          <FormInput placeholder="Email " type="email" name="user_email" />
          <textarea
            name="message"
            type="text"
            className="textArea"
            placeholder="Message "
          />
          <input class="submitButton" type="submit" value="Send" />
        </form>
      ) : (
        <Success />
      )}
    </div>
  );
};

export default Form;
