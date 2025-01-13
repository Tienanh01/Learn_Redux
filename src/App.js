import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import AdminLayout from './layout/AdminLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound.js';

const App = () => {
  return (
    <Routes>
      {/* Main Layout */}
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/about"
        element={
          <MainLayout>
            <About />
          </MainLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <MainLayout>
            <Contact />
          </MainLayout>
        }
      />

      {/* Admin Layout */}
      <Route
        path="/admin/*"
        element={
          <AdminLayout>
            <div>Admin Dashboard</div>
          </AdminLayout>
        }
      />

      {/* Not Found */}
      <Route
        path="*"
        element={
          <MainLayout>
            <NotFound />
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default App;
