import React from "react";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavigationBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
