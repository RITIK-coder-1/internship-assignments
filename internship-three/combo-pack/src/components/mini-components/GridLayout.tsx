"use client";
import React from "react";
import { LayoutGrid } from "../ui/layout-grid";

export default function GridLayout() {
  return (
    <div className="h-screen px-32 pl-44">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => (
  <div>
    <p className="font-bold text-2xl md:text-4xl text-black">Project Name</p>
    <p className="font-normal text-base text-white"></p>
    <p className="font-normal text-sm md:text-base my-4 max-w-lg text-black">
      Project Description
    </p>
  </div>
);



const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/p1.png",
  },
  {
    id: 2,
    content: <SkeletonOne />,
    className: "md:col-span-1",
    thumbnail:
      "/p13.png",
  },
  {
    id: 3,
    content: <SkeletonOne />,
    className: "md:col-span-1",
    thumbnail:
      "/p14.png",
  },
  {
    id: 4,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/p15.png",
  },
  {
    id: 5,
    content: <SkeletonOne />,
    className: "md:col-span-1",
    thumbnail:
      "/p20.png",
  },
  {
    id: 6,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/p21.png",
  },
  {
    id: 7,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/p3.png",
  },
  {
    id: 8,
    content: <SkeletonOne />,
    className: "md:col-span-1",
    thumbnail:
      "/p4.png",
  },
  {
    id: 9,
    content: <SkeletonOne />,
    className: "md:col-span-1",
    thumbnail:
      "/p7.png",
  },
  {
    id: 9,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/p9.jpeg",
  },
  {
    id: 10,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/p8.jpeg",
  },
  {
    id: 11,
    content: <SkeletonOne />,
    className: "md:col-span-1",
    thumbnail:
      "/p5.jpeg",
  },
  {
    id: 12,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/p19.jpeg",
  },
  {
    id: 13,
    content: <SkeletonOne />,
    className: "md:col-span-1",
    thumbnail:
      "/p18.jpeg",
  },
  {
    id: 14,
    content: <SkeletonOne />,
    className: "md:col-span-1",
    thumbnail:
      "/p16.jpeg",
  },
  {
    id: 15,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/p17.jpeg",
  },
  {
    id: 16,
    content: <SkeletonOne />,
    className: "md:col-span-1",
    thumbnail:
      "/p12.jpeg",
  },
  {
    id:17,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/p11.jpeg",
  },
  {
    id: 18,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/p10.jpeg",
  },
];
