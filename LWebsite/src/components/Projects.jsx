import React from "react";
import { Card, CardContent, CardActions, Typography, Button, Container } from "@mui/material";

const projects = [
  {
    id: 1,
    title: "Reforestation Initiative",
    description: "A project to restore degraded forests.",
    image: "reforestation.jpg",
  },
  {
    id: 2,
    title: "Community Garden",
    description: "Promoting urban agriculture in local communities.",
    image: "community_garden.jpg",
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <Container className="project-container" style={{ padding: "20px" }}>
      <Typography variant="h3" gutterBottom>
        Our Projects
      </Typography>
      <div className="project-grid" style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
        {projects.map((project) => (
          <Card key={project.id} className="project-card" style={{ padding: "16px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                {project.title}
              </Typography>
              <Typography>{project.description}</Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary">
                View More
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </Container>
  );
}
