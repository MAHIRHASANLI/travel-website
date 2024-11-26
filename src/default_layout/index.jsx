import React from "react";
import Header from "../sections/header";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
    </>
  );
};

export default DefaultLayout;
