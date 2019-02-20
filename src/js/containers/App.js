import React, { Component } from 'react';
import Login from '../components/Login/Login.js';
import HomePage from '../components/Home/Homepage.js';
import { Provider } from "react-redux";
import store from "../store/store";
import AuthorizedRoutes from "../routes/AuthorizedRoutes";
import UnauthorizedLayout from "../layout/UnauthorizedLayout";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import './App.css';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
      <div className="wrapper">
                  <header>
                      <div className="uui-header">
                          <nav>

                              <div className="uui-responsive-header">
                                  <div className="responsive-header">
                                      <a href="#" className="responsive-brand-logo">
                                          <span className="logo">
                                              <img src="/images/ic_logo_UUi.svg" alt="" />
                                          </span>
                                          <span className="title">Unified UI</span>
                                      </a>
                                  </div>
                              </div>

                              <a href="#" className="brand-logo">
                                  <span className="logo">
                                      <img src="/images/ic_logo_UUi.svg" alt="" />
                                  </span>
                                  Unified UI
                              </a>
                          </nav>
                      </div>
                  </header>
                  <div className="uui-main-container">
                    <main>
                    <BrowserRouter>
                    <Switch>
                        <Route path="/login" component={UnauthorizedLayout} />
                        <AuthorizedRoutes path="/home" component={HomePage} />
                        <Redirect to="/login" />
                    </Switch>
                      </BrowserRouter>
                    </main>
                  </div>
                  <footer>
                      <div className="uui-footer">
                          <div className="footer-logo-copyright">
                              <div className="epam-logo">
                                  <img src="/images/Logo_Epam_Color.svg" alt="" />
                              </div>
                              <p className="copyright">© 2016 EPAM Systems. All Rights Reserved.</p>
                          </div>
                          <div className="footer-build">
                              <p className="build">Build version v <span>2.0.0.1</span></p>
                          </div>
                      </div>
                  </footer>
      </div>
      </Provider>
    );
  }
}

export default App;
