import React from "react";
import classes from "./DrawerToggle.module.scss";

const DrawerToggle = props => {
	return <div className={classes.DrawerToggle} onClick={props.clicked}>Menu</div>;
};

export default DrawerToggle;
