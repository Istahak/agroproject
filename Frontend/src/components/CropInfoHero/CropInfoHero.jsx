import React from "react";

import "./CropInfoHero.css";

export default function HeroImage() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://mdbootstrap.com/img/new/slides/041.webp')",
          height: 400,
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Crop Insights and Trends</h1>

              <div>
                <button className="bt">Kharif I</button>
                <button className="bt">
                  Kharif II
                </button>
                <button className="bt">Robi</button>
              </div>
              <h1 className="mb-3">
                A comprehensive online Crop index of Bangladesh{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
