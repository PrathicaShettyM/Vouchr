import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminProfile from './pages/Profile';
import VolunteerProfile from './pages/Profile';
import PrivateRoute from './routes/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route
            path="/admin/profile"
            element={
              <PrivateRoute allowedRole="ADMIN">
                <AdminProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/volunteer/profile"
            element={
              <PrivateRoute allowedRole="VOLUNTEER">
                <VolunteerProfile />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
