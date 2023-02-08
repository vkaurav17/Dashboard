import React from "react";
import { AreaChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";

class CurveChart extends React.Component {
	state = {
		data: [
	{
		"group": "previous",
		"date": "2019-01-01T00:00:00.000Z",
		"value": 0
	},
	{
		"group": "previous",
		"date": "2019-01-06T00:00:00.000Z",
		"value": -37312
	},
	{
		"group": "previous",
		"date": "2019-01-08T00:00:00.000Z",
		"value": -22392
	},
	{
		"group": "previous",
		"date": "2019-01-15T00:00:00.000Z",
		"value": -52576
	},
	{
		"group": "previous",
		"date": "2019-01-19T00:00:00.000Z",
		"value": 20135
	},
	{
		"group": "current",
		"date": "2019-01-01T00:00:00.000Z",
		"value": 47263
	},
	{
		"group": "current",
		"date": "2019-01-05T00:00:00.000Z",
		"value": 14178
	},
	{
		"group": "current",
		"date": "2019-01-08T00:00:00.000Z",
		"value": 23094
	},
	{
		"group": "current",
		"date": "2019-01-13T00:00:00.000Z",
		"value": 45281
	},
	{
		"group": "current",
		"date": "2019-01-19T00:00:00.000Z",
		"value": -63954
	}
],
		options: {
	"title": "User Activity",
	"axes": {
		"bottom": {
			
			"mapsTo": "date",
			"scaleType": "time"
		},
		"left": {
			"mapsTo": "value",
			"scaleType": "linear"
		}
	},
	"curve": "curveNatural",
	"height": "400px"
}
	};

	render = () => (
		<AreaChart
			data={this.state.data}
			options={this.state.options}>
		</AreaChart>
	);
}
export default CurveChart;
  