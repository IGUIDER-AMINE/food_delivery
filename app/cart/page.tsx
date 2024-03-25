// "use client";
import CartTotals from "@/components/sections/CartTotals";
import ListOrders from "@/components/sections/ListOrders";
// import { CommandeContext } from "@/context/CommandeProvider";
// import React, { useContext } from "react";

const page = () => {
  // const contextValue = useContext(CommandeContext);
  // console.log(contextValue.basketList);
  return (
    <main className="space-y-24 p-4 md:px-16">
      <ListOrders />
      <CartTotals />
    </main>
  );
};

export default page;
