import React, { useState } from "react";
import { Typography, Box, Grid, Card, CardContent, Tabs, Tab } from "@mui/material";
import "./css/services.css";

export default function Services() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const modalities = [
    {
      title: "01. Text",
      description:
        "Text collection, labelling, transcription, utterance, sentiment analysis.",
    },
    {
      title: "02. Audio",
      description:
        "Collection, labelling, voice categorisation, music intelligence.",
    },
    {
      title: "03. Image",
      description:
        "Collection, labelling, classification, audit, object detection and tagging.",
    },
    {
      title: "04. Video",
      description:
        "Collection, labelling, audit, live broadcast, subtitle generation.",
    },
  ];

  const services = [
    {
      title: "DATA ACQUISITION",
      description:
        "At Lifewood, we provide comprehensive data solutions for acquiring, processing, and managing diverse datasets to fuel the training and evolution of artificial intelligence.",
    },
    {
      title: "DATA COLLECTION",
      description:
        "Text collection, labelling, speech collection (utterance), sentiment analysis: our services include audio, music, and video categorisation, classification, labelling, tagging, and broadcast subtitles.",
    },
    {
      title: "DATA ANNOTATION",
      description:
        "In the age of AI, data is the fuel for all analytics and machine learning. Lifewood provides high-quality annotation services for a wide range of mediums, including text, image, audio, and video for both computer vision and natural language processing.",
    },
    {
      title: "DATA CURATION",
      description:
        "We sift, select, and index data to ensure reliability, accessibility, and ease of classification. Data can be curated to support business decisions, academic research, genealogies, scientific research, and more.",
    },
    {
      title: "DATA VALIDATION",
      description:
        "The goal is to create data that is consistent, accurate, and complete, preventing data loss or errors in transfer, code, or configuration. We verify that data conforms to predefined standards, rules, or constraints.",
    },
  ];

  return (
    <>
      {/* VIDEO SECTION (FIRST) */}
      <Box className="services-container">
        <video
          className="services-video"
          autoPlay
          muted
          loop
          playsInline
          src="src/assets/services.mp4"
          type="video/mp4"
        ></video>
        <Box className="services-overlay">
          <Box className="services-text-wrapper">
            <Typography variant="h2" className="services-title">
              AI Data Services
            </Typography>
            <Typography variant="body1" className="services-subtitle">
              Lifewood provides AI data collection services for multiple industries, enabling clients to make better decisions, reduce overall costs, and increase productivity, optimizing organizational goals.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* MODALITIES SECTION (SECOND) */}
      <Box className="modalities-section" sx={{ padding: "60px 20px" }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={3}>
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", textAlign: "left", marginBottom: "20px" }}
            >
              MODALITIES
            </Typography>
            <Box
              sx={{
                width: "80px",
                height: "3px",
                backgroundColor: "#000",
                opacity: 0.2,
                marginBottom: "20px",
              }}
            ></Box>
          </Grid>
          <Grid item xs={12} md={9}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                {/* MUI VERTICAL TABS */}
                <Tabs
                  orientation="vertical"
                  value={selectedTab}
                  onChange={handleChange}
                  sx={{
                    borderRight: 1,
                    borderColor: "divider",
                    "& .MuiTab-root": {
                      textTransform: "none",
                      fontWeight: "bold",
                      fontSize: "18px",
                      color: "#333",
                    },
                    "& .Mui-selected": {
                      color: "#045940",
                    },
                  }}
                >
                  {modalities.map((item, index) => (
                    <Tab key={index} label={item.title} />
                  ))}
                </Tabs>
              </Grid>
              <Grid item xs={12} md={8}>
                <Box sx={{ padding: "20px" }}>
                  <Typography variant="h5" sx={{ fontWeight: "bold", color: "#333" }}>
                    {modalities[selectedTab].title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#555",
                      marginTop: "10px",
                      textAlign: "justify",
                      lineHeight: "1.5",
                    }}
                  >
                    {modalities[selectedTab].description}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* SERVICES SECTION (THIRD) */}
      <Box className="services-new-section" sx={{ padding: "40px 20px", textAlign: "center", backgroundColor: "#F9A51A" }}>
  <Typography variant="h6" sx={{ letterSpacing: "1px", color: "white", marginBottom: "10px" }}>
    SERVICES
  </Typography>
  <Box sx={{ width: "60px", height: "2px", backgroundColor: "white", opacity: 0.6, margin: "0 auto 20px" }}></Box>
  <Typography
    variant="h4"
    sx={{ fontWeight: "bold", marginBottom: "30px", lineHeight: "1.2", color: "white" }}
  >
    A wide variety of services for all types of AI training data
  </Typography>
  <Grid container spacing={4} justifyContent="center">
    {services.map((service, index) => (
      <Grid item xs={12} md={4} key={index}>
        <Card
          sx={{
            minHeight: "250px",
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            backgroundColor: "white",
            transition: "transform 0.3s ease",
            "&:hover": { transform: "scale(1.05)" },
          }}
        >
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "20px", marginTop: "10px", color: "#333" }}>
              {service.title}
            </Typography>
            <Typography variant="body2" sx={{ fontSize:"16px", color: "#555", lineHeight: "1.5", textAlign: "justify", paddingLeft:"10px", paddingRight:"10px" }}>
              {service.description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
</Box>
    </>
  );
}
