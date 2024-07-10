"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";

export default function Nav() {
  return (
      <Navbar />
  );
}

function Navbar({ className, darkMode }: { className?: string, darkMode: boolean }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("h-full", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
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
              title="Algochurn"
              href="https://algochurn.com"
              src="/"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="/"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="/"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="/"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Playground">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Coming soon</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="All Courses">
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
