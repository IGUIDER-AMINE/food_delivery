import Proceed from "@/components/elements/Proceed";
import Delivery from "@/components/sections/Delivery";
import React from "react";

const page = () => {
  return (
    <main className="space-y-24 p-4 md:px-16 flex justify-between gap-4">
      <Delivery />
      <Proceed link_to="/payment" title="Procced To Payment" />
    </main>
  );
};

export default page;
