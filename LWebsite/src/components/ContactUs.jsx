import React, { useState } from "react";
import { Container, Typography, TextField, Checkbox, Button, FormControlLabel, Grid } from "@mui/material";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you for reaching out! We will get back to you soon.");
  };

  return (
    <Container style={{ marginTop: "40px" }}>
      <Typography variant="h5" style={{ fontWeight: "bold", color: "#2e7d32" }} gutterBottom>
        GET IN TOUCH
      </Typography>
      <Typography variant="h4" style={{ fontWeight: "bold" }} gutterBottom>
        Connect with us for AI solutions
      </Typography>
      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={4}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                  color="success"
                />
              }
              label="I allow this website to store my submission so they can respond to my inquiry."
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="success"
              fullWidth
              style={{ backgroundColor: "#045940", fontWeight: "bold" }}
            >
              SUBMIT
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
