import React from "react";
import { Link } from "react-router-dom";

export const ContactPage = ({ match, location }) => {
  const {
    params: { contactId }
  } = match;

  return (
    <article className="contact-container">
      <span>{contactId}</span>
      <br />
      <Link to="/">Back</Link>
    </article>
  );
};
