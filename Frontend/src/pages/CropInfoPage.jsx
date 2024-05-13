// App.js

import React, { useState, useEffect } from "react";
import CropCard from "../components/CropCard/CropCard";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import CropInfoHero from "../components/CropInfoHero/CropInfoHero";
import Footer from "../components/Footer/Footer";

import "../assets/Style/CropInfoPage.css";

import axios from "axios";
import CropDetailsPage from "./CropDetailsPage";

const itemsPerPage = 9;

const CropInfoPage = () => {
  const [cropsData, setCropsData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/crop-info");
        setCropsData(response.data);
      } catch (error) {
        console.error("Error fetching crop information:", error);
      }
    };
    fetchData();
  }, []);

  // Calculate the total number of pages

  const totalPages = Math.ceil(cropsData.length / itemsPerPage);

  // Calculate the index of the first and last item to display on the current page
  const indexOfLastCrop = currentPage * itemsPerPage;
  const indexOfFirstCrop = indexOfLastCrop - itemsPerPage;

  // Slice the cropsData array to get the crops for the current page
  const currentCrops = cropsData.slice(indexOfFirstCrop, indexOfLastCrop);

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
      {/* <Header/> */}
      <Navbar />
      <CropInfoHero />

      {/* <h1>Crop Management System</h1> */}

      <div className="card-view">
        {cropsData.map((crop) => (
          <CropCard className="crop-card" key={crop.id} crop={crop} />
        ))}
      </div>

      <div className="pagination">
        <button
          className="pagination-button"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <button
          className="pagination-button"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next Page
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default CropInfoPage;
