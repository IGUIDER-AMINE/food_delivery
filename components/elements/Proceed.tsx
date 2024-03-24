import Link from "next/link";
import React from "react";

interface typeProps {
  link_to: string;
  title: string;
}

const Proceed = ({ link_to, title }: typeProps) => {
  return (
    <div className="md:min-w-[500px] space-y-4">
      <h1 className="font-titleFont font-bold text-3xl">Cart Totals</h1>
      <div className="border-b py-2 flex gap-x-4 justify-between">
        <span>Subtotal</span>
        <span>$60</span>
      </div>
      <div className="border-b py-2 flex gap-x-4 justify-between">
        <span>Delivery Fee</span>
        <span>$5</span>
      </div>
      <div className="font-semibold  py-2 flex gap-x-4 justify-between">
        <span>Total</span>
        <span>$65</span>
      </div>
      <Link href={link_to}>
        <button className="bg-orangeColor mt-2 font-titleFont rounded-md text-white py-2 px-6">
          {title}
        </button>
      </Link>
    </div>
  );
};

export default Proceed;