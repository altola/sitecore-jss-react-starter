import React from "react";
import { withSitecoreContext } from "@sitecore-jss/sitecore-jss-react";

const Carousel = props => {
  return props.sitecoreContext.pageEditing === true ? 
      <CarouselForEditing {...props} /> :
      <CarouselForBrowsing {...props} />
};

const CarouselForEditing = props => {
  return (
    <div>
      <h1>I am a carousel for editing</h1>
    </div>
  );
};

const CarouselForBrowsing = props => {
  return (
    <div>
      <h1>I am a carousel for browsing</h1>
    </div>
  );
};

export default withSitecoreContext()(Carousel);
