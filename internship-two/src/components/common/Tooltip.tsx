import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip"; // imported from tooltip animation
import people from "../../data/users"; // Imported the data of the users


const Tooltip = () => {
  return (
    <div className="flex flex-row items-center justify-center w-auto h-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}

export default Tooltip;
