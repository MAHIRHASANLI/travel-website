import React from "react";
import Header from "../sections/header";
import Footer from "../sections/footer";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
