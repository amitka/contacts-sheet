import React from "react";
import {
  Link,
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  HashRouter
} from "react-router-dom";
import "./App.css";

const contacts = require("./assets/contacts.json");

const ContactPage = ({ match, location }) => {
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

const AllContacts = () => {
  return (
    <section className="all-contacts-page">
      <header>
        <div className="header-title">
          <span className="header-title-main">גן נופר</span>
          <span className="header-title-sub">דף קשר</span>
          <span>2019/20</span>
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
                <div className="contact-pic">
                  <img
                    src={
                      contact.pic
                        ? require(`./assets/pics/${contact.pic}.jpg`)
                        : require("./assets/pics/default.jpg")
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

function App() {
  return (
    <main className="contacts-app">
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/contacts" component={AllContacts} />
          <Route exact path="/contacts/:contactId" component={ContactPage} />
          <Redirect from="/" to="/contacts" />
        </Switch>
      </HashRouter>
    </main>
  );
}

export default App;
