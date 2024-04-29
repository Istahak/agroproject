import React from "react";
import "./ExpertInfo.css"; // Your custom CSS for Expert Info Section
import expertImage1 from "../../assets/images/expert1.jpg";
import expertImage2 from "../../assets/images/expert2.jpg";
import expertImage3 from "../../assets/images/expert3.jpg";

const ExpertInfo = () => {
  const experts = [
    {
      image: expertImage1,
      name: "Dr. John Smith",
      qualifications: "Ph.D. in Agricultural Science",
      achievements:
        "Published numerous research papers on sustainable farming practices.",
    },
    {
      image: expertImage2,
      name: "Dr. Emily Johnson",
      qualifications: "M.Sc. in Crop Science",
      achievements:
        "Recipient of the Excellence in Agriculture Award for her contributions to the field.",
    },
    {
      image: expertImage3,
      name: "Prof. Michael Brown",
      qualifications: "B.Sc. in Agronomy",
      achievements:
        "Led successful agricultural development projects in rural communities.",
    },
  ];

  return (
    <div className="expert-info-section">
      <h2>Our Experts</h2>
      <div className="expert-cards">
        {experts.map((expert, index) => (
          <div key={index} className="expert-card">
            <img src={expert.image} alt={expert.name} />
            <h3>{expert.name}</h3>
            <p>{expert.qualifications}</p>
            <p>{expert.achievements}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertInfo;
