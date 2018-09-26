import React from "react";
import { Text, withSitecoreContext } from "@sitecore-jss/sitecore-jss-react";

const MetaData = ({ routeFields, sitecoreContext }) => {
  return sitecoreContext.pageEditing === true ? (
    <div>
      <h3>MetaData Component</h3>
      <Text field={routeFields.pageTitle} tag="p" />
      <Text field={routeFields.pageDescription} tag="p" />
    </div>
  ) : null;
};

export default withSitecoreContext()(MetaData);
