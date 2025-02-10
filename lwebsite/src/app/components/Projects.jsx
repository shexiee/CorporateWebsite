"use client";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Reforestation Initiative",
    description: "A project to restore degraded forests.",
    image: "/reforestation.jpg", // ✅ Move image to /public
  },
  {
    id: 2,
    title: "Community Garden",
    description: "Promoting urban agriculture in local communities.",
    image: "/community_garden.jpg", // ✅ Move image to /public
  },
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Our Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white shadow-lg rounded-lg p-4">
            <Image 
              src={project.image} 
              alt={project.title} 
              width={500} 
              height={300} 
              className="rounded-lg object-cover w-full h-48"
            />
            <h3 className="text-xl font-bold mt-4">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <button className="mt-4 px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800">
              View More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
