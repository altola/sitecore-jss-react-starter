import React from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';
import { NavLink } from 'react-router-dom';
import { translate } from 'react-i18next';
import Helmet from 'react-helmet';

// Using bootstrap is completely optional. It's used here to provide a clean layout for samples,
// without needing extra CSS in the sample app. Remove it in package.json as well if it's removed here.
import 'bootstrap/dist/css/bootstrap.css';
import './assets/app.css';
import logo from './assets/jss-logo.png';

/*
  APP LAYOUT
  This is where the app's HTML structure and root placeholders should be defined.

  All routes share this root layout by default (this could be customized in RouteHandler),
  but components added to inner placeholders are route-specific.
*/

let Navigation = ({ t, i18n }) => (
  <div className="nav d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom">
    <h5 className="my-0 mr-md-auto font-weight-normal">
      <NavLink to="/">
        <img src={logo} height={50} alt="Sitecore" />
      </NavLink>
    </h5>
    <nav className="my-2 my-md-0 mr-md-3">
      <a
        className="p-2"
        href="https://jss.sitecore.net"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('Documentation')}
      </a>
    </nav>
  </div>
);

// inject dictionary props (`t`) into navigation so we can translate it
// NOTE: using this is needed instead of using i18next directly to keep
// the component state updated when i18n state (e.g. current language) changes
Navigation = translate()(Navigation);

const Layout = ({ route }) => (
  <React.Fragment>
    {/* react-helmet enables setting <head> contents, like title and OG meta tags */}
    <Helmet>
      <title>
        {(route.fields && route.fields.pageTitle && route.fields.pageTitle.value) || 'Page'}
      </title>
    </Helmet>

    <Navigation />

    {/* root placeholder for the app, which we add components to using route data */}
    <div className="container">
      <Placeholder name="jss-main" rendering={route} />
    </div>
  </React.Fragment>
);

export default Layout;
