import React from 'react';
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';
import { NavLink } from 'react-router-dom';
import { translate } from 'react-i18next';

const MainNav = ({ t, i18n, fields }) => (
  <div className="nav d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom">
    <h5 className="my-0 mr-md-auto font-weight-normal">
      <NavLink to="/">
        <Image field={fields.logo} />
        {/* <img src={logo} height={50} alt="Sitecore" /> */}
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

export default translate()(MainNav);
