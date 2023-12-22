"use client";

import Circles from "@/components/homepage/utils/Circles";

function page() {
  const style = {
    border: "10px solid black",
    height: "300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "clamp(1px,100%,1600px)",
    margin: "0 auto",
  };

  const left = {
    border: "10px solid purple",
    height: "100%",
    display: "flex",
    alignItems: "center",
    width: "30px",
  };
  const main = {
    display: "flex",
    flexDirection: "column",
    gap: "300px",
  };
  const width = 1500;
  return (
    <div style={main}>
      <div style={style}>
        <div style={left}>
          <Circles right={"0px"} color={true} top={"-100px"} width={width} />
        </div>
        <div style={left}>
          <Circles left={"0px"} color={true} top={"-100px"} width={width} />
        </div>
      </div>
      <div style={style}>
        <div style={left}>
          <Circles right={"0px"} color={true} top={"400px"} width={width} />
        </div>
        <div style={left}>
          <Circles left={"0px"} color={true} top={"400px"} width={width} />
        </div>
      </div>
    </div>
  );
}

export default page;
