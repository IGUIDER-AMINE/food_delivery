"use client";

import { CommandeContext } from "@/context/CommandeProvider";
import { assets } from "@/public/asstes";
import Image, { StaticImageData } from "next/image";
import React, { useContext, useState } from "react";

interface typeDishe {
  _id: string;
  name: string;
  image: StaticImageData;
  price: number;
  description: string;
  category: string;
}

interface propsType {
  item: typeDishe;
}

const Dishe = ({ item }: propsType) => {
  const [addDish, setaddDish] = useState(0);
  const contextValue = useContext(CommandeContext);

  const { name, image, price, description } = item;
  console.log(name);

  const handleAddDish = () => {
    setaddDish(addDish + 1);
    contextValue.setBasketList([...contextValue.basketList, {}]);
  };
  return (
    <div className="gap-y-2 cursor-pointer shadow-md rounded-2xl">
      <div className="relative">
        <Image
          className="object-cover rounded-t-2xl w-full min-w-[104px] h-[204px]"
          src={image}
          alt={name}
          quality={100}
        />
        {/* {contextValue.actAppendCondidat} */}
        {addDish !== 0 ? (
          <div className="flex gap-4 items-center absolute bottom-3 bg-white py-1 px-2 rounded-full right-3">
            <Image
              className="object-cover rounded-t-2xl max-w-10"
              src={assets.remove_icon_red}
              alt={name}
              quality={100}
              onClick={() => setaddDish((prev) => prev - 1)}
            />
            <span className="font-medium font-titleFont">{addDish}</span>
            <Image
              className="object-cover rounded-t-2xl max-w-10"
              src={assets.add_icon_green}
              alt={name}
              quality={100}
              onClick={() => setaddDish((prev) => prev + 1)}
            />
          </div>
        ) : (
          <button
            onClick={() => setaddDish(1)}
            className="absolute bottom-3 right-3"
          >
            <Image
              className="object-cover rounded-t-2xl w-10"
              src={assets.add_icon_white}
              alt={name}
              quality={100}
            />
          </button>
        )}
      </div>
      <div className="p-4 space-y-2">
        <div className="flex gap-x-2 justify-between">
          <h3 className="font-titleFont font-bold">{name}</h3>
          <Image
            className="object-contain"
            src={assets.rating_starts}
            alt="rating_starts"
            quality={100}
          />
        </div>
        <p className="text-sm">{description}</p>
        <div className="font-bold text-orangeColor">${price}</div>
      </div>
    </div>
  );
};

export default Dishe;
