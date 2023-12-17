<<<<<<< HEAD
"use client";

import useStore from "@/components/homepage/state/Store";
import Circles from "@/components/test/Circles";
=======
import Circles from "@/components/homepage/utils/Circles";
>>>>>>> a174037fe213b2d3d8a1b9f7d58c8ff07887e772

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
