import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CONTACTS_DATA = require("../assets/contacts.json");

export const ContactPage = ({ match, location }) => {
  const {
    params: { contactId }
  } = match;

  const [contact, setContact] = useState({});

  useEffect(() => {
    const data = CONTACTS_DATA.find(contact => contact.uid === contactId);
    setContact(data);
  }, []);

  return (
    <article className="contact-page-container">
      {contact && (
        <div className="contact-details">
          <div className="page-pic">
            <div className="pic-wrapper">
              <img
                src={
                  contact.pic
                    ? require(`../assets/pics/${contact.pic}.jpg`)
                    : require("../assets/pics/default.jpg")
                }
                alt="contact-pic"
              />
            </div>
            <div className="page-name">{`${contact.first} ${contact.last}`}</div>
          </div>
          <div className="page-phone">
            <div className="details-row">
              <span>{contact.parent1}</span>
              <a href={`tel:${contact.mobile1}`}>{contact.mobile1}</a>
            </div>
            <div className="details-row">
              <span>{contact.parent2}</span>
              <a href={`tel:${contact.mobile2}`}>{contact.mobile2}</a>
            </div>
          </div>
          <div className="page-address">
            <span>{contact.address}</span>
          </div>
          <div className="page-mail">
            <a href={`mailto:${contact.mail}`}>{contact.mail}</a>
          </div>
        </div>
      )}
      <div className="back-button-container">
        <Link to="/">חזרה לדף הקשר</Link>
      </div>
    </article>
  );
};
