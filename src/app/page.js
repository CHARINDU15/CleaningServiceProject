import Image from "next/image";
import Hero from "./components/Hero";
import Aboutus from "./components/Aboutus";

export default function Home() {
  return (
    <>
    <Hero  className="pt-32 pb-0 lg:pb-10"/>
    <Aboutus className="py-16  lg:py-32 overflow-hidden"/>
    </>
   
  );
}
