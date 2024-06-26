import React from "react";
import { AnimatedTooltip, TooltipItem } from "../ui/animated-tooltip"; // Assuming TooltipItem is the type/interface for items
import people from "../../data/users"; // Assuming people is an array of TooltipItem

// Define the type/interface for TooltipProps if necessary
interface TooltipProps {}

const Tooltip: React.FC<TooltipProps> = () => {
  return (
    <div className="flex flex-row items-center justify-center w-auto h-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}

export default Tooltip;
