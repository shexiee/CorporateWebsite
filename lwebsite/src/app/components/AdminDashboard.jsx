"use client";

export default function AdminDashboard() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-center">
      <h2 className="text-3xl font-bold text-primary mb-6">Admin Dashboard</h2>
      <p className="text-lg text-gray-700">Welcome, Admin! Use this dashboard to manage the system.</p>

      {/* Example Dashboard Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold">Users</h3>
          <p className="text-gray-600 mt-2">Manage user accounts and permissions.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold">Analytics</h3>
          <p className="text-gray-600 mt-2">View system statistics and data insights.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold">Settings</h3>
          <p className="text-gray-600 mt-2">Adjust system preferences and configurations.</p>
        </div>
      </div>
    </div>
  );
}
