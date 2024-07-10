"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu"; 
import { cn } from "@/utils/cn"; 

export default function Nav({ darkMode, className }: { darkMode: boolean, className: string }) {
  return (
    <Navbar darkMode={darkMode} className={className}/>
  );
}

function Navbar({ className, darkMode }: { className?: string, darkMode: boolean }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("h-full", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home" darkMode={darkMode}>
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Modern Data Engineering</HoveredLink>
            <HoveredLink href="/">Courses</HoveredLink>
            <HoveredLink href="/">Reviews</HoveredLink>
            <HoveredLink href="/">Bonuses</HoveredLink>
            <HoveredLink href="/">FAQs</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Combo Pack" darkMode={darkMode}>
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Interviews"
              href="/"
              src="https://www.shrm.org/adobe/dynamicmedia/deliver/dm-aid--8102e67a-af35-45d2-a902-02a14066175c/istock-1329328971-cstu6m.jpg?quality=82&preferwebp=true"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Projects"
              href="/"
              src="https://studentprojectguide.com/wp-content/uploads/2019/12/student-projetc.jpg"
              description="Production ready Data Engineering projects"
            />
            <ProductItem
              title="High Quality Notes"
              href="/"
              src="https://imageio.forbes.com/specials-images/imageserve/60808d87824ab7edc3770486/Note-Pad-and-Pen-on-Yellow-background/960x0.jpg?height=474&width=711&fit=bounds"
              description="Make notes from standard sources"
            />
            <ProductItem
              title="Recorded Content"
              href="/"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR343q1WFPapbLgPUMfmJrgux0G96N1J6r90A&s"
              description="In-depth videos for each topic"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Playground" darkMode={darkMode}>
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Coming soon</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="All Courses" darkMode={darkMode}>
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Python for Data Engineering</HoveredLink>
            <HoveredLink href="/">SQL for Data Engineering</HoveredLink>
            <HoveredLink href="/">Data Warehouse with Snowflake</HoveredLink>
            <HoveredLink href="/">Spark for Data Engineering</HoveredLink>
            <HoveredLink href="/">Workflow Orchestration</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
