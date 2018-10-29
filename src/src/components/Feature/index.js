import React from "react";
import { Text, RichText, Image, Link } from "@sitecore-jss/sitecore-jss-react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover"
  }
};

function Feature(props) {
  const { classes, fields } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="140"
          image={fields.image.value.src}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <Text field={fields.title} />
          </Typography>
          <Typography component="div">
            <RichText field={fields.text} />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link field={fields.primaryLink} className="btn" />
        <Link field={fields.secondaryLink} className="btn" />
      </CardActions>
    </Card>
  );
}

Feature.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Feature);
