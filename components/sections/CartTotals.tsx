import React from "react";

const CartTotals = () => {
  return (
    <section className="flex flex-col xl:flex-row gap-y-10 justify-between">
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
        <button className="bg-orangeColor font-titleFont rounded-md text-white py-2 px-6">
          PROCEED TO CHECKOUT
        </button>
      </div>
      <div className="text-gray-500 space-y-2 md:min-w-[400px]">
        <div>If you have a promo code, Enter it here</div>
        <div className="w-full flex flex-col md:flex-row gap-y-4">
          <input
            className="bg-[#E2E1E2] rounded-md md:rounded-none md:rounded-l-md px-6 py-2 grow"
            type="text"
            placeholder="promo Code"
          />
          <button className="text-white bg-black px-6 py-2  rounded-md md:rounded-none md:rounded-r-md">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartTotals;
