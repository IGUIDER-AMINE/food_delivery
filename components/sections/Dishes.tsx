import { assets, food_list } from "@/public/asstes";
import Image from "next/image";
import React from "react";

const Dishes = () => {
  return (
    <section className="space-y-6">
      <h1 className="font-titleFont font-bold text-4xl">Dishes</h1>
      <div className="grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pb-4 ">
        {food_list.slice(1, 10).map((item, index) => {
          return (
            <div
              key={index}
              className="gap-y-2 cursor-pointer shadow-md rounded-2xl"
            >
              <div className="relative bg-red-500">
                <Image
                  className="object-cover rounded-t-2xl w-full min-w-[104px] h-[204px]"
                  src={item?.image}
                  alt={item?.name}
                  quality={100}
                />
                <button className="absolute bottom-3 right-3">
                  <Image
                    className="object-cover rounded-t-2xl w-10"
                    src={assets.add_icon_white}
                    alt={item?.name}
                    quality={100}
                  />
                </button>
              </div>
              <div className="p-4 space-y-2">
                <div className="flex gap-x-2 justify-between">
                  <h3 className="font-titleFont font-bold">{item?.name}</h3>
                  <Image
                    className="object-contain"
                    src={assets.rating_starts}
                    alt="rating_starts"
                    quality={100}
                  />
                </div>
                <p className="text-sm">{item?.description}</p>
                <div className="font-bold text-orangeColor">${item?.price}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Dishes;
