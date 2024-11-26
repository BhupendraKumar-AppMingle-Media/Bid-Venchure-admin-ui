import { Card, CardContent, LinearProgress, Typography } from "@mui/material";
import React from "react";

const DeliveryPerformance = () => {
  const onTimeDeliveryRate = 80; // in percentage

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Delivery Performance
        </Typography>
        <Typography>On-Time Deliveries: {onTimeDeliveryRate}%</Typography>
        <LinearProgress variant="determinate" value={onTimeDeliveryRate} />
      </CardContent>
    </Card>
  );
};

export default DeliveryPerformance;
