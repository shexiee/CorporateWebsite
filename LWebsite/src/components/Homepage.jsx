import React from "react";
import { Typography, Box, Container, Grid } from "@mui/material";
import "./css/homepage.css";

export default function Homepage() {
  return (
    <Box className="main-container">
      <Box className="banner-section">
        <img 
          src="src/assets/banner.jpg" 
          alt="Be Amazed" 
          className="banner-image" 
          style={{ objectFit: "cover", height: "600px", width: "100%" }} 
        />
        <Typography variant="h2" className="banner-text">Data-Driven Decisions</Typography>
        <Typography variant="h5" className="banner-text1">Unlock innovation with AI</Typography>
      </Box>

      <Container className="info-section">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1">
              At Lifewood, we empower businesses to realise the transformative potential of AI:
              bringing big data to life: launching new ways of thinking, innovating, doing.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1">
              This is the next level of AI's potential, uncovering new methods and insights to reveal
              unexpected directions and possibilities: connecting across time, generations, and
              technologies for everyone; delivering the highest levels of scalability, integration, and security.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
