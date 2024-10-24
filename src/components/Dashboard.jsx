// components/Dashboard.jsx
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

const Dashboard = () => {
  // Skills and Training Data
  // Knowledge, Skills, and Training Assessment
  const skillsData = [
    { name: "Received training", value: 47 },
    { name: "Construction skills", value: 52 },
    { name: "Construction knowledge", value: 19 },
    { name: "Skills & training", value: 45 },
    { name: "Knowledge & training", value: 37 },
    { name: "All three", value: 29 },
    { name: "None", value: 21 },
    { name: "Would like to receive all", value: 97 },
  ];

  // Types of Shelter Construction Materials Preference
  const materialsData = [
    { name: "Tarpaulin", value: 93 },
    { name: "Borak bamboo", value: 94 },
    { name: "Muli bamboo", value: 91 },
    { name: "Wire", value: 81 },
    { name: "Rope", value: 90 },
    { name: "Wood", value: 25 },
    { name: "Cement", value: 65 },
    { name: "Sand", value: 47 },
    { name: "Sandbag", value: 61 },
    { name: "CGI sheet", value: 49 },
    { name: "Brick", value: 51 },
    { name: "Tools", value: 57 },
  ].sort((a, b) => b.value - a.value);

  // Individual
  // Tarpaulin Sheet Distribution
  const tarpaulinData = [
    { name: "1-3", value: 7 },
    { name: "4-6", value: 30 },
    { name: "7-9", value: 41 },
    { name: "10-12", value: 12 },
    { name: "13-15", value: 6 },
    { name: "16-18", value: 4 },
  ];

  // Borak Bamboo Distribution (pieces)
  const borakBambooData = [
    { name: "1-4", value: 5 },
    { name: "5-8", value: 25 },
    { name: "9-12", value: 35 },
    { name: "13-16", value: 15 },
    { name: "17-20", value: 10 },
    { name: "25-28", value: 10 }, // Combined the duplicate entries
  ];

  // Muli Bamboo Distribution (pieces)
  const muliBambooData = [
    { name: "1-25", value: 8 },
    { name: "26-50", value: 12 },
    { name: "51-75", value: 21 },
    { name: "76-100", value: 49 },
    { name: "126-150", value: 10 }, // Combined the duplicate entries
  ];

  // Wire Distribution (kg)
  const wireData = [
    { name: "1-2", value: 12 },
    { name: "3-4", value: 18 },
    { name: "5-6", value: 52 },
    { name: "7-8", value: 10 },
    { name: "9-10", value: 8 },
  ];

  // Rope Distribution (kg)
  const ropeData = [
    { name: "1-2", value: 15 },
    { name: "3-4", value: 30 },
    { name: "5-6", value: 42 },
    { name: "9-10", value: 8 },
    { name: "10-11", value: 5 },
  ];

  // Sandbag Distribution
  const sandbagData = [
    { name: "1-20", value: 18 },
    { name: "21-40", value: 22 },
    { name: "41-60", value: 41 },
    { name: "61-80", value: 12 },
    { name: "80-100", value: 7 },
  ];

  // Durable Shelter Construction Materials
  const durableData = [
    { name: "Reinforced concrete post", value: 96 },
    { name: "Bamboo walling", value: 75 },
    { name: "CGI for roofing", value: 98 },
    { name: "Brick for plinth", value: 82 },
    { name: "Cement for plinth", value: 78 },
  ];

  // Household Toolkit Allocation
  const householdToolkitData = [
    { name: "1 HH", value: 11 },
    { name: "2 HH", value: 47 },
    { name: "3 HH", value: 21 },
    { name: "4 HH", value: 12 },
    { name: "5 HH", value: 7 },
    { name: "6 HH", value: 2 },
  ];

  // Community Toolkit Allocation
  const communityToolkitData = [
    { name: "20 HH", value: 9 },
    { name: "40 HH", value: 18 },
    { name: "60 HH", value: 39 },
    { name: "80 HH", value: 21 },
    { name: "100 HH", value: 10 },
    { name: "120 HH", value: 3 },
  ];

  // Color palette for charts
  const COLORS = {
    // Primary colors for main metrics
    primary: "#2563eb", // Blue
    secondary: "#16a34a", // Green
    tertiary: "#ea580c", // Orange

    // Colors for pie charts and multiple segments
    pieColors: [
      "#2563eb", // Blue
      "#16a34a", // Green
      "#ea580c", // Orange
      "#8b5cf6", // Purple
      "#db2777", // Pink
      "#0891b2", // Cyan
    ],

    // Colors for material types
    materials: "#2563eb", // Blue

    // Colors for distribution charts
    distribution: {
      tarpaulin: "#0891b2", // Cyan
      borak: "#16a34a", // Green
      muli: "#2563eb", // Blue
      wire: "#8b5cf6", // Purple
      rope: "#ea580c", // Orange
      sandbag: "#db2777", // Pink
    },
  };

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

  // text darker
  // bar width shorten
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>
            Refugee Households Level Assessment on Knowledge, Skills, and
            Training
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={skillsData}>
                <XAxis
                  dataKey="name"
                  angle={-20}
                  textAnchor="end"
                  height={100}
                  tick={{
                    fill: "#0f172a",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                />
                <YAxis
                  label={{
                    value: "Percentage (%)",
                    angle: -90,
                    position: "insideLeft",
                    fill: "#0f172a",
                  }}
                  tick={{
                    fill: "#0f172a",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                />
                <Tooltip />
                <Bar
                  dataKey="value"
                  fill={COLORS.primary}
                  label={renderCustomizedLabel}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            Types of Shelter Construction Materials Would Like to Receive
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={materialsData}>
                <XAxis
                  dataKey="name"
                  angle={-20}
                  textAnchor="end"
                  height={100}
                  tick={{
                    fill: "#0f172a",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                />
                <YAxis
                  label={{
                    value: "Percentage (%)",
                    angle: -90,
                    position: "insideLeft",
                    fill: "#0f172a",
                  }}
                  tick={{
                    fill: "#0f172a",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                />
                <Tooltip />
                <Bar
                  dataKey="value"
                  fill={COLORS.materials}
                  label={renderCustomizedLabel}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tarpaulin Sheet Distribution Preference</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={tarpaulinData}>
                <XAxis
                  dataKey="name"
                  label={{ value: "Number of Sheets", position: "bottom" }}
                  tick={{
                    fill: "#0f172a",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                />
                <Label
                  value="Tarpaulin Sheets"
                  position="bottom"
                  offset={10} // Distance from axis
                  style={{
                    textAnchor: "middle",
                    fontSize: "14px",
                    fill: "#666666",
                  }}
                />
                <YAxis
                  label={{
                    value: "Percentage (%)",
                    angle: -90,
                    position: "insideLeft",
                    fill: "#0f172a",
                  }}
                  tick={{
                    fill: "#0f172a",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                />
                <Tooltip />
                <Bar
                  dataKey="value"
                  fill={COLORS.distribution.tarpaulin}
                  label={renderCustomizedLabel}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Borak Bamboo Distribution Preference</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={borakBambooData}>
                <Label
                  value="Borak Bamboo Pieces"
                  position="bottom"
                  offset={10} // Distance from axis
                  style={{
                    textAnchor: "middle",
                    fontSize: "14px",
                    fill: "#666666",
                  }}
                />
                <XAxis
                  dataKey="name"
                  label={{ value: "Number of Pieces", position: "bottom" }}
                  tick={{
                    fill: "#0f172a",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                />
                <YAxis
                  label={{
                    value: "Percentage (%)",
                    angle: -90,
                    position: "insideLeft",
                    fill: "#0f172a",
                  }}
                  tick={{
                    fill: "#0f172a",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                />
                <Tooltip />
                <Bar
                  dataKey="value"
                  fill={COLORS.distribution.borak}
                  label={renderCustomizedLabel}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Muli bamboo Distribution Preference</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={muliBambooData}
                margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
              >
                <XAxis
                  dataKey="name"
                  tickMargin={10}
                  tick={{
                    fill: "#0f172a",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  <Label
                    value="Number of Pieces of Muli Bamboo"
                    position="bottom"
                    offset={10} // Distance from axis
                    style={{
                      textAnchor: "middle",
                      fontSize: "14px",
                      fill: "#0f172a",
                    }}
                  />
                </XAxis>
                <YAxis
                  label={{
                    value: "Percentage (%)",
                    angle: -90,
                    position: "insideLeft",
                    fill: "#0f172a",
                  }}
                  tick={{
                    fill: "#0f172a",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                />
                <Tooltip />
                <Bar
                  dataKey="value"
                  fill={COLORS.distribution.muli}
                  label={renderCustomizedLabel}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Wire Distribution Preference</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={wireData}
                margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
              >
                <XAxis
                  dataKey="name"
                  tickMargin={10}
                  tick={{
                    fill: "#0f172a",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  <Label
                    value="Wire (kg)"
                    position="bottom"
                    offset={10} // Distance from axis
                    style={{
                      textAnchor: "middle",
                      fontSize: "14px",
                      fill: "#0f172a",
                    }}
                  />
                </XAxis>
                <YAxis
                  label={{
                    value: "Percentage (%)",
                    angle: -90,
                    position: "insideLeft",
                    fill: "#0f172a",
                  }}
                  tick={{
                    fill: "#0f172a",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                />
                <Tooltip />
                <Bar
                  dataKey="value"
                  fill={COLORS.distribution.wire}
                  label={renderCustomizedLabel}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Rope Distribution Preference</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={ropeData}
                margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
              >
                <XAxis
                  dataKey="name"
                  tickMargin={10}
                  tick={{
                    fill: "#0f172a",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  <Label
                    value="Rope (kg)"
                    position="bottom"
                    offset={10} // Distance from axis
                    style={{
                      textAnchor: "middle",
                      fontSize: "14px",
                      fill: "#0f172a",
                    }}
                  />
                </XAxis>
                <YAxis
                  label={{
                    value: "Percentage (%)",
                    angle: -90,
                    position: "insideLeft",
                    fill: "#0f172a",
                  }}
                  tick={{
                    fill: "#0f172a",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                />
                <Tooltip />
                <Bar
                  dataKey="value"
                  fill={COLORS.distribution.rope}
                  label={renderCustomizedLabel}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sandbag Distribution Preference</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={sandbagData}
                margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
              >
                <XAxis
                  dataKey="name"
                  tickMargin={10}
                  tick={{
                    fill: "#0f172a",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  <Label
                    value="Sandbag (nos)"
                    position="bottom"
                    offset={10} // Distance from axis
                    style={{
                      textAnchor: "middle",
                      fontSize: "14px",
                      fill: "#0f172a",
                    }}
                  />
                </XAxis>
                <YAxis
                  label={{
                    value: "Percentage (%)",
                    angle: -90,
                    position: "insideLeft",
                    fill: "#0f172a",
                  }}
                  tick={{
                    fill: "#0f172a",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                />
                <Tooltip />
                <Bar
                  dataKey="value"
                  fill={COLORS.distribution.sandbag}
                  label={renderCustomizedLabel}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            Durable shelter construction materials advocated by refugee HHs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={durableData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {durableData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS.pieColors[index % COLORS.pieColors.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            Effective household (HH) toolkit allocation for shelter operation
            and maintenance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={householdToolkitData}>
                <XAxis
                  dataKey="name"
                  tick={{
                    fill: "#0f172a",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                />
                <YAxis
                  label={{
                    value: "Percentage (%)",
                    angle: -90,
                    position: "insideLeft",
                    fill: "#0f172a",
                  }}
                  tick={{
                    fill: "#0f172a",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                />
                <Tooltip />
                <Bar
                  dataKey="value"
                  fill={COLORS.tertiary}
                  label={renderCustomizedLabel}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>
            Effective community toolkit allocation for community support
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={communityToolkitData}>
                <XAxis
                  dataKey="name"
                  tick={{
                    fill: "#0f172a",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                />
                <YAxis
                  label={{
                    value: "Percentage (%)",
                    angle: -90,
                    position: "insideLeft",
                    fill: "#0f172a",
                  }}
                  tick={{
                    fill: "#0f172a",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                />
                <Tooltip />
                <Bar
                  dataKey="value"
                  fill={COLORS.tertiary}
                  label={renderCustomizedLabel}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
