import React from "react";
import classNames from "classnames";
import { Grid, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";

import calculateSpacing from "./calculateSpacing";
import useMediaQuery from "@mui/material/useMediaQuery";
import useWidth from "../../../shared/functions/useWidth";
import { Paper } from '@mui/material';
import { View, Image } from 'react';


const styles = (theme) => ({
  containerFix: {
    [theme.breakpoints.down("lg")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    overflow: "hidden",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  cardWrapper: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 340,
    },
  },
  cardWrapperHighlighted: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 360,
    },
  },
});

function PricingSection(props) {
  const { classes, theme } = props;
  const width = useWidth();
  const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div className="lg-p-top" style={{ backgroundColor: "#FFFFFF" }}>
      <Typography variant="h2" font="arial" align="center" className="lg-mg-bottom">
       Información
      </Typography>      
      <div className={classNames("container-fluid", classes.containerFix)}>
      <img src="/images/logged_out/puerto.jpg"></img>
      
      <Paper elevation={3} /> 
      <div>
      <p>3) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices dui sapien eget mi proin sed libero. Ipsum a arcu cursus vitae congue mauris. Ornare suspendisse sed nisi lacus. Molestie a iaculis at erat pellentesque adipiscing commodo elit. Urna nec tincidunt praesent semper feugiat nibh sed. Egestas quis ipsum suspendisse ultrices gravida dictum. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Ut lectus arcu bibendum at varius vel pharetra vel. Quam vulputate dignissim suspendisse in est ante in nibh mauris. Amet consectetur adipiscing elit ut aliquam purus sit amet. Dui faucibus in ornare quam. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Tristique senectus et netus et malesuada fames. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Ante in nibh mauris cursus mattis molestie a iaculis. Nunc mattis enim ut tellus elementum sagittis vitae et.</p>
      <div className="float-right"><img src="/images/logged_out/timon.jpg" ></img></div>
      
      <p>Libero id faucibus nisl tincidunt eget nullam non nisi est. Et leo duis ut diam quam nulla porttitor massa. Purus faucibus ornare suspendisse sed. Tincidunt eget nullam non nisi est sit. Vitae suscipit tellus mauris a diam maecenas. In tellus integer feugiat scelerisque. Iaculis eu non diam phasellus vestibulum. Neque convallis a cras semper auctor. Eu non diam phasellus vestibulum lorem sed risus ultricies. Congue eu consequat ac felis. Metus dictum at tempor commodo ullamcorper.</p>

      <p>Mattis aliquam faucibus purus in. Quis varius quam quisque id. Ullamcorper morbi tincidunt ornare massa. Hendrerit gravida rutrum quisque non. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Malesuada pellentesque elit eget gravida. Augue lacus viverra vitae congue eu consequat ac. Nec feugiat nisl pretium fusce id velit. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Sed enim ut sem viverra aliquet eget. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Elementum eu facilisis sed odio morbi quis commodo odio aenean.</p> 
      </div>
      </div>
    </div>
  );
}

PricingSection.propTypes = {};

export default withStyles(styles, { withTheme: true })(PricingSection);
