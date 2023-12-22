"use client";
import React from "react";
import Circles from "components/homepage/utils/Circles";

function page() {
  const style = {
    border: "10px solid black",
    height: "300px",
    display: "flex",
    alignItems: "center",
  };
  return (
    <div style={style}>
      <Circles />
    </div>
  );
}

export default page;
