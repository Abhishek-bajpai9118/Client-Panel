import React, { useState } from "react";

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);
  const [priceRange, setPriceRange] = useState([0, 5000]);

  // Example Projects
  const allProjects = [
    {
      id: 1,
      name: "Project 1 - React",
      rating: 4.5,
      originalPrice: 4000,
      sellingPrice: 3500,
      image: "https://via.placeholder.com/150?text=React",
      technology: "React",
    },
    {
      id: 2,
      name: "Project 2 - NodeJS",
      rating: 4.2,
      originalPrice: 5000,
      sellingPrice: 4500,
      image: "https://via.placeholder.com/150?text=NodeJS",
      technology: "NodeJS",
    },
    {
      id: 3,
      name: "Project 3 - Vue",
      rating: 4.7,
      originalPrice: 3000,
      sellingPrice: 2500,
      image: "https://via.placeholder.com/150?text=Vue",
      technology: "Vue",
    },
    {
      id: 4,
      name: "Project 4 - Angular",
      rating: 4.3,
      originalPrice: 3500,
      sellingPrice: 3200,
      image: "https://via.placeholder.com/150?text=Angular",
      technology: "Angular",
    },
  ];

  // Filter projects based on selected filters
  const filteredProjects = allProjects.filter((project) => {
    return (
      (selectedTech ? project.technology === selectedTech : true) &&
      (selectedRating > 0 ? project.rating >= selectedRating : true) &&
      project.sellingPrice >= priceRange[0] &&
      project.sellingPrice <= priceRange[1]
    );
  });

  const handleFilter = () => {
    // You can add logic here to filter projects as needed
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col justify-start items-center p-4">
      {/* Section Title */}
      <div className="text-4xl font-bold bg-gray-200 w-full flex justify-center items-center py-4 border-b-2">
        Our Projects
      </div>

      {/* Filters and Projects */}
      <div className="w-full flex flex-wrap py-6 gap-6">
        {/* Left Side: Categories Dropdown */}
        <div className="w-full md:w-1/4 p-4">
          <h3 className="text-sm font-bold mb-4">Select Technology</h3>
          <select
            value={selectedTech}
            onChange={(e) => setSelectedTech(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">All</option>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="Angular">Angular</option>
            <option value="NodeJS">NodeJS</option>
          </select>
        </div>

        {/* Right Side: Filters */}
        <div className="w-full md:w-3/4 p-4 flex flex-wrap md:flex-nowrap gap-6">
          {/* Filter by Rating */}
          <div className="w-full sm:w-1/3">
            <label className="text-sm font-bold mb-2 block">Filter by Rating</label>
            <select
              value={selectedRating}
              onChange={(e) => setSelectedRating(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value={0}>All Ratings</option>
              <option value={4}>4 Stars & Above</option>
              <option value={4.5}>4.5 Stars & Above</option>
            </select>
          </div>

          {/* Filter by Price */}
          <div className="w-full sm:w-1/3">
            <label className="text-sm font-bold mb-2 block">Filter by Price</label>
            <input
              type="range"
              min="0"
              max="5000"
              step="100"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([e.target.value, priceRange[1]])}
              className="w-full"
            />
            <div className="flex justify-between text-sm mt-1">
              <span>₹{priceRange[0]}</span>
              <span>₹{priceRange[1]}</span>
            </div>
          </div>

          {/* Apply Filters Button */}
          <div className="w-full sm:w-auto mt-4">
            <button
              onClick={handleFilter}
              className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4 sm:mt-0"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="w-full p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white border border-gray-300 rounded-lg shadow-lg p-4"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-32 object-cover rounded-md"
            />
            <h4 className="mt-2 text-lg font-bold">{project.name}</h4>
            <div className="flex items-center mt-1">
              <span className="text-yellow-500">⭐</span>
              <span className="ml-1">{project.rating}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span className="line-through text-gray-500">
                ₹{project.originalPrice}
              </span>
              <span className="text-red-500 font-bold">
                ₹{project.sellingPrice}
              </span>
            </div>
            <div className="text-green-500 font-semibold mt-1">
              {Math.round(
                ((project.originalPrice - project.sellingPrice) /
                  project.originalPrice) *
                  100
              )}
              % Off
            </div>
          </div>
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="flex justify-center items-center mb-4">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
          View All Projects
        </button>
      </div>
    </div>
  );
};

export default Projects;
