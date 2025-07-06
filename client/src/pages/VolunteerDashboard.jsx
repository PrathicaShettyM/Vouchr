import React from 'react';
import { Link } from 'react-router-dom';

const VolunteerDashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-blue-700">Hi {user?.name}</h1>
      <p className="text-gray-600 mb-6">Welcome to your Volunteer Dashboard!</p>
      <div className="space-y-3">
        <Link to="/profile" className="block p-4 border rounded bg-blue-50 hover:bg-blue-100">View Profile</Link>
        <Link to="/events" className="block p-4 border rounded bg-blue-50 hover:bg-blue-100">Browse Events</Link>
        <Link to="/chat" className="block p-4 border rounded bg-blue-50 hover:bg-blue-100">Join Event Chat</Link>
      </div>
    </div>
  );
};

export default VolunteerDashboard;