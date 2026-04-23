import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

import Login from "./pages/Login";
import Admin from "./pages/Admin";
import PrivateRoute from "./components/PrivateRoute";

import AdminLayout from "./components/AdminLayout";
import AdminProjects from "./pages/AdminProjects";

export default function App() {
  const location = useLocation();

  // hide navbar on admin routes
  const hideNavbar =
    location.pathname.startsWith("/admin") ||
    location.pathname === "/login";

  return (
    <div className="bg-black text-white min-h-screen">

      <Navbar />

      <Routes>

        {/* ✅ MAIN PORTFOLIO ROUTE (YOU WERE MISSING THIS) */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <Projects />
              <Skills />
              <Contact />
            </>
          }
        />

        {/* ✅ LOGIN */}
        <Route path="/login" element={<Login />} />

        {/* ✅ ADMIN DASHBOARD */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminLayout>
                <Admin />
              </AdminLayout>
            </PrivateRoute>
          }
        />

        {/* ✅ ADMIN PROJECTS */}
        <Route
          path="/admin/projects"
          element={
            <PrivateRoute>
              <AdminLayout>
                <AdminProjects />
              </AdminLayout>
            </PrivateRoute>
          }
        />

      </Routes>

    </div>
  );
}