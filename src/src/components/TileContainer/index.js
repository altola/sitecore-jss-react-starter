import React from "react";
import { Text, RichText } from "@sitecore-jss/sitecore-jss-react";
import {
  Tile,
  TileHeader,
  TileContent,
  TileFooter
} from "@alinta-digital/alinta-kit";

const TileContainer = props => (
  <Tile style={{borderWidth: 2, borderColor: 'black', borderStyle: 'dashed'}}>
    <TileHeader>
      <RichText field={props.fields.heading} />
    </TileHeader>
    <TileContent>
      <RichText field={props.fields.content} />
    </TileContent>
    <TileFooter>
      <Text field={props.fields.footer} />
    </TileFooter>
  </Tile>
);

export default TileContainer;
