import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const EngagementMetrics = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Customer Engagement Metrics
        </Typography>
        <Typography>Repeat Customers: 30%</Typography>
        <Typography>Cart Abandonment Rate: 12%</Typography>
      </CardContent>
    </Card>
  );
};

export default EngagementMetrics;
