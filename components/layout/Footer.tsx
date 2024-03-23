import React from "react";
import { assets } from "@/public/asstes";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-bgcolor">
      <div className="container mx-auto p-4 text-[#95969E]">
        <div className="grid md:grid-cols-2  lg:grid-cols-4  gap-8">
          <div className="md:col-span-2 space-y-6">
            <div>
              <Image
                // className="w-full h-full object-contain"
                src={assets.logo}
                alt="logo"
                quality={100}
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores minima, possimus nam recusandae beatae a repellendus
              expedita quia et officia dicta incidunt nesciunt sint voluptates
              veritatis qui esse? Libero, dolores!
            </p>
            <div className="flex gap-4">
              <div>
                <Image
                  // className="w-full h-full object-contain"
                  src={assets.facebook_icon}
                  alt="logo"
                  quality={100}
                />
              </div>
              <div>
                <Image
                  // className="w-full h-full object-contain"
                  src={assets.twitter_icon}
                  alt="logo"
                  quality={100}
                />
              </div>
              <div>
                <Image
                  // className="w-full h-full object-contain"
                  src={assets.linkedin_icon}
                  alt="logo"
                  quality={100}
                />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="font-titleFont font-bold text-lg text-white">
              COMPANY
            </h1>
            <div className="flex flex-col gap-y-2">
              <Link href="">Home</Link>
              <Link href="">About us</Link>
              <Link href="">Delivery</Link>
              <Link href="">Privacy policy</Link>
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="font-titleFont font-bold text-lg text-white">
              GET IN TOUCH
            </h1>
            <div className="flex flex-col gap-y-2">
              <Link href="">+1-212-4560-7890</Link>
              <Link href="">contact@greatstack.dev</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
