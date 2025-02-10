import React from "react";
import { Container, Typography } from "@mui/material";

export default function About() {
  return (
    <Container style={{ padding: "20px", textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1">
        Lifewood is dedicated to providing innovative AI-driven solutions to help businesses grow and make data-driven decisions.
        Our goal is to empower companies with transformative tools that shape the future of technology.
      </Typography>
    </Container>
  );
}
