import { assets, food_list } from "@/public/asstes";
import Image from "next/image";
import React from "react";

const ListOrders = () => {
  return (
    <section>
      <table className="table-fixed w-full font-medium">
        <thead>
          <tr className="border-b text-gray-500">
            <th className="text-start py-4 font-medium">Items</th>
            <th className="text-start py-4 font-medium">Title</th>
            <th className="text-start py-4 font-medium">Price</th>
            <th className="text-start py-4 font-medium">Quantity</th>
            <th className="text-start py-4 font-medium">Total</th>
            <th className="text-start py-4 font-medium">Remove</th>
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
                <td className="py-4">{item?.name}</td>
                <td className="py-4">${item?.price}</td>
                <td className="py-4">{item?.price}</td>
                <td className="py-4">${item?.price}</td>
                <td className="py-4">
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
