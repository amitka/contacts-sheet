import React from "react";
import { Route, Redirect, Switch, HashRouter } from "react-router-dom";
import { ContactsGallery } from "../ContactGallery";
import { ContactPage } from "../ContactPage";
import "./App.css";

function App() {
  return (
    <main className="contacts-app">
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/contacts" component={ContactsGallery} />
          <Route exact path="/contacts/:contactId" component={ContactPage} />
          <Redirect from="/" to="/contacts" />
        </Switch>
      </HashRouter>
    </main>
  );
}

export default App;
