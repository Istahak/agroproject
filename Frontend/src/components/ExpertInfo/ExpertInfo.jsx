import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import "./ExpertInfo.css"; // Your custom CSS for Expert Info Section

const ExpertInfo = () => {
  const [experts, setExperts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/experts");
        setExperts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching experts:", error);
      }
    };

    fetchExperts();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="expert-info-section">
      <h2>Our Experts</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Slider {...settings}>
          {experts.map((expert, index) => (
            <div key={index} className="expert-card">
              <img src={expert.image_url} alt={expert.name} />
              <h3>{expert.name}</h3>
              <p>{expert.qualifications}</p>
              <p>{expert.achievements}</p>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default ExpertInfo;
