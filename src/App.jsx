import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import LogoSection from "./Components/LogoSection";
import Sector from "./Components/Sector";
import ImageGrid from "./Components/ImageGrid";
import Phone from "./Components/Phone";
import PageTwo from "./Components/PageTwo";
import Demo from "./Pages/Demo";

const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/demo";

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <PageTwo/>
                <LogoSection />
                <ImageGrid />
                <Phone />
                <Sector />
                <Features />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path = "/demo" element = {<Demo/>}/>
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
