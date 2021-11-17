import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
//import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Get In Touch</h2>
          <h4 className={classes.description}>
            Hello! I{"'"}m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I{"'"}ll try my best to get back to you!
          </h4>
        </GridItem>
        <GridItem cs={12} sm={12} md={8} style={{weidth:'100%',textAlign:'center'}}>
        <a href = "mailto:vnaik9900@gmail.com?subject = Feedback&body = Message"><Button color="primary" >Say Hello!!</Button></a> 
        </GridItem>
      </GridContainer>
    </div>
  );
}
