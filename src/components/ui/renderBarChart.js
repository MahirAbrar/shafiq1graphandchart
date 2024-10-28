import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Label,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "./card";

const renderCustomizedLabel = (props) => {
  const { x, y, width, height, value } = props;
  const radius = 10;

  return (
    <text
      x={x + width / 2}
      y={y + height / 2}
      fill="#fff"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {value}%
    </text>
  );
};
let pieColors = [
  "#2563eb", // Blue
  "#16a34a", // Green
  "#ea580c", // Orange
  "#8b5cf6", // Purple
  "#db2777", // Pink
  "#0891b2", // Cyan
];

const renderBarChart = (
  data,
  title,
  left = 40,
  bottom = 10,
  colors = pieColors
) => (
  <Card className="mb-8">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ left: left, bottom: bottom }}>
            <XAxis
              dataKey="name"
              angle={-20}
              textAnchor="end"
              height={85}
              tick={{
                fill: "#0f172a",
                fontSize: "19px",
                fontWeight: 700,
              }}
            />
            <YAxis
              label={{
                value: "Percentage (%)",
                angle: -90,
                position: "insideLeft",
                fill: "#0f172a",
                fontSize: "17px",
                fontWeight: 700,
              }}
              tick={{
                fill: "#0f172a",
                fontSize: "18px",
                fontWeight: 700,
              }}
            />
            <Tooltip />
            <Bar dataKey="value" label={renderCustomizedLabel}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
);

export default renderBarChart;
