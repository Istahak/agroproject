import React, { useContext, useRef } from "react";
import { assets } from "../../assets/js/assets";
import "./Main.css";
import { Context } from "../../Context/Context.jsx";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResults,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file); // Get the first file from the input
  };

  const handleCardClick = (promptText) => {
    setInput(promptText);
  };

  const handleGalleryIconClick = () => {
    fileInputRef.current.click(); // Trigger click on hidden file input
  };

  return (
    <div className="main">
      <div className="nav">
        <p>AI Help</p>
      </div>
      <div className="main-container">
        {!showResults ? (
          <>
            <div className="greet">
              <p>
                <span>Hello</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div
                className="card"
                onClick={() => handleCardClick("Optimize Crop Yield")}
              >
                <p>Optimize Crop Yield</p>
                <img src={assets.field_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleCardClick("Pest Control Methods for Tomato Plants")
                }
              >
                <p>Pest Control Methods for Tomato Plants</p>
                <img src={assets.bug_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleCardClick("Best Practices for Organic Farming")
                }
              >
                <p>Best Practices for Organic Farming</p>
                <img src={assets.leaf_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleCardClick("Water Management in Agriculture")
                }
              >
                <p>Water Management in Agriculture</p>
                <img src={assets.water_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  onSent();
                }
              }}
              value={input}
              type="text"
              className="text-sm rounded-lg block w-full p-2.5 bg-gray-800 border-gray-600"
              placeholder="Enter the Prompt Here"
            />
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
                ref={fileInputRef}
              />
              <img
                src={assets.gallery_icon}
                alt=""
                onClick={handleGalleryIconClick}
              />
              <img
                src={assets.send_icon}
                alt=""
                onClick={() => {
                  onSent();
                }}
              />
            </div>
          </div>
          <div className="bottom-info">
            <p>Gemini AI is being used here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
