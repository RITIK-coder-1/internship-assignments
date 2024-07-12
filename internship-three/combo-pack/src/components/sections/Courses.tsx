import Image from "next/image";
import Pin from "../mini-components/Pin";

const courses1 = [
  {
    heading: 'Python for Data Engineering',
    src: '/c1.png',
  },
  {
    heading: 'SQL for Data Engineering',
    src: '/c2.png',
  },
];

const courses2 = [
  {
    heading: 'Datawarehouse for Data Engineering',
    src: '/c3.png',
  },
  {
    heading: 'Workflow Orchestration',
    src: '/c5.png',
  },
];

export default function Courses() {
  return (
    <section className="relative py-10 text-white overflow-hidden px-5" id="courses">
      <div className="absolute inset-0 bg-[url('/universe.jpg')] blur-[1px] opacity-25"></div>
      <div className="relative z-10">
        <h2 className="text-2xl md:text-5xl font-bold text-center mb-10">The Courses You Will Get</h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
          {courses1.map((ele, index) => (
            <Pin key={index} heading={ele.heading} src={ele.src} />
          ))}
        </div>
        <div className="flex justify-center my-6">
          <Pin heading="Apache Spark" src="/c4.png" />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 flex-wrap">
          {courses2.map((ele, index) => (
            <Pin key={index} heading={ele.heading} src={ele.src} />
          ))}
        </div>
      </div>
    </section>
  );
}
