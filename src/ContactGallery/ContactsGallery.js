import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Icons from "../style/Icons";

const WHATS_APP_URL = "https://api.whatsapp.com/send?phone=972";

export const ContactsGallery = () => {
  const [contacts, setContacts] = useState([]);
  const [query, setQuery] = useState("");
  const [itemsFound, setItemsFound] = useState([]);

  useEffect(() => {
    // FETCHING ICONS
    const fetchContactsData = async () => {
      const response = await fetch("./contacts.json");
      const json = await response.json();
      return json;
    };

    fetchContactsData()
      .then((data) => {
        console.log("Contacts were loaded...");
        //console.log(data);
        setContacts(data);
      })
      .catch((err) => console.log("Error fetching contacts data...", err));
  }, []);

  useEffect(() => {
    const found = contacts.filter((contact) => {
      return contact.first.includes(query) || contact.last.includes(query);
    });
    setItemsFound(found);
  }, [contacts, query]);

  return (
    <section className="all-contacts-page">
      <header>
        <div className="header-title">
          <span className="header-title-main">גן יקינטון</span>
          <span className="header-title-sub">דף קשר</span>
          <span className="header-title-year">2020/21</span>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="חפש\י..."
            onChange={(e) => setQuery(e.target.value)}
          />
          <span className="contacts-counter">
            <span style={{ paddingLeft: ".15rem" }}>{itemsFound.length}</span>
            <span>ילדים</span>
          </span>
        </div>
      </header>
      <div className="contacts-container">
        <div className="contacts-scroll">
          {itemsFound.length > 0 ? (
            itemsFound.map((item, index) => (
              <GalleryItem contact={item} key={index} />
            ))
          ) : (
            <div className="no-results"> ... לא מצאתי</div>
          )}
        </div>
        <footer>
          <span>made with {Icons.heart}</span>
        </footer>
      </div>
    </section>
  );
};

const GalleryItem = ({ contact }) => {
  return (
    <div className="contact-item">
      {/* <Link to={`/contacts/${contact.first + contact.last}`} className="link"> */}
      <Link
        to={{ pathname: `/contacts/${contact.first} `, state: contact }}
        className="link"
      >
        <div className="contact-pic">
          <img src={contact.pic} alt="contact-pic" />
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
  );
};
