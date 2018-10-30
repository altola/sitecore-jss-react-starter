import React, { Fragment } from "react";
import {
  Placeholder,
  Text,
  withPlaceholder
} from "@sitecore-jss/sitecore-jss-react";
import StackGrid from "react-stack-grid";
import Feature from "../Feature";
import { matchPath } from "react-router-dom";

const featureData = {
  title: "1 SAFETY-EXPERIENCE",
  text:
    "Safety is our priority—made possible by 50+ years of experience and EF's worldwide presence",
  image: {
    value: {
      src: "/assets/feature2.png",
      width: 140
    }
  }
};

const Grid = props => (
  <Placeholder
    name="jss-grid"
    rendering={props.rendering}
    render={(components, data, props) => (
      <StackGrid columnWidth={250}>{components}</StackGrid>
    )}
  />
);

export default Grid;
//export default withPlaceholder({ placeholder: "jss-grid", prop: "grid" })(Grid);
