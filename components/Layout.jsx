import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg_black text-white  ">{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
