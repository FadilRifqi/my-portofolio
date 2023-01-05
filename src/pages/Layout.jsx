import React from "react";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavigationBar />
      <div className="App">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
