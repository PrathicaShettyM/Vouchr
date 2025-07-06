import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <button onClick={handleLogout} className="ml-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
      Logout
    </button>
  );
};

export default Logout;