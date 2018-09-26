import React from 'react';
import { Placeholder, withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';

import { translate } from 'react-i18next';
import Helmet from 'react-helmet';

// Using bootstrap is completely optional. It's used here to provide a clean layout for samples,
// without needing extra CSS in the sample app. Remove it in package.json as well if it's removed here.
import 'bootstrap/dist/css/bootstrap.css';
import './assets/app.css';

const Layout = ({ route }) => (
  <React.Fragment>
    {/* react-helmet enables setting <head> contents, like title and OG meta tags */}
    <Helmet>
      <title>
        {(route.fields && route.fields.pageTitle && route.fields.pageTitle.value) || 'Page'}
      </title>
      <meta name="description" content={route.fields.pageDescription.value} />
    </Helmet>

    <Placeholder name="jss-nav" rendering={route} />

    {/* root placeholder for the app, which we add components to using route data */}
    <div className="container" style={{backgroundImage: `url(${route.fields.backgroundImage ? route.fields.backgroundImage.value.src : null})`}}>
      <Placeholder name="jss-main" rendering={route} routeFields={route.fields} />
    </div>
  </React.Fragment>
);

export default withSitecoreContext(Layout);
