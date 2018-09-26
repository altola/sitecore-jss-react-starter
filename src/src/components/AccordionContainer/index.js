import React from "react";
import { Text, RichText } from "@sitecore-jss/sitecore-jss-react";
import { Accordion } from "@alinta-digital/alinta-kit";

const AccordionContainer = ({fields}) => (
  <Accordion
    header={{
      children: <Text field={fields.header} />
    }}
    content={{
      children: <RichText field={fields.content} />
    }}
  />
);

export default AccordionContainer;
