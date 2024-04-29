// App.js

import React, { useState } from "react";
import CropCard from "../components/CropCard/CropCard";
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import CropInfoHero from "../components/CropInfoHero/CropInfoHero"; 
import Footer from '../components/Footer/Footer'

import "../assets/Style/CropInfoPage.css";

const cropsData = [
  {
    name: "Corn",
    cultivation: "Deep plowing, seedbed preparation, planting, etc.",
    pestControl: "Biological control, chemical control, cultural control, etc.",
    soilHealth: "Crop rotation, cover crops, soil testing, etc.",
  },
  {
    name: "Wheat1",
    cultivation: "Seedbed preparation, sowing, fertilizer application, etc.",
    pestControl: "Integrated pest management, pesticide application, etc.",
    soilHealth: "Conservation tillage, organic matter addition, etc.",
  },
  {
    name: "Wheat2",
    cultivation: "Seedbed preparation, sowing, fertilizer application, etc.",
    pestControl: "Integrated pest management, pesticide application, etc.",
    soilHealth: "Conservation tillage, organic matter addition, etc.",
  },
  {
    name: "Wheat3",
    cultivation: "Seedbed preparation, sowing, fertilizer application, etc.",
    pestControl: "Integrated pest management, pesticide application, etc.",
    soilHealth: "Conservation tillage, organic matter addition, etc.",
  },
  {
    name: "Wheat4",
    cultivation: "Seedbed preparation, sowing, fertilizer application, etc.",
    pestControl: "Integrated pest management, pesticide application, etc.",
    soilHealth: "Conservation tillage, organic matter addition, etc.",
  },
  {
    name: "Wheat5",
    cultivation: "Seedbed preparation, sowing, fertilizer application, etc.",
    pestControl: "Integrated pest management, pesticide application, etc.",
    soilHealth: "Conservation tillage, organic matter addition, etc.",
  },
  {
    name: "Wheat6",
    cultivation: "Seedbed preparation, sowing, fertilizer application, etc.",
    pestControl: "Integrated pest management, pesticide application, etc.",
    soilHealth: "Conservation tillage, organic matter addition, etc.",
  },
  {
    name: "Wheat7",
    cultivation: "Seedbed preparation, sowing, fertilizer application, etc.",
    pestControl: "Integrated pest management, pesticide application, etc.",
    soilHealth: "Conservation tillage, organic matter addition, etc.",
  },
  {
    name: "Wheat8",
    cultivation: "Seedbed preparation, sowing, fertilizer application, etc.",
    pestControl: "Integrated pest management, pesticide application, etc.",
    soilHealth: "Conservation tillage, organic matter addition, etc.",
  },
  {
    name: "Wheat9",
    cultivation: "Seedbed preparation, sowing, fertilizer application, etc.",
    pestControl: "Integrated pest management, pesticide application, etc.",
    soilHealth: "Conservation tillage, organic matter addition, etc.",
  },
  {
    name: "Wheat10",
    cultivation: "Seedbed preparation, sowing, fertilizer application, etc.",
    pestControl: "Integrated pest management, pesticide application, etc.",
    soilHealth: "Conservation tillage, organic matter addition, etc.",
  },
  {
    name: "Wheat12",
    cultivation: "Seedbed preparation, sowing, fertilizer application, etc.",
    pestControl: "Integrated pest management, pesticide application, etc.",
    soilHealth: "Conservation tillage, organic matter addition, etc.",
  },
  {
    name: "Wheat13",
    cultivation: "Seedbed preparation, sowing, fertilizer application, etc.",
    pestControl: "Integrated pest management, pesticide application, etc.",
    soilHealth: "Conservation tillage, organic matter addition, etc.",
  },
  {
    name: "Wheat14",
    cultivation: "Seedbed preparation, sowing, fertilizer application, etc.",
    pestControl: "Integrated pest management, pesticide application, etc.",
    soilHealth: "Conservation tillage, organic matter addition, etc.",
  },
  {
    name: "Wheat15",
    cultivation: "Seedbed preparation, sowing, fertilizer application, etc.",
    pestControl: "Integrated pest management, pesticide application, etc.",
    soilHealth: "Conservation tillage, organic matter addition, etc.",
  },
  {
    name: "Wheat16",
    cultivation: "Seedbed preparation, sowing, fertilizer application, etc.",
    pestControl: "Integrated pest management, pesticide application, etc.",
    soilHealth: "Conservation tillage, organic matter addition, etc.",
  },
  {
    name: "Wheat16",
    cultivation: "Seedbed preparation, sowing, fertilizer application, etc.",
    pestControl: "Integrated pest management, pesticide application, etc.",
    soilHealth: "Conservation tillage, organic matter addition, etc.",
  },
 
  // Add more crop data as needed
];

const itemsPerPage = 9;

const CropInfoPage = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCrop, setSelectedCrop] = useState(null);

  // Calculate the total number of pages
  const totalPages = Math.ceil(cropsData.length / itemsPerPage);

  // Calculate the index of the first and last item to display on the current page
  const indexOfLastCrop = currentPage * itemsPerPage;
  const indexOfFirstCrop = indexOfLastCrop - itemsPerPage;

  // Slice the cropsData array to get the crops for the current page
  const currentCrops = cropsData.slice(indexOfFirstCrop, indexOfLastCrop);

  const handleCropClick = (crop) => {
    setSelectedCrop(crop);
  };


  const nextPage = () => {
    // Increment the current page number if it's not the last page
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    // Decrement the current page number if it's not the first page
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };


  return (
    <div>

      <Header/>
      <Navbar/>
      <CropInfoHero/>

      {/* <h1>Crop Management System</h1> */}

      <div className="card-view">
        {currentCrops.map((crop) => (
          <CropCard className="crop-card"
            key={crop.name}
            crop={crop}
            onClick={() => handleCropClick(crop)}
          />
        ))}
        {selectedCrop && (
          <CropDetails
            crop={selectedCrop}
            onClose={() => setSelectedCrop(null)}
          />
        )}
      </div>

      <div className="pagination">
        <button className="pagination-button" onClick={prevPage} disabled={currentPage === 1}>Previous Page</button>
        <button className="pagination-button" onClick={nextPage} disabled={currentPage === totalPages}>Next Page</button>
      </div>

      <Footer/>
    </div>
  );
};

export default CropInfoPage;
