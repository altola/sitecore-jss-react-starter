import React from "react";
import { Text, Link } from "@sitecore-jss/sitecore-jss-react";
import Feature from "../Feature";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

const FeatureList = ({ fields, classes }) => (
  <div className={classes.root}>
    <Grid container spacing={16}>
      <Text field={fields.heading} tag="h1" />
      {fields.features.map((feature, index) => (
        <Grid item xs>
          <Feature key={index} fields={feature.fields} />
        </Grid>
      ))}
      <Link field={fields.ctaLink} className="btn" />
    </Grid>
  </div>
);

export default withStyles(styles)(FeatureList);
