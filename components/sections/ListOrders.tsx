import { assets, food_list } from "@/public/asstes";
import Image from "next/image";
import React from "react";

const ListOrders = () => {
  return (
    <section>
      <table className="table-fixed w-full font-medium">
        <thead>
          <tr className="border-b text-gray-500">
            <th className="custom-th">Items</th>
            <th className="custom-th md:table-cell hidden">Title</th>
            <th className="custom-th table-cell md:hidden">Infos</th>
            <th className="custom-th hidden md:table-cell">Price</th>
            <th className="custom-th hidden md:table-cell">Quantity</th>
            <th className="custom-th hidden md:table-cell">Total</th>
            <th className="py-4 font-medium text-center md:text-start">
              Remove
            </th>
          </tr>
        </thead>
        <tbody>
          {food_list.slice(1, 3).map((item, index) => {
            return (
              <tr key={index} className="border-b">
                <td className="py-4">
                  <Image
                    src={item?.image}
                    alt="logo"
                    quality={100}
                    className="h-20 w-20"
                  />
                </td>
                <td className="py-4">
                  {item?.name}
                  <div className="mt-2 space-y-2 md:hidden">
                    <div className="flex justify-between">
                      <span>Price : </span>
                      <span>${item?.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Qte : </span>
                      <span>{item?.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total : </span>
                      <span>{item?.price}</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 hidden md:table-cell">${item?.price}</td>
                <td className="py-4 hidden md:table-cell">{item?.price}</td>
                <td className="py-4 hidden md:table-cell">${item?.price}</td>
                <td className="py-4 text-center md:text-start">
                  <button>
                    <Image
                      className="h-4 w-4"
                      src={assets.cross_icon}
                      alt="logo"
                      quality={100}
                    />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default ListOrders;
