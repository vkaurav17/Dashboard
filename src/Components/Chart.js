import React from "react";
import { SimpleBarChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";

class Chart extends React.Component {
	state = {
		data: [
	{
		"group": "Jan",
		"value": 65000
	},
	{
		"group": "Feb",
		"value": 29123
	},
	{
		"group": "March",
		"value": 35213
	},
	{
		"group": "April",
		"value": 51213
	},
	{
		"group": "May",
		"value": 16932
	}
],
		options: {
	"title": "Overview",
	"axes": {
		"left": {
			"mapsTo": "value"
		},
		"bottom": {
      "mapsTo": "group",
			"scaleType": "labels"
		}
	},
	"height": "400px"
}
	};

	render = () => (
		<SimpleBarChart
			data={this.state.data}
			options={this.state.options}>
		</SimpleBarChart>
	);
}
export default Chart;
  