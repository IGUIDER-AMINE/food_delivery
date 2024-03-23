import Banner from "@/components/sections/Banner";
import Dishes from "@/components/sections/Dishes";
import Menu from "@/components/sections/Menu";
import Store from "@/components/sections/Store";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto p-4 md:px-16 space-y-24">
      <Banner />
      <Menu />
      <Dishes />
      <Store />
    </main>
  );
}
