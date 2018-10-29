import React from "react";
import { Text } from "@sitecore-jss/sitecore-jss-react";

const Accordion = props => {
  debugger;
  return (
    <div>
      <p>Accordion</p>
      Is Page Editing:
      {props.context.pageEditing ? <h1>Editing</h1> : <span>Not Editing</span>}
    </div>
  );
};

export default Accordion;
