import React from "react";

const Delivery = () => {
  return (
    <div className="grow max-w-[500px]">
      <h1 className="font-titleFont font-bold text-3xl">
        Delivery Information
      </h1>
      <div className="space-y-3 mt-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="grow">
            <input
              type="text"
              placeholder="First name"
              autoComplete="First-name"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orangeColor sm:text-sm sm:leading-6"
            />
          </div>
          <div className="grow">
            <input
              type="text"
              placeholder="Last name"
              autoComplete="Last-name"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orangeColor sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <input
            type="email"
            placeholder="Email address"
            autoComplete="email"
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orangeColor sm:text-sm sm:leading-6"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Street"
            autoComplete="Street"
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orangeColor sm:text-sm sm:leading-6"
          />
        </div>
        <div className="flex gap-4">
          <div className="grow">
            <input
              type="text"
              placeholder="City"
              autoComplete="City"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orangeColor sm:text-sm sm:leading-6"
            />
          </div>
          <div className="grow">
            <input
              type="text"
              placeholder="State"
              autoComplete="Country"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orangeColor sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="grow">
            <input
              type="text"
              placeholder="Zip code"
              autoComplete="Zip code"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orangeColor sm:text-sm sm:leading-6"
            />
          </div>
          <div className="grow">
            <input
              type="text"
              placeholder="Country"
              autoComplete="Country"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orangeColor sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <input
            type="tel"
            placeholder="Phone"
            autoComplete="Phone"
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orangeColor sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Delivery;
