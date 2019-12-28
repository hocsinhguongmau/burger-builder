import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.scss";

const controls = [
	{label: "Salad", type: "salad"},
	{label: "Bacon", type: "bacon"},
	{label: "Cheese", type: "cheese"},
	{label: "Meat", type: "meat"}
];

const BuildControls = props => {
	return (
		<div className={classes.BuildControls}>
			<p>
				Price: <b>{props.price.toFixed(2)}</b>
			</p>
			{controls.map(ctrl => {
				return (
					<BuildControl
						key={ctrl.label}
						label={ctrl.label}
						added={() => props.ingredientAdded(ctrl.type)}
						removed={() => props.ingredientRemoved(ctrl.type)}
						disabled={props.disabled[ctrl.type]}
					/>
				);
			})}
			<button className={classes.OrderButton} disabled={!props.purchase}>
				Order Now
			</button>
		</div>
	);
};

export default BuildControls;
