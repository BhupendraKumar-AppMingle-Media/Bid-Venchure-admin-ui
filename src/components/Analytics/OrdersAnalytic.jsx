import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Placed", count: 150 },
  { name: "Completed", count: 120 },
];

const OrdersAnalytic = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Orders Placed and Completed
        </Typography>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default OrdersAnalytic;
