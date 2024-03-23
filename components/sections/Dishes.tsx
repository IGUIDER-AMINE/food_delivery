import { food_list } from "@/public/asstes";
import Image from "next/image";
import React from "react";

const Dishes = () => {
  return (
    <section className="space-y-6">
      <h1 className="font-titleFont font-bold text-4xl">Dishes</h1>
      <div className="grid grid-flow-row md:grid-cols-3 lg:grid-cols-4 gap-16 text-center pb-4 ">
        {food_list.map((item, index) => {
          return (
            <div key={index} className="flex flex-col gap-y-2 cursor-pointer">
              <Image
                className="object-contain min-w-[104px] h-[104px]"
                src={item?.image}
                alt="logo"
                quality={100}
              />
              <div>{item?.category}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Dishes;
