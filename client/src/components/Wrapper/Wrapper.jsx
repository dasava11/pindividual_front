import React from "react";
//import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Wrapper = () => {
  return (
    <>
      <Outlet />
     {/*  <Footer /> */}
    </>
  );
};

export default Wrapper
