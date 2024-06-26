import Button from "../common/Button" // imported the common button
import Tooltip from "../common/Tooltip" // imported the tooltip
import MovingBorder from "../common/MovingBorder" // imported the tooltip

export default function Hero() {
  return (
    <section className="w-full h-[115%] z-[1000] flex justify-start items-center px-[5.5rem] gap-14">
      <div className="flex flex-col gap-16 mx-auto max-w-[500px] mt-4 md:mx-0">
          <div className="flex flex-col gap-y-4">
                <h1 className="text-gray-50 text-3xl text-center md:text-left md:text-[2.5rem] font-semibold">Crack the Code to Success with CodeHelp</h1>
                <p className="text-[#ABAFB5] text-base text-center md:text-left font-normal">Elevate your programming skills, solve challenges, and unlock the world of coding possibilities.</p>
                <div className="flex justify-center items-center md:justify-start gap-4 flex-wrap">
                     <Button content="View Courses" bgColor="#6674CC" hoverBgColor="#515DB1" className="w-[9rem]"/>
                      <div className="text-white flex justify-center items-center rounded-full font-medium text-md transition-all duration-150 w-auto bg-transparent border border-solid border-[#EF476F] px-4 gap-2 hover:bg-[#333333] cursor-pointer">
                           <Button content="Watch Video" className="w-auto"/>
                           <span className="text-xs text-slate-800">|</span>
                           <span className="text-[#EF476F] text-md">Live &gt;</span>
                 </div>
          </div>
          </div>
          <div className="border border-solid border-[#4A2C25] w-[80%] h-auto rounded-full flex justify-between items-center px-4 py-3 ">
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
    </section>
  );
}
