"use client";

import Image from "next/image";
import { useState } from "react";

export default function Gallery() {
  const images = [
    "g-01",
    "g-02",
    "g-03",
    "g-04",
    "g-05",
    "g-06",
    "g-07",
    "g-08",
    "g-09",
    "g-10",
    "g-11",
    "g-12",
    "g-13",
    "g-14",
    "g-15",
    "g-16",
    "g-17",
    "g-18",
    "g-19",
    "g-20",
    "g-21",
    "g-22",
    "g-23",
    "g-24",
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleImages = showAll ? images : images.slice(0, 8);

  return (
    <>
      <div className="mx-auto max-w-2xl py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
          Gallery
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {visibleImages.map((image) => (
            <div key={image} className="group relative cursor-pointer" onClick={() => setSelectedImage(image)}>
              <Image
                alt={image}
                src={`/images/${image}.webp`}
                width={400}
                height={800}
                className="w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:h-80 md:h-80 sm:h-80"
              />
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-full text-gray-700 border-gray-400 hover:bg-gray-100 transition"
          >
            {showAll ? "ดูรูปน้อยลง" : "ดูรูปทั้งหมด"}
            <span className="inline-block animate-bounce-slow">
              {showAll ? "↑" : "↓"}
            </span>
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-[80vw] h-[80vh] max-w-[80vw] max-h-[80vh]">
            <Image
              src={`/images/${selectedImage}.webp`}
              alt={selectedImage}
              fill
              className="object-contain rounded-lg shadow-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white text-3xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
