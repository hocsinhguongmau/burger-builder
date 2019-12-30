import React, {Component} from "react";
import classes from "./Modal.module.scss";
import Backdrop from "../Backdrop/Backdrop";
import Auxiliary from "../../../hoc/Auxiliary";

class Modal extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.show !== this.props.show;
	}
	componentWillUpdate() {
		console.log("[Modal] componentWillUpdate");
	}
	render() {
		return (
			<Auxiliary>
				<Backdrop show={this.props.show} clicked={this.props.closed} />
				<div
					className={classes.Modal}
					style={{
						transform: this.props.show
							? "translateY(0)"
							: "translateY(-100vh)",
						opacity: this.props.show ? 1 : 0
					}}
				>
					{this.props.children}
				</div>
			</Auxiliary>
		);
	}
}

export default Modal;
