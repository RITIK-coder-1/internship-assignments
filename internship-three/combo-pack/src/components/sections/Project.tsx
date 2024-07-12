import Image from "next/image";
import BackgroundBeam from "../mini-components/BackgroundBeam";

const projects = [
  {
    title: 'Project Name',
    description: 'Description for the project',
    imageUrl: '/p1.png',
  },
  {
    title: 'Project Name',
    description: 'Description for the project',
    imageUrl: '/p1.png',
  },
  {
    title: 'Project Name',
    description: 'Description for the project',
    imageUrl: '/p1.png',
  },
  {
    title: 'Project Name',
    description: 'Description for the project',
    imageUrl: '/p1.png',
  },
  {
    title: 'Project Name',
    description: 'Description for the project',
    imageUrl: '/p1.png',
  },
  {
    title: 'Project Name',
    description: 'Description for the project',
    imageUrl: '/p1.png',
  },
  {
    title: 'Project Name',
    description: 'Description for the project',
    imageUrl: '/p1.png',
  },
  {
    title: 'Project Name',
    description: 'Description for the project',
    imageUrl: '/p1.png',
  },
  {
    title: 'Project Name',
    description: 'Description for the project',
    imageUrl: '/p1.png',
  },
  {
    title: 'Project Name',
    description: 'Description for the project',
    imageUrl: '/p1.png',
  },
  {
    title: 'Project Name',
    description: 'Description for the project',
    imageUrl: '/p1.png',
  },
  {
    title: 'Project Name',
    description: 'Description for the project',
    imageUrl: '/p1.png',
  },
  {
    title: 'Project Name',
    description: 'Description for the project',
    imageUrl: '/p1.png',
  },
  {
    title: 'Project Name',
    description: 'Description for the project',
    imageUrl: '/p1.png',
  },
  {
    title: 'Project Name',
    description: 'Description for the project',
    imageUrl: '/p1.png',
  },
  {
    title: 'Project Name',
    description: 'Description for the project',
    imageUrl: '/p1.png',
  },
  {
    title: 'Project Name',
    description: 'Description for the project',
    imageUrl: '/p1.png',
  },
];

export default function Project() {
  return (
  <section className="h-[220rem] lg:h-[220rem] md:h-[500rem] w-full">
    <div className="absolute z-10 w-full h-[220rem] lg:h-[220rem] md:h-[500rem] bg-purple-400 opacity-5"></div>
    <div className="absolute z-10 container mx-auto px-0 md:px-5 py-10 lg:py-20 w-full">
    
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">Projects Covered in this Combo Pack</h2>
      <div className="grid grid-cols-1 h-[200rem] grid-rows-20 lg:grid-cols-10 gap-6 px-28">
        
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`relative group ${
              index % 3 === 0 ? 'sm:col-span-6 sm:row-span-11' : 'sm:col-span-4 sm:row-span-9 lg:mt-5'
            } border-2 border-purple-400 rounded-lg overflow-hidden shadow-lg absolute`}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              layout="fill"
              className="object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white p-4">
              <div className="text-center">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-2">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <BackgroundBeam />
  </section>  
  );
}