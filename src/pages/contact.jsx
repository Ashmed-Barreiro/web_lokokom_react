import React, { useState, useRef, useEffect } from "react";
import "./contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      newErrors.email = "El email es obligatorio";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Introduce un email válido";
    }

    if (!formData.message) {
      newErrors.message = "El mensaje es obligatorio";
    } else if (formData.message.length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    setErrors({
      ...errors,
      [e.target.name]: ""
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setFormData({ email: "", message: "" });
    setErrors({});
  };

  return (
    <section className="contact" aria-labelledby="contact-title">
      <h1 id="contact-title">Contacto</h1>

      <form className="contact__form" onSubmit={handleSubmit}>
        
        <div className="form__group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            ref={emailRef}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Introduce tu email"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby="email-error"
          />
          {errors.email && (
            <span id="email-error" className="error" role="alert">
              {errors.email}
            </span>
          )}
        </div>

        <div className="form__group">
          <label htmlFor="message">Describe tu problema</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Escribe aquí tu mensaje..."
            rows="5"
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby="message-error"
          />
          {errors.message && (
            <span id="message-error" className="error" role="alert">
              {errors.message}
            </span>
          )}
        </div>

        <button type="submit" className="contact__btn">
          Enviar mensaje
        </button>

        {submitted && (
          <p className="contact__success" role="alert">
            Tu mensaje ha sido enviado correctamente.
          </p>
        )}
      </form>
    </section>
  );
}