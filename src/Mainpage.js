import { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { Routes ,Route} from 'react-router-dom';
// import './App.css';
import Heroimg from './Images/Heroimg.png';
import ceopic from './Images/ceopic.jpg'
import project2 from './Images/project2.avif';
import project3 from './Images/project3.avif';
import project4 from './Images/project4.avif';

import project6 from './Images/project6.avif';

import project5 from './Images/project5.avif';
import projectimg from './Images/projectimg.avif';
import GetInTouchForm from './Component/Getintouch';


const projectsData = [
  {
    id: 1,
    image: project2,
    name: "Project A",
    rating: 4.5,
    originalPrice: 1500,
    sellingPrice: 1200,
    technology: "React",
  },
  {
    id: 2,
    image: projectimg,
    name: "Project B",
    rating: 4.0,
    originalPrice: 2000,
    sellingPrice: 1800,
    technology: "Vue",
  },
  {
    id: 3,
    image: project3,
    name: "Project B",
    rating: 4.5,
    originalPrice: 2400,
    sellingPrice: 1800,
    technology: "Vue",
  },
  {
    id: 4,
    image: project4,
    name: "Project B",
    rating: 4.0,
    originalPrice: 1400,
    sellingPrice: 1200,
    technology: "Vue",
  },
  {
    id: 5,
    image: project5,
    name: "Project E",
    rating: 3.5,
    originalPrice: 2200,
    sellingPrice: 1800,
    technology: "Dot net",
  },
  {
    id: 6,
    image: project6,
    name: "Project F",
    rating: 4.5,
    originalPrice: 2700,
    sellingPrice: 2500,
    technology: "Mern",
  },
  {
    id: 7,
    image: projectimg,
    name: "Project G",
    rating: 4.0,
    originalPrice: 3000,
    sellingPrice: 2800,
    technology: "Vue",
  },
  {
    id: 8,
    image: project2,
    name: "Project H",
    rating: 2.5,
    originalPrice: 1800,
    sellingPrice: 1600,
    technology: "Vue",
  },
 
  // Add more project data here...
];




function Mainpage() {

  

  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedTech, setSelectedTech] = useState("");

  const handleFilter = () => {
    const filtered = projectsData.filter((project) => {
      return (
        project.originalPrice >= priceRange[0] &&
        project.originalPrice <= priceRange[1] &&
        (selectedRating === 0 || project.rating >= selectedRating) &&
        (selectedTech === "" || project.technology === selectedTech)
      );
    });
    setFilteredProjects(filtered);
  };

  
  return (
  <>
  <div className=''> 
 
{/* hero section  */}
<div className="relative w-full h-screen bg-white flex flex-col items-center mt-[6vh] px-4 md:px-10">
  {/* Content */}
  <div className="relative z-10 w-full flex flex-col-reverse md:flex-row justify-between items-center gap-8">
    {/* Left Section */}
    <div className="text-gray-800 max-w-xl text-center md:text-left">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
       <span className='text-7xl'> Welcome</span> to Our <br />
        <span className="text-pink-500">Project Shop</span>
      </h1>

      {/* Tagline */}
      <span className="text-lg md:text-xl mb-6 block">
        Empowering Creators, Delivering Solutions.
      </span>

      {/* Buttons */}
      <div className="flex justify-center md:justify-start gap-4 mb-8">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Purchase Now
        </button>
        <button className="px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600">
          Learn More
        </button>
      </div>

      {/* Statistics Card */}
      <div className="flex flex-wrap justify-center md:justify-start gap-6">
        <div className="text-center flex gap-2 items-center">
          <div className="text-3xl md:text-4xl font-bold">14k+</div>
          <div className="flex flex-col text-sm md:text-base">
            <div>Product</div>
            <div>Varieties</div>
          </div>
        </div>
        <div className="text-center flex gap-2 items-center">
          <div className="text-3xl md:text-4xl font-bold">50k+</div>
          <div className="flex flex-col text-sm md:text-base">
            <div>Happy</div>
            <div>Customers</div>
          </div>
        </div>
        <div className="text-center flex gap-2 items-center">
          <div className="text-3xl md:text-4xl font-bold">10+</div>
          <div className="flex flex-col text-sm md:text-base">
            <div>Store</div>
            <div>Locations</div>
          </div>
        </div>
      </div>
    </div>

    {/* Right Section - Image */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src={Heroimg}
        alt="Project"
        className="w-full max-w-md md:max-w-lg object-cover "
      />
    </div>
  </div>
</div>




    {/* project section  */}
    <div className="flex flex-col justify-center items-center">
  {/* Section Title */}
  <div className="text-4xl font-bold bg-gray-200 h-[60px] w-full flex justify-center items-center border-b-2">
    Our Projects
  </div>

  {/* Filters and Projects */}
  <div className="w-full flex flex-wrap">
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
    <div className="w-full md:w-3/4 px-4 flex flex-wrap md:flex-nowrap gap-4">
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
      <div className="w-full sm:w-auto">
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
  <div className="w-full p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
    <NavLink to='/Projects' className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
    View Project
    </NavLink>
  </div>
</div>



    {/* about us page  */}





    <div className="bg-gradient-to-r from-blue-500 to-green-500 py-16 px-4 text-white">
  {/* Container */}
  <div className="max-w-7xl mx-auto text-center">
    {/* Title */}
    <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">About Us</h1>

    {/* About Section */}
    <p className="text-lg sm:text-xl mb-8 px-2 sm:px-6">
      Welcome to <span className="font-bold">Project Shop</span>, your number one source for all things [Products]. We’re dedicated to providing you the best products with an emphasis on quality, customer service, and uniqueness.
    </p>

    {/* Mission and Vision */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-16">
      {/* Mission Statement */}
      <div className="bg-yellow-300 p-6 rounded-lg shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-800">Our Mission</h2>
        <p className="text-gray-800">
          At Project Shop, we aim to deliver the best quality products to your doorstep, all at affordable prices. Shopping should be a seamless experience, and we strive to ensure customer satisfaction at every step.
        </p>
      </div>

      {/* Vision Statement */}
      <div className="bg-purple-300 p-6 rounded-lg shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-800">Our Vision</h2>
        <p className="text-gray-800">
          We envision a world where shopping is not just about transactions but about building long-lasting relationships with our customers. Our goal is to evolve, expand, and continue improving your shopping experience.
        </p>
      </div>
    </div>

    {/* Values Section */}
    <div className="mb-16">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Our Values</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Value 1 */}
        <div className="bg-orange-400 p-6 rounded-lg shadow-xl">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">Customer Satisfaction</h3>
          <p>
            We aim to exceed customer expectations with every product and service we offer. Your satisfaction is always our priority.
          </p>
        </div>

        {/* Value 2 */}
        <div className="bg-pink-400 p-6 rounded-lg shadow-xl">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">Quality Products</h3>
          <p>
            We offer only the highest quality products, thoroughly tested for durability, reliability, and performance.
          </p>
        </div>

        {/* Value 3 */}
        <div className="bg-teal-400 p-6 rounded-lg shadow-xl">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">Innovation</h3>
          <p>
            We stay at the forefront of new trends, ensuring that our customers have access to the latest and greatest products.
          </p>
        </div>
      </div>
    </div>

    {/* Team Section */}
    <div className="mb-16">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Meet Our Team</h2>
      <p className="text-lg sm:text-xl mb-6 px-2 sm:px-6">
        Our dedicated team works tirelessly to bring the best to our customers. We are passionate about technology, fashion, and providing exceptional customer service.
      </p>

      {/* Team Members */}
      <div className="flex flex-wrap justify-center gap-8">
        {/* Team Member 1 */}
        <div className="text-center w-40 sm:w-52">
          <img
            src={ceopic}
            alt="Team Member"
            className="w-24 sm:w-36 h-24 sm:h-36 rounded-full mx-auto mb-4"
          />
          <h4 className="text-lg sm:text-2xl font-semibold">Abhishek</h4>
          <p className="text-sm sm:text-base">CEO & Founder</p>
        </div>

        {/* Team Member 2 */}
        <div className="text-center w-40 sm:w-52">
          <img
           src={ceopic}
            alt="Team Member"
            className="w-24 sm:w-36 h-24 sm:h-36 rounded-full mx-auto mb-4"
          />
          <h4 className="text-lg sm:text-2xl font-semibold">Jane Smith</h4>
          <p className="text-sm sm:text-base">CMO</p>
        </div>

        {/* Team Member 3 */}
        <div className="text-center w-40 sm:w-52">
          <img
            src={ceopic}
            alt="Team Member"
            className="w-24 sm:w-36 h-24 sm:h-36 rounded-full mx-auto mb-4"
          />
          <h4 className="text-lg sm:text-2xl font-semibold">Mike Johnson</h4>
          <p className="text-sm sm:text-base">Lead Developer</p>
        </div>
      </div>
    </div>
  </div>
</div>

{/* get in touch section  */}
 <div>
  <GetInTouchForm/>
 </div>





     
  </div>

  {/* footer section  */}








  
  </>
  );
}

export default Mainpage;
