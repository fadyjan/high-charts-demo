import React from "react";
import "./HightChart.css";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import _ from "lodash";
import HighchartsExporting from "highcharts/modules/exporting";
//To display exporting menu
HighchartsExporting(Highcharts);

const HighChart = () => {
  const getOptions = (type) => ({
    chart: {
      type,
      width: 500,
      height: 300,
    },
    title: {
      text: _.startCase(`${type} chart`),
    },
    yAxis: {
      title: {
        text: "Values",
      },
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6],
      },
      {
        data: [2, 7, 0, 4, 6, 2],
      },
    ],
    credits: {
      text: "Built by FadyJan",
    },
  });
  return (
    <>
      {/* <div id="BarController">
        <button >Activate 3d</button>
      </div> */}
      <div id="HightChartsWrapper">
        <HighchartsReact highcharts={Highcharts} options={getOptions("line")} />
        <HighchartsReact
          highcharts={Highcharts}
          options={getOptions("spline")}
        />
        <HighchartsReact highcharts={Highcharts} options={getOptions("area")} />
        <HighchartsReact
          highcharts={Highcharts}
          options={getOptions("areaspline")}
        />
        <HighchartsReact
          highcharts={Highcharts}
          options={getOptions("column")}
        />
        <HighchartsReact highcharts={Highcharts} options={getOptions("bar")} />
        <HighchartsReact highcharts={Highcharts} options={getOptions("pie")} />
        <HighchartsReact
          highcharts={Highcharts}
          options={getOptions("scatter")}
        />
      </div>
    </>
  );
};

export default HighChart;
