import React, { useState } from "react";
import Search from "../assets/icons/search.svg";
import Background from "../components/WeatherBG/Background";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import MiniCard from "../components/MiniCard/MiniCard";
import Navbar from "../components/Navbar/Navbar";
import { useStateContext } from "../Context";
function WeatherPage() {
  const [input, setInput] = useState("");
  const { weather, thisLocation, values, place, setPlace } = useStateContext();
  // // console.log(weather)

  const submitCity = () => {
    setPlace(input);
    setInput("");
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="m-0 p-0 bg-black w-full h-100 text-white px-8 border-box-container">
        <Background></Background>
        <nav className="w-full p-3 flex justify-between items-center">
          <h1 className="font-bold tracking-wide text-3xl z-1">
            Weather Forecast
          </h1>
          <div className="bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2 z-1">
            <img
              src={Search}
              alt="Search"
              className="w-[1.5rem] h-[1.5rem] bg-white"
            />
            <input
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  submitCity();
                }
              }}
              type="text"
              placeholder="Search City"
              className="bg-white focus:outline-none w-full text-[#212121] text-lg"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </nav>
        <main className="w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center">
          <WeatherCard
            place={thisLocation}
            windspeed={weather.wspd}
            humidity={weather.humidity}
            temperature={weather.temp}
            heatIndex={weather.heatindex}
            iconString={weather.conditions}
            conditions={weather.conditions}
          />

          <div className="flex justify-center gap-8 flex-wrap w-[60%]">
            {values?.slice(1, 7).map((curr) => {
              return (
                <MiniCard
                  key={curr.datetime}
                  time={curr.datetime}
                  temp={curr.temp}
                  iconString={curr.conditions}
                />
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
}

export default WeatherPage;
