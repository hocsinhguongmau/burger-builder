import React, {Component} from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import classes from "./Layout.module.scss";

class Layout extends Component {
	render() {
		return (
			<Auxiliary>
				<Toolbar />
				<SideDrawer />
				<main className={classes.Content}>{this.props.children}</main>
			</Auxiliary>
		);
	}
}
export default Layout;
