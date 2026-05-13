"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    // Replace with real authentication logic
    if (credentials.username === "admin" && credentials.password === "password") {
      localStorage.setItem("isAdmin", "true"); // ✅ Store session in localStorage
      alert("Login successful!");
      router.push("/admin-dashboard"); // ✅ Redirect to Admin Dashboard
    } else {
      setError("Invalid username or password!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      <div className="w-full max-w-md bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-primary mb-4">Admin Login</h2>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          className="w-full px-4 py-3 mt-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
        />

        <button
          onClick={handleLogin}
          className="w-full mt-5 bg-primary text-white font-bold py-3 rounded-lg hover:bg-green-800 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}
