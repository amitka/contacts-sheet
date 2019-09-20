import React from "react";
import { Link } from "react-router-dom";

const contacts = require("../assets/contacts.json");

export const ContactsGallery = () => {
  return (
    <section className="all-contacts-page">
      <header>
        <div className="header-title">
          <span className="header-title-main">גן נופר</span>
          <span className="header-title-sub">דף קשר</span>
          <span>2019/20</span>
        </div>
        <div className="search-container">
          <input type="text" placeholder="חפש\י..." />
        </div>
      </header>
      <div className="contacts-container">
        <div className="contacts-scroll">
          {contacts.map((contact, index) => (
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
              <a
                href={`tel:${contact.mobile1}`}
                className="contact-phone"
              >{`${contact.mobile1}`}</a>
            </div>
          ))}
        </div>
      </div>
      <footer></footer>
    </section>
  );
};
