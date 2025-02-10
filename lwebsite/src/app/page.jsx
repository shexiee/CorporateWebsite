"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="main-container">
      {/* Hero Section */}
      <section className="relative w-full h-[600px]">
        <Image
          src="/banner.jpg" // ✅ Ensure banner.jpg is inside /public/
          alt="Be Amazed"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Data-Driven Decisions</h1>
          <p className="text-lg md:text-2xl mt-2">Unlock innovation with AI</p>
        </div>
      </section>

      {/* Info Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            At Lifewood, we empower businesses to realize the transformative potential of AI: 
            bringing big data to life, launching new ways of thinking, innovating, and doing.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            This is the next level of AI's potential—uncovering new methods and insights to reveal 
            unexpected directions and possibilities, connecting across time, generations, and 
            technologies for everyone.
          </p>
        </div>
      </section>

    </div>
  );
}
