import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Auxiliary from "../../../hoc/Auxiliary";
import classes from "./SideDrawer.module.scss";

const sideDrawer = props => {
	return (
		<Auxiliary>
			<Backdrop show />
			<div className={classes.SideDrawer}>
				<Logo />
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Auxiliary>
	);
};

export default sideDrawer;
