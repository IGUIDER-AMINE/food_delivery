import React from "react";

const Banner = () => {
  return (
    <section className="bg-header-img xl:place-content-center xl:h-[650px] bg-cover rounded-2xl bg-no-repeat text-white space-y-6 xl:space-y-10 xl:pt-20 p-4 md:pl-16">
      <h1 className="font-bold font-titleFont text-4xl xl:text-5xl leading-snug">
        Order your <br />
        favourite food here
      </h1>
      <p className="leading-6">
        Chouse from diverse menu featuring a delectable array of dishes crafted
        with the finest <br className="hidden lg:block" />
        ingredients and culinary experties. Our mission to satisfy your cragins
        and elevate your
        <br className="hidden lg:block" />
        dining experience, one delicious meal a time.
      </p>
      <button className="rounded-full text-gray-500 font-medium bg-white px-8 py-4">
        View Menu
      </button>
    </section>
  );
};

export default Banner;
