import React, { useState } from "react";

import {
  Box,
  Typography,
  Paper,
  Button,
  MenuItem,
  // Select,
  TextField,
  Grid,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
// import { saveAs } from "file-saver";
import * as XLSX from "xlsx";

const BiddingDashboard = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [restaurant, setRestaurant] = useState("");
  const [eventType, setEventType] = useState("");
  const [bidType, setBidType] = useState("");

  // Sample Data for the bidding report
  const biddingData = [
    {
      id: 1,
      restaurant: "The Gourmet Kitchen",
      eventType: "Wedding",
      bidType: "Fixed",
      averageBidValue: 12000,
      totalBids: 15,
      revenueGenerated: 180000,
    },
    {
      id: 2,
      restaurant: "Urban Bites",
      eventType: "Corporate",
      bidType: "Auction",
      averageBidValue: 8500,
      totalBids: 10,
      revenueGenerated: 85000,
    },
    {
      id: 3,
      restaurant: "The Rustic Diner",
      eventType: "Birthday",
      bidType: "Fixed",
      averageBidValue: 4500,
      totalBids: 8,
      revenueGenerated: 36000,
    },
    // Add more sample data as required
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "restaurant", headerName: "Restaurant", width: 180 },
    { field: "eventType", headerName: "Event Type", width: 160 },
    { field: "bidType", headerName: "Bid Type", width: 130 },
    { field: "averageBidValue", headerName: "Avg. Bid Value", width: 160 },
    { field: "totalBids", headerName: "Total Bids", width: 120 },
    { field: "revenueGenerated", headerName: "Revenue Generated", width: 180 },
  ];

  // Filter the bidding data based on selected criteria
  const filteredData = biddingData.filter((entry) => {
    const isWithinDateRange =
      (!startDate || new Date(entry.date) >= startDate) &&
      (!endDate || new Date(entry.date) <= endDate);
    const matchesRestaurant = restaurant
      ? entry.restaurant === restaurant
      : true;
    const matchesEventType = eventType ? entry.eventType === eventType : true;
    const matchesBidType = bidType ? entry.bidType === bidType : true;

    return isWithinDateRange && matchesRestaurant && matchesEventType && matchesBidType;
  });

  // Export data to Excel
  const handleExportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(filteredData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "BiddingReport");
    XLSX.writeFile(wb, "BiddingReport.xlsx");
  };

  return (
    <Box p={4} component={Paper} elevation={3} sx={{ borderRadius: 2 }}>
      {/* <Typography variant="h4" gutterBottom align="center">
        Bidding Management
      </Typography> */}

<Typography
  variant="h4"
  gutterBottom
  align="center"
  className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent animate-text"
>
  Bidding Management 
</Typography>

      <Typography variant="subtitle1" color="text.secondary" align="center">
        Monitor bidding activity, restaurant performance, and generate detailed
        reports.
      </Typography>

      {/* Filters */}
      <Box my={3}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <DatePicker
                label="Start Date"
                value={startDate}
                onChange={(date) => setStartDate(date)}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <DatePicker
                label="End Date"
                value={endDate}
                onChange={(date) => setEndDate(date)}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                select
                label="Restaurant"
                value={restaurant}
                onChange={(e) => setRestaurant(e.target.value)}
                fullWidth
              >
                <MenuItem value="">All Restaurants</MenuItem>
                <MenuItem value="The Gourmet Kitchen">
                  The Gourmet Kitchen
                </MenuItem>
                <MenuItem value="Urban Bites">Urban Bites</MenuItem>
                <MenuItem value="The Rustic Diner">The Rustic Diner</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                select
                label="Event Type"
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                fullWidth
              >
                <MenuItem value="">All Event Types</MenuItem>
                <MenuItem value="Wedding">Wedding</MenuItem>
                <MenuItem value="Corporate">Corporate</MenuItem>
                <MenuItem value="Birthday">Birthday</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                select
                label="Bid Type"
                value={bidType}
                onChange={(e) => setBidType(e.target.value)}
                fullWidth
              >
                <MenuItem value="">All Bid Types</MenuItem>
                <MenuItem value="Fixed">Fixed</MenuItem>
                <MenuItem value="Auction">Auction</MenuItem>
              </TextField>
            </Grid>
          </Grid>
        </LocalizationProvider>
      </Box>

      {/* Bidding Data Table */}
      <Box my={3} style={{ height: 400 }}>
        <DataGrid rows={filteredData} columns={columns} pageSize={5} />
      </Box>

      {/* Export Buttons */}
      <Box display="flex" justifyContent="space-between" mt={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleExportExcel}
          style={{ backgroundColor: "#172554" }}
        >
          Export as Excel
        </Button>
      </Box>
    </Box>
  );
};

export default BiddingDashboard;
