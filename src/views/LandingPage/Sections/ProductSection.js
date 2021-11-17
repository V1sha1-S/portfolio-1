import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//import ReactPlayer from 'react-player';

// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
// @material-ui/icons
//import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "assets/img/My-portfolio.png";
import image2 from "assets/img/blog.mov";
import image3 from "assets/img/port.png";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

// @material-ui/icons
// import Chat from "@material-ui/icons/Chat";
// import VerifiedUser from "@material-ui/icons/VerifiedUser";
// import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
//import GridContainer from "components/Grid/GridContainer.js";
//import GridItem from "components/Grid/GridItem.js";
//import InfoArea from "components/InfoArea/InfoArea.js";

import styles1 from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);
const useStyle1= makeStyles(styles1)
export default function ProductSection() {
  const classes = useStyles();
  const classes1 = useStyle1();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className={classes1.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
         <h1 className={classes1.title}>About me</h1>
         <h3 className={classes1.description}>
            Hello! My name is Vishal and I{"'"}m a Computer Science Engineering Student intrested in UI{"&"}UX Designing using FIGMAand Web Development. I enjoy taking complex problems and turning them into simple and beautiful interface designs. I also love the logic and structure of coding and always strive to write elegant and efficient code, whether it be HTML, CSS, Javascript or Python.
         </h3>
        </GridItem>
      </GridContainer>
      <div>
        <div className={classes.section}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
                <Card carousel>
                  <Carousel {...settings}>
                    <div>
                      <img src={image1} alt="First slide" className="slick-image" />
                      <div className="slick-caption">
                        <h4>portfolio using HTML & CSS</h4>
                      </div>
                    </div>
                    <div>
                      <video src={image2} type="video/mov" alt="Second slide" className="slick-image"/>
                      <div className="slick-caption">
                        <h4 style={{color:"black"}} >TechBlog landing page design using FIGMA</h4>
                      </div>
                    </div>
                    <div>
                      <img src={image3} alt="Third slide" className="slick-image" />
                      <div className="slick-caption">
                        <h4 >portfolio website design using FIGMA</h4>
                      </div>
                    </div>
                  </Carousel>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
      
  );
}
