import React from "react";
import { Box, Typography, Grid, IconButton, Button } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import "./css/footer.css";

export default function Footer() {
  return (
    <Box className="footer" sx={{ backgroundColor: "#004d40", color: "#fff", padding: "40px 15px" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "15px" }}>
            You can help shape the future
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={3}>
              <Typography variant="body1">
                <Link to="/" className="footer-link">Home</Link>
              </Typography>
              <Typography variant="body1">
                <Link to="/about" className="footer-link">About</Link>
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">
                <Link to="/projects" className="footer-link">Projects</Link>
              </Typography>
              <Typography variant="body1">
                <Link to="/services" className="footer-link">Services</Link>
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">
                <Link to="/careers" className="footer-link">Careers</Link>
              </Typography>
              <Typography variant="body1">
                <Link to="/globalscale" className="footer-link">Global Scale</Link>
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Link to="/contact-us">
                <Button className="contact-link"
                  variant="contained"
                  sx={{
                    backgroundColor: "white",
                    color: "#045940",
                    fontWeight: "bold",
                    textTransform: "none",
                    borderRadius: "50px",
                    padding: "10px 20px",
                  }}
                >
                  Contact Us
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: "30px", paddingTop: "20px", borderTop: "1px solid rgba(255, 255, 255, 0.3)" }}>
        <Box sx={{ textAlign: "left", marginBottom: "10px" }}>
          <img
            src="src/assets/lifelogo.svg"
            alt="Lifewood Logo"
            style={{ height: "30px", marginBottom: "10px" }}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="body2" sx={{ fontSize: "15px" }}>
            &copy; 2025 Lifewood. Be Amazed.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <a href="https://www.youtube.com/@LifewoodDataTechnology" target="_blank" rel="noopener noreferrer">
              <IconButton sx={{ color: "white" }}>
                <YouTubeIcon />
              </IconButton>
            </a>
            <a href="https://web.facebook.com/LifewoodPH/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
              <IconButton sx={{ color: "white" }}>
                <FacebookIcon />
              </IconButton>
            </a>
            <a href="https://www.linkedin.com/company/lifewood-data-technology-ltd./?originalSubdomain=ph" target="_blank" rel="noopener noreferrer">
              <IconButton sx={{ color: "white" }}>
                <LinkedInIcon />
              </IconButton>
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
