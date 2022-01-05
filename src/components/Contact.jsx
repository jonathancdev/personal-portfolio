import React from "react";
import { useForm } from "react-hook-form";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...data,
      }),
    })
      .then((response) => {
        // navigate("/thanks/");
        console.log(response);
      })
      .catch((error) => console.log(error));
    e.preventDefault();
  };
  return (
    <section id="contactsection" className="contact main__section">
      <h1 className="section__heading--primary">Contact</h1>
      <form
        name="contactform"
        method="POST"
        action="/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit(onSubmit)}
        className="contact__form"
      >
        <input type="hidden" name="form-name" value="contactform" />
        <input
          type="text"
          className="visually-hidden"
          name="bot-field"
          {...register("bot-field")}
        />
        <div className="form__element">
          <label className="visually-hidden" htmlFor="name">
            name
          </label>
          <input
            name="name"
            type="text"
            placeholder="name"
            {...register("name", {
              required: "please include your name",
            })}
          />
          {errors.name && (
            <p className="form__error-message">{errors.name.message}</p>
          )}
        </div>
        <div className="form__element">
          <label htmlFor="email" className="visually-hidden">
            email
          </label>
          <input
            name="email"
            type="text"
            placeholder="email"
            {...register("email", {
              required: "please include your email",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "this is not a valid e-mail address",
              },
            })}
          />
          {errors.email && (
            <p className="form__error-message">{errors.email.message}</p>
          )}
        </div>

        <div className="form__element">
          <label className="visually-hidden" htmlFor="comments">
            questions or comments:
          </label>
          <textarea
            name="message"
            type="text"
            placeholder="message"
            {...register("message", {
              required: "please include your message",
            })}
          />
          {errors.message && (
            <p className="form__error-message">{errors.message.message}</p>
          )}
        </div>
        <input type="submit" className="submit__button" value="SEND" />
      </form>
    </section>
  );
}
