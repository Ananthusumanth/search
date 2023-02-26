import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../App.css";

const data = [
  {
    name: "2011",
    uv: "10",
  },
  {
    name: "2012",
    uv: "30",
  },
  {
    name: "2013",
    uv: "40",
  },
  {
    name: "2014",
    uv: "20",
  },
  {
    name: "2015",
    uv: "60",
  },
  {
    name: "2016",
    uv: "100",
  },
  {
    name: "2017",
    uv: "10",
  },
  {
    name: "2018",
    uv: "90",
  },
  {
    name: "2019",
    uv: "50",
  },
  {
    name: "2020",
    uv: "20",
  },
  {
    name: "2021",
    uv: "80",
  },
];

function Chart() {
  return (
    <div id="chart">
      <h4  style={{ color: "#7B8C92", fontSize:"medium", fontWeight:"500" ,marginLeft:"4px"}}>
        Number of Articles published for year
      </h4><br/>
      <ResponsiveContainer aspect={4 / 1}>
        <AreaChart data={data}>
          <XAxis dataKey="name" style={{ color: "red" }} />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="red" fill="skyblue" />
          <CartesianGrid style={{ color: "#7B8C92" }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
