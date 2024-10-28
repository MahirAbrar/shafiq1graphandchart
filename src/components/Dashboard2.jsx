import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
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
import renderBarChart from "./ui/renderBarChart";

const Dashboard2 = () => {
  const environmentData = [
    { name: "Ecosystem", value: 10 },
    { name: "Deforestation", value: 13 },
    { name: "Sustainability", value: 19 },
    { name: "Geographic Location", value: 35 },
    { name: "Climate Adaptability", value: 23 },
  ];

  const safetyData = [
    { name: "Natural Hazard", value: 31 },
    { name: "Distance from Border", value: 22 },
    { name: "Distance from War Zone", value: 11 },
    { name: "Respect for Local", value: 20 },
    { name: "Privacy and Dignity", value: 16 },
  ];

  const infrastructureData = [
    { name: "Network of Roads/Rails/Ports", value: 27 },
    { name: "Accessibility for Trucks", value: 17 },
    { name: "Transportation to Communities", value: 10 },
    { name: "Space and Expansion", value: 25 },
    { name: "Water and Sanitation Systems", value: 21 },
  ];

  const communityData = [
    { name: "Maintain Social Fabric", value: 15 },
    { name: "Families Together", value: 39 },
    { name: "Cultural Groups Together", value: 7 },
    { name: "Religious Sensitivity", value: 21 },
    { name: "Communal Space", value: 18 },
  ];

  const sanitationData = [
    { name: "Ground Water Table", value: 15 },
    { name: "Slope Max 10%", value: 26 },
    { name: "Slope 2-4%", value: 18 },
    { name: "Outside Flood Plain", value: 20 },
    { name: "Soil Strength", value: 21 },
  ];

  // 1 to 11

  const foundationData = [
    { name: "15-30 cm", value: 49 },
    { name: "31-60 cm", value: 41 },
    { name: "61-81.28 cm", value: 7 },
    { name: "Unknown", value: 3 },
  ];

  const heightData = [
    { name: "140-160 cm", value: 53 },
    { name: "161-180 cm", value: 42 },
    { name: "181-200 cm", value: 5 },
  ];

  const spacingData = [
    { name: "Less than 100 cm", value: 17 },
    { name: "100-125 cm", value: 37 },
    { name: "125-150 cm", value: 25 },
    { name: "More than 150 cm", value: 21 },
  ];

  const bracingData = [
    { name: "With bracing", value: 9 },
    { name: "With crossbeams", value: 14 },
    { name: "With crossbeams and bracing", value: 10 },
    { name: "Without bracing and crossbeams", value: 67 },
  ];

  const ventilationData = [
    { name: "Poor ventilation", value: 83 },
    { name: "Sufficient ventilation", value: 12 },
    { name: "Unknown", value: 5 },
  ];

  // Data for bar charts
  const concernsData = [
    { name: "Insufficient roof strength", value: 73 },
    { name: "Weak foundation", value: 67 },
    { name: "Rotten materials", value: 64 },
    { name: "Weak walls", value: 59 },
    { name: "No kitchen", value: 56 },
    { name: "Poor wall durability", value: 52 },
    { name: "Fire safety issues", value: 51 },
    { name: "Flood prone", value: 48 },
    { name: "Privacy concerns", value: 45 },
    { name: "Poor ventilation", value: 43 },
  ];

  const roofData = [
    { name: "Muli bamboo construction", value: 83 },
    { name: "Poor tying", value: 74 },
    { name: "Insufficient pitch", value: 66 },
    { name: "Wide purlin spacing", value: 31 },
    { name: "Wide rafter spacing", value: 37 },
  ];

  const wallsData = [
    { name: "Poor wall tying", value: 57 },
    { name: "Wrong rope used", value: 63 },
    { name: "Wrong tying type", value: 58 },
    { name: "Received training", value: 13 },
  ];

  const kitchenData = [
    { name: "Inadequate space", value: 81 },
    { name: "Request kitchen", value: 93 },
    { name: "Non-flammable materials", value: 71 },
    { name: "Sufficient ventilation", value: 76 },
    { name: "Fire safety issues", value: 67 },
  ];

  const washData = [
    { name: "Poor bathing facilities", value: 56 },
    { name: "Poor toilet cubicles", value: 61 },
    { name: "Inaccessible toilets", value: 78 },
    { name: "No water supply", value: 65 },
    { name: "No drainage", value: 59 },
    { name: "Poor waste management", value: 68 },
  ];

  const materialsData = [
    { name: "Borak bamboo rot", value: 62 },
    { name: "Borak bamboo damage", value: 51 },
    { name: "Borak bamboo broken", value: 47 },
    { name: "Muli bamboo rot", value: 67 },
    { name: "Muli bamboo broken", value: 61 },
    { name: "Leaking roof", value: 71 },
    { name: "Tarpaulin rot", value: 69 },
    { name: "Torn ropes", value: 45 },
  ];

  const renderPieChart = (data, title) => (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={150}
                label={(props) => {
                  const RADIAN = Math.PI / 180;
                  const { cx, cy, midAngle, outerRadius, value, name } = props;
                  const radius = outerRadius * 1.2;
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);

                  return (
                    <text
                      x={x}
                      y={y}
                      fill="#0f172a"
                      style={{
                        fontSize: 19,
                        fontWeight: 700,
                      }}
                      textAnchor={x > cx ? "start" : "end"}
                      dominantBaseline="central"
                    >
                      {`${name}: ${value}%`}
                    </text>
                  );
                }}
                labelLine
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      ["#0891b2", "#0e7490", "#155e75", "#164e63", "#083344"][
                        index % 5
                      ]
                    }
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-8 p-4">
      {renderPieChart(environmentData, "Environmental Considerations")}
      {renderPieChart(safetyData, "Safety and Security")}
      {renderPieChart(infrastructureData, "Accessibility/Infrastructure")}
      {renderPieChart(communityData, "Community and Social Structure")}
      {renderPieChart(sanitationData, "Water, Sanitation, and Hygiene")}
      {renderBarChart(concernsData, "Top 10 Key Shelter Concerns", 100, 20)}
      {renderPieChart(foundationData, "Shelter Foundation Depth Distribution")}
      {renderPieChart(heightData, "Shelter Height Distribution")}
      {renderBarChart(roofData, "Roof Construction Issues", 90, 30)}
      {renderBarChart(wallsData, "Wall Construction Issues")}
      {renderPieChart(spacingData, "Spacing of Shelter Posts")}
      {renderPieChart(bracingData, "Bracing and Crossbeam Support")}
      {renderPieChart(ventilationData, "Shelter Ventilation Status")}
      {renderBarChart(kitchenData, "Kitchen Concerns", 40, 10, ["#FF5722"])}
      {renderBarChart(
        washData,
        "Water, Sanitation, and Hygiene Issues",
        65,
        20,
        ["#154360"]
      )}
      {renderBarChart(
        materialsData,
        "Construction Materials Condition",
        40,
        10,
        [
          "#2E7D32",
          "#2E7D32",
          "#2E7D32",
          "#795548",
          "#795548",
          "#1565C0",
          "#1565C0",
          "#F57C00",
        ]
      )}
    </div>
  );
};

export default Dashboard2;
