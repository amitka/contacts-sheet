import React from "react";
import {
  Link,
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import "./App.css";

const contacts = require("./contacts.json");

const ContactPage = ({ match, location }) => {
  const {
    params: { contactId }
  } = match;

  return (
    <article className="contact-container">
      <span>{contactId}</span>
    </article>
  );
};

const AllContacts = () => {
  return (
    <section className="all-contacts-page">
      <header>
        <div className="logo-container">
          <div className="logo-circ">
            <span className="title">גן נופר</span>
            <span className="sub-title">2019/20</span>
          </div>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search..." />
        </div>
      </header>
      <div className="contacts-container">
        <div className="contacts-scroll">
          {contacts.map((contact, index) => (
            <div className="contact-item" key={index}>
              <Link to={`/contacts/${index}`} className="link">
                <span className="contact-pic"></span>
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

function App() {
  return (
    <main className="contacts-app">
      <Router>
        <Switch>
          <Route exact path="/contacts" component={AllContacts} />
          <Route exact path="/contacts/:contactId" component={ContactPage} />
          <Redirect from="/" to="/contacts" />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
