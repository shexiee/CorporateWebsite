"use client";
import { useState } from "react";

export default function Services() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  const modalities = [
    { title: "01. Text", description: "Text collection, labeling, transcription, sentiment analysis." },
    { title: "02. Audio", description: "Collection, labeling, voice categorization, music intelligence." },
    { title: "03. Image", description: "Collection, labeling, classification, object detection and tagging." },
    { title: "04. Video", description: "Collection, labeling, audit, live broadcast, subtitle generation." },
  ];

  const services = [
    { title: "DATA ACQUISITION", description: "Comprehensive data solutions for AI training and evolution." },
    { title: "DATA COLLECTION", description: "Text, speech, video categorization, classification, and labeling." },
    { title: "DATA ANNOTATION", description: "High-quality annotation for text, image, audio, and video." },
    { title: "DATA CURATION", description: "Organizing data for reliability, accessibility, and classification." },
    { title: "DATA VALIDATION", description: "Ensuring accuracy, consistency, and preventing data errors." },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[500px]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/services.mp4" // ✅ Move services.mp4 to public/
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold">AI Data Services</h1>
          <p className="text-lg mt-2">Optimizing organizational goals through AI data solutions.</p>
        </div>
      </div>

      {/* Modalities Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">MODALITIES</h2>
        <div className="border-b-2 border-gray-300 w-16 mb-6"></div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Tabs (Left) */}
          <div className="flex md:flex-col gap-4">
            {modalities.map((item, index) => (
              <button
                key={index}
                className={`text-lg font-bold px-4 py-2 border-b-2 ${
                  selectedTab === index ? "border-green-600 text-green-600" : "border-transparent text-gray-700"
                }`}
                onClick={() => handleTabChange(index)}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Tab Content (Right) */}
          <div className="flex-1 p-6 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-bold">{modalities[selectedTab].title}</h3>
            <p className="text-gray-700 mt-2">{modalities[selectedTab].description}</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-yellow-400 text-white text-center py-12 px-6">
        <h2 className="text-2xl font-bold mb-6">A Wide Variety of Services for AI Training Data</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white text-gray-800 p-6 rounded-lg shadow-md transform transition hover:scale-105">
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
