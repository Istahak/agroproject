import React from "react";
import "./Features.css"; // Your custom CSS for Features Section
import icon1 from "../../assets/icons/cloud.png";
import icon2 from "../../assets/icons/wheat.png";
import icon3 from "../../assets/icons/expert.png";

const Features = () => {
  const features = [
    {
      icon: icon1,
      title: "Weather Forecasts",
      description:
        "Get accurate and up-to-date weather forecasts tailored to your location, helping you plan your farming activities efficiently.",
    },
    {
      icon: icon2,
      title: "Crop Management Practices",
      description:
        "Access comprehensive guides and best practices for crop management, including planting, fertilization, pest control, and harvesting.",
    },
    {
      icon: icon3,
      title: "Expert Advice",
      description:
        "Consult with agricultural experts and advisors to receive personalized recommendations and solutions for your farming challenges.",
    },
  ];

  return (
    <div className="features-section">
      <div className="heading">
        <h2>Services</h2>
      </div>
      <div className="feature-cards">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-title">
              <h3>{feature.title}</h3>
            </div>
            <img src={feature.icon} alt={feature.title} />
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
