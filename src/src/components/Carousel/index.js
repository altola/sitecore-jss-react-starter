import React from "react";
import { Text } from "@sitecore-jss/sitecore-jss-react";
import Slider from "react-slick";
import Feature from "../Feature";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Carousel = ({ fields }) => {
  return (
    <Slider {...settings}>
      {fields.slides.map((slide, index) => 
      <Feature key={index} fields={slide.fields} />)}
    </Slider>
  );
};

export default Carousel;
