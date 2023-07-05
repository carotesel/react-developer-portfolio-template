import React from "react";
import { contactDetails } from "../Details";

function Contact() {
  const { email } = contactDetails;
  return (
    <main
      className="container mx-auto max-width section md:mb-40 mb-14"
      id="contact"
    >
      <h1 className="text-center text-2xl md:text-3xl lg:text-5xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
        Por cualquier consulta escribime a
      </h1>
      <h3 className="text-center text-2xl md:text-4xl lg:text-4xl text-gradient font-semibold md:font-bold pt-5 md:pt-10 md:pb-6">
        <a href={`mailto:${email}`}>{email}</a>
      </h3>
    </main>
  );
}

export default Contact;
