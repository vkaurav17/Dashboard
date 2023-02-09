import React from "react";
import { GaugeChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";
// Or
// import "@carbon/charts/styles/styles.scss";

// IBM Plex should either be imported in your project by using Carbon
// or consumed manually through an import


class SemiChart extends React.Component {
	state = {
		data: [
	{
		"group": "value",
		"value": 76
	},
	{
		"group": "delta",
		"value": -13.37
	}
],
		options: {
	"title": "Earning",
	// "resizable": true,
	"height": "140px",
	"width": "350px",
	"gauge": {
		"type": "semi",
		
	}
}
	};

	render = () => (
		<GaugeChart
			data={this.state.data}
			options={this.state.options}>
		</GaugeChart>
	);
}
export default SemiChart;
  