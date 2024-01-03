import { PicturesDropbar } from "@/components/homepage/elements/addons/Misc";
import React from "react";

function page() {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
  };
  return (
    <div style={style}>
      <PicturesDropbar />
    </div>
  );
}

export default page;
