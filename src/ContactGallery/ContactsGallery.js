import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Icons from "../style/Icons";

const CONTACTS_DATA = require("../assets/contacts.json");
const WHATS_APP_URL = "https://api.whatsapp.com/send?phone=972";

export const ContactsGallery = () => {
  const [query, setQuery] = useState("");

  return (
    <section className="all-contacts-page">
      <header>
        <div className="header-title">
          <span className="header-title-main">גן נופר</span>
          <span className="header-title-sub">דף קשר</span>
          <span className="header-title-year">2019/20</span>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="חפש\י..."
            onChange={e => setQuery(e.target.value)}
          />
        </div>
      </header>
      <div className="contacts-container">
        <div className="contacts-scroll">
          {CONTACTS_DATA.filter(contact => {
            return (
              contact.first.includes(query) || contact.last.includes(query)
            );
          }).map((contact, index) => (
            <div className="contact-item" key={index}>
              <Link to={`/contacts/${index}`} className="link">
                <div className="contact-pic">
                  <img
                    src={
                      contact.pic
                        ? require(`../assets/pics/${contact.pic}.jpg`)
                        : require("../assets/pics/default.jpg")
                    }
                    alt="contact-pic"
                  />
                </div>
                <span className="contact-name">{`${contact.first} ${contact.last}`}</span>
              </Link>
              {contact.mobile1 && (
                <div className="contact-actions">
                  <a href={`tel:${contact.mobile1}`} className="contact-phone">
                    {Icons.phone}
                  </a>
                  <a
                    href={`${WHATS_APP_URL + contact.mobile1}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-whats-app"
                  >
                    {Icons.whats2}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
        <footer>
          <span>made with {Icons.heart}</span>
        </footer>
      </div>
    </section>
  );
};
