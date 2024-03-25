import { food_list } from "@/public/asstes";
import React from "react";
import Dishe from "../elements/Dishe";

const Dishes = () => {
  return (
    <section className="space-y-6">
      <h1 className="font-titleFont font-bold text-4xl">Top Dishes near you</h1>
      <div className="grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pb-4 ">
        {food_list.slice(1, 10).map((item, index) => {
          return <Dishe key={index} item={item} />;
        })}
      </div>
    </section>
  );
};

export default Dishes;
