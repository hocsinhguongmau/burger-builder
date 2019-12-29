import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Toolbar.module.scss";

const Toolbar = props => {
	return (
		<header className={classes.Toolbar}>
			<div>Menu</div>
			<Logo height="80%" />
			<nav>
				<NavigationItems />
			</nav>
		</header>
	);
};

export default Toolbar;
