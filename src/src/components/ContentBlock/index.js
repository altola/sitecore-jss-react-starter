import React from "react";
import { Text, RichText, Image } from "@sitecore-jss/sitecore-jss-react";

const ContentBlock = (props) => {
  const { fields, params, routeFields } = props;

  return (
    <React.Fragment>
      
      <Text tag="h1" className={params ? params.headingStyle : null} 
          field={fields.heading ? fields.heading : routeFields.pageTitle} />
      
      <RichText className="contentDescription" field={fields.content} />
      <Image field={fields.image} />
    </React.Fragment>
)};

export default ContentBlock;
