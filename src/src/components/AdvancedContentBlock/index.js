import React from "react";
import { RichText, Text, Image } from "@sitecore-jss/sitecore-jss-react";

const AdvancedContentBlock = ({ fields, params, routeFields }) => (
  <React.Fragment>
    <Text
      tag={fields.advanced.value ? "h1" : "span"}
      className={params ? params.headingStyle : null}
      field={fields.heading ? fields.heading : routeFields.pageTitle}
    />
    <RichText className="contentDescription" field={fields.content} />
    <Image field={fields.image} />
  </React.Fragment>
);

export default AdvancedContentBlock;
