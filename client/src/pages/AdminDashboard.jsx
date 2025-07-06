import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-red-700">Hello Admin {user?.name}</h1>
      <p className="text-gray-600 mb-6">Manage all volunteers and events from here.</p>
      <div className="space-y-3">
        <Link to="/admin/volunteers" className="block p-4 border rounded bg-red-50 hover:bg-red-100">View Volunteers</Link>
        <Link to="/admin/events" className="block p-4 border rounded bg-red-50 hover:bg-red-100">Manage Events</Link>
        <Link to="/admin/stats" className="block p-4 border rounded bg-red-50 hover:bg-red-100">Event Stats</Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
