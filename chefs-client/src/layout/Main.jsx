import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import "../../src/App.css";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";
import Navbar from "../components/Navbar";
import { AuthContext } from "../contexts/AuthProvider";
import { useTheme } from "../hooks/ThemeContext";

const Main = () => {
  const { loading } = useContext(AuthContext);
  const { isDarkMode, toggleTheme } = useTheme(); // Destructure toggleTheme

  // Apply dark mode on initial render
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);
  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="relative">
          <Navbar />
          {/* <div className="fixed top-14 lg:top-0  right-0 p-5 themediv">
            <input
              type="checkbox"
              className="toggle"
              checked={isDarkMode}
              onChange={toggleTheme}
            />
          </div> */}
          <div className="min-h-screen">
            <Outlet />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Main;
