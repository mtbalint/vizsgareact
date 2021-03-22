import React from "react";
import loader from "./loading.gif";

const LoadingMask = () => (
  <div className="loader">
    <img src={loader} alt="loader" />
  </div>
);

export default LoadingMask;
