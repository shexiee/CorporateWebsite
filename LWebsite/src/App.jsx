import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Careers from "./components/Careers";
import GlobalScale from "./components/GlobalScale";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/services" element={<Services />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/globalscale" element={<GlobalScale />} />
      <Route path="/contact-us" element={<ContactUs />} />
  <Route
    path="/admin-login"
    element={<AdminLogin setIsLoggedIn={setIsLoggedIn} />}
  />
  <Route
    path="/admin-dashboard"
    element={
      <ProtectedRoute isLoggedIn={isLoggedIn}>
        <AdminDashboard />
      </ProtectedRoute>
    }
  />
</Routes>
<Footer />
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
