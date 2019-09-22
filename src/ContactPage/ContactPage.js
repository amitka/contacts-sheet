import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const contacts = require("../assets/contacts.json");

export const ContactPage = ({ match, location }) => {
  const {
    params: { contactId }
  } = match;
  const [contact, setContact] = useState({});

  useEffect(() => {
    //console.log(contacts[contactId]);
    setContact(contacts[contactId]);
  }, []);

  return (
    <article className="contact-page-container">
      <div className="contact-details">
        <div className="page-pic">
          <img
            src={
              contact.pic
                ? require(`../assets/pics/${contact.pic}.jpg`)
                : require("../assets/pics/default.jpg")
            }
            alt="contact-pic"
          />
        </div>
        <span className="page-name">{`${contact.first} ${contact.last}`}</span>
        <div className="details-row">
          <span>{contact.parent1}</span>
          <a href={`tel:${contact.mobile1}`} className="page-phone">
            {contact.mobile1}
          </a>
        </div>
        <div className="details-row">
          <span>{contact.parent2}</span>
          <a href={`tel:${contact.mobile2}`} className="page-phone">
            {contact.mobile2}
          </a>
        </div>
        <br />
        <br />
        <span>{contact.address}</span>
        <a href={`mailto:${contact.mail}`}>{contact.mail}</a>
      </div>
      <div className="back-button-container">
        <Link to="/">חזרה לדף הקשר</Link>
      </div>
    </article>
  );
};
