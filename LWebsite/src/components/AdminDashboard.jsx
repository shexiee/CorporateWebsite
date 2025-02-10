import React from "react";
import { Container, Typography } from "@mui/material";

export default function AdminDashboard() {
  return (
    <Container style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h3" gutterBottom>
        Admin Dashboard
      </Typography>
      <Typography variant="body1">
        Welcome, Admin! Use this dashboard to manage the system.
      </Typography>
      {/* Add dashboard content here */}
    </Container>
  );
}
