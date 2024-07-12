import Image from "next/image";
import BackgroundBeam from "../mini-components/BackgroundBeam";
import GridLayout from "../mini-components/GridLayout";

export default function Project() {
  return (
  <section className="h-[320rem] md:h-[180rem] w-full">
    <div className="absolute z-10 w-full h-[320rem] md:h-[180rem] bg-purple-400 opacity-5"></div>
    <div className="absolute z-10 container mx-auto  py-10 lg:py-20 w-full"> 
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 text-white">Projects Covered in this Combo Pack</h2>
      <GridLayout />
    </div> 
    <BackgroundBeam />

  </section>  
  );
}