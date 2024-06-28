import Button from "../common/Button" // imported the common button
import Tooltip from "../common/Tooltip" // imported the tooltip
import MovingBorder from "../common/MovingBorder" // imported the MovingBorder
import GridBackground from "../common/GridBackground" // imported the GridBackground
import Glowing from "../common/Glowing" // imported the Glowing component

export default function Hero() {
  return (
  <section className="w-full h-[100%] flex relative">
    <Glowing />
    <GridBackground />
    <div className="absolute w-full h-[96%] flex md:flex-row flex-col items-center md:gap-[3.8rem] gap-[1rem] px-1 md:px-[5rem] z-[10] mt-16 md:mt-12">
        <div className="flex flex-col gap-16 max-w-[500px] mt-4">
          <div className="flex flex-col gap-y-4 pt-5">
            <h1 className="text-gray-50 text-4xl  text-center md:text-left md:text-[2.5rem] font-semibold">Crack the Code to Success with CodeHelp
            </h1>
            <p className="text-[#ABAFB5] text-base text-center md:text-left font-normal">Elevate your programming skills, solve challenges, and unlock the world of coding possibilities.
            </p>
            <div className="flex justify-center items-center md:justify-start gap-4">
                <Button content="View Courses" bgColor="#6674CC" hoverBgColor="#515DB1" className="w-[9rem]"/>
                <div style={{backgroundColor: "rgba(30, 30, 33, 0.7)"}} className="text-white flex justify-center items-center rounded-full font-medium text-md transition-all duration-150 w-auto border border-solid border-[#EF476F] px-5 gap-2 hover:bg-[#333333] cursor-pointer">
                    <Button content="Watch Video" className="w-auto"/>
                      <span className="text-xs text-slate-800">|</span>
                      <span className="text-[#EF476F] text-md">Live -&gt;</span>
                </div>
            </div>
          </div>

          {/* This is shown in larger screens, else */}
          <div className="border border-solid border-[#4A2C25] w-[80%] h-auto rounded-full justify-between md:flex hidden items-center px-4 py-3" style={{backgroundColor: "rgba(30, 30, 33, 0.5)"}}>
            <Tooltip />
            <span className="text-white font-medium">70,000+ Happy Students</span>
          </div>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-44 mx-auto max-w-[500px] mt-4 md:mx-0">
          <MovingBorder content="Core CS Subjects"/>
          <MovingBorder content="Mock Tests"/>
          <MovingBorder content="Quick Compiler"/>
          <MovingBorder content="Interview Experiences"/>
          <MovingBorder content="Dev challenges"/>
          <MovingBorder content="Fruitbox Flex"/>
          <MovingBorder content="Articles"/>
          <MovingBorder content="Tutorials"/>
        </div>

      {/* This is shown on smaller screens, else hidden */}
        <div className="border border-solid border-[#4A2C25] w-[80%] h-auto rounded-full justify-between md:hidden flex my-20 md:my-28 items-center px-4 py-3 gap-10 md:gap-0" style={{backgroundColor: "rgba(30, 30, 33, 0.5)"}}>
          <Tooltip />
          <span className="text-white font-medium">70,000+ Happy Students</span>
        </div>
    </div>
  </section>
  );
}
