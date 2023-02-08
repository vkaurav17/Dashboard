import React from "react";
import { DonutChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";

class CircleChart extends React.Component {
	state = {
		data: [
	{
		"group": "loss",
		"value": 20000
	},
	{
		"group": "profit",
		"value": 65000
	},
	{
		"group": "average",
		"value": 75000
	}
],
		options: {
	"title": "order stats",
	"resizable": true,
	"height": "400px"
}
	};

	render = () => (
		<DonutChart
			data={this.state.data}
			options={this.state.options}>
		</DonutChart>
	);
}
export default CircleChart;
  