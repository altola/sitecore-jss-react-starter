import React from "react";
import { Text, RichText, Image } from "@sitecore-jss/sitecore-jss-react";

const ContentBlock = ({ fields, params }) => {
  debugger;
  return (
    <React.Fragment>
      <Text tag="h1" className={params ? params.headingStyle : null} field={fields.heading} />
      <RichText className="contentDescription" field={fields.content} />
      <Image field={fields.image} />
    </React.Fragment>
)};

export default ContentBlock;
