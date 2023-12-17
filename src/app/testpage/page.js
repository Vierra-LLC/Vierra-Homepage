"use client";

import useStore from "@/components/homepage/state/Store";
import Circles from "@/components/test/Circles";

function page() {
  const widthNumber = useStore((state) => state.widthNumber);
  return (
    <div>
      {widthNumber}
      <Circles />
    </div>
  );
}

export default page;
