import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const Carousel = (props) => (
  <div>
    <Text tag="h1" field={props.fields.heading} />
  </div>
);

export default Carousel;
