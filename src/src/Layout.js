import React from "react";
import { Placeholder } from "@sitecore-jss/sitecore-jss-react";
import { NavLink } from "react-router-dom";
import { translate } from "react-i18next";
import Helmet from "react-helmet";

// Using bootstrap is completely optional. It's used here to provide a clean layout for samples,
// without needing extra CSS in the sample app. Remove it in package.json as well if it's removed here.
import "bootstrap/dist/css/bootstrap.css";
import "./assets/app.css";

/*
  APP LAYOUT
  This is where the app's HTML structure and root placeholders should be defined.

  All routes share this root layout by default (this could be customized in RouteHandler),
  but components added to inner placeholders are route-specific.
*/

const Layout = ({ route, context }) => {
  return (
    <React.Fragment>
      {/* react-helmet enables setting <head> contents, like title and OG meta tags */}
      <Helmet>
        <title>
          {(route.fields &&
            route.fields.pageTitle &&
            route.fields.pageTitle.value) ||
            "Page"}
        </title>
      </Helmet>

      <Placeholder name="jss-nav" rendering={route} />

      {/* root placeholder for the app, which we add components to using route data */}
      <div className="container">
        <Placeholder name="jss-main" rendering={route} context={context} />
      </div>
    </React.Fragment>
  );
};

export default Layout;
