import React from "react";
import "../assets/css/index.css";
const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState("Enviar");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    <div className="form">
      <h2 sx={{ backgroundColor: "#ffffff", padding: 5 }}>Contacto</h2>
      <br />
      <p sx={{ backgroundColor: "#ffffff", padding: 5 }}>
        Si tenes alguna duda podes contactarnos escribiendo un mensaje debajo.
      </p>
      <br />
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Nombre</label>
          <br />
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="message">Mensaje</label>
          <br />
          <textarea id="message" required />
        </div>
        <button type="submit">{formStatus}</button>
      </form>
    </div>
  );
};
export default ContactForm;
