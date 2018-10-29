import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const Jumbotron = (props) => (
  <div>
    <p>Jumbotron Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default Jumbotron;
