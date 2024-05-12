import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/Style/CropDetailsPage.css"; // Import CSS file for styling
import { useParams } from "react-router-dom";
// const DummyCropDetails = {
//   id: 1,
//   name: "Rice (Boro)",
//   variety: [
//     "Iratom-24",
//     "BRRI hybrid dhan7",
//     "BRRI hybrid dhan5",
//     "BRRI hybrid dhan3",
//   ],
//   land_and_soil:
//     "Loamy, clay and clay loam soils with irrigation facilities are suitable for BRRI dhan29 cultivation.",
//   seed_rate: "22 kg./hectare",
//   seed_cleaning:
//     "Dissolve 375g urea in 10 liters of water and put 10 kg. seeds into the container and stir seeds by hand. Remove good seeds from the container; wash it 3-4 times with clean water.",
//   seed_treatment_and_soaking:
//     "Generally treatment is not essential for sorted spotless seeds. But if seeds are spotted, purification is necessary and that could be done by treating seeds with carbendazim fungicide.",
//   seedbed_preparation_and_care:
//     "Clay and loamy fertile soils are essential for seedling raising. However, if fertile soil is not available then 2 kg organic fertilizer, 4g triple super phosphate, 7 gm muriate of potash per square meter needs to be added.",
//   sowing_seeds_in_seedbed:
//     "01-20 November (Mid Kartik to 1st week of Agrahayan)",
//   seedling_age: "35-45 days",
//   seedling_number: "2-3 seedlings per hill at 2-3 cm depth",
//   spacing: "Row to row 20 -25 cm and plant to plant 15 cm -20 cm",
//   land_preparation_and_transplanting:
//     "Three to four plowing followed by laddering or harrowing may require for a good tilth depending on soil types. Land for transplanted culture is prepared in wet conditions to make the soil soft and muddy.",
//   fertilizer_amount:
//     "Please use 'Khamari' App to calculate Position based and Union based Fertilizer Recommendation according to Land Type and Crop Variety wise. Method of Application: Low fertile land: 1/3 urea at basal, 1/3 at 4-5 tillering stage and 1/3 at 5-7 days before Panicle initiation stage. All other remaining fertilizers should be applied at the time of final land preparation. Medium fertile land: Urea in 3 equal splits at 15-20, 30-35 DAT and the remaining urea will be applied at 5-7 days before panicle initiation stage. All other fertilizers should be applied at the time of final land preparation.",
//   use_of_urea_super_granules:
//     "Seedlings should be transplanted at a spacing of 20 x 20 cm for using USG in between four hills. USG should be placed at 8-10 cm deep in to soil at 10-15 DAT. In general, one granule of 2.7 gm is used for Boro rice.",
//   irrigation:
//     "Rice can be grown without continuous standing water. Generally, 2-4 cm standing water can be kept up to 10-12 DAT then reduce the amount to facilitate tillering and reduction of irrigation cost. PVC pipes, alternate wetting dying (AWD) system may be practiced.",
//   weed_control:
//     "Land always should be free from weed infestation. For satisfactory yield, field should be free from weeds for a period of 40-50 days after transplanting.",
//   insect_and_disease_control:
//     "Recommended plant protection measures should be taken against insects and diseases.",
//   harvesting_time:
//     "When 80% grains of upper portion of the panicle are straw coloured and the remaining 20 % grains in the lower portions of the panicle are in hard dough stage.",
//   post_harvest_and_storage:
//     "After threshing and cleaning the moisture content of the rough rice must be adjusted below 12-14% before storing. In general, 4-5 days of sun-drying are required to reduce the grain moisture content to an acceptable level. Rough rice can be stored for consumption in sacks, metal or wooden boxes, bamboo baskets, cans, drums, and small granaries.",
//   image_url: "https://example.com/crop-image.jpg",
//   info_source:
//     "Adunik Dhaner Chas (17th Edition) BRRI, Hand Book of Agricultural Technology 2013, BARC and Fact sheet Boro dhaner jat, 26, BRKB, BRRI.",
// };

const CropDetailsPage = () => {
  const [cropInfo, setCropInfo] = useState(null);
  const { cropId } = useParams();
  console.log(cropId);

    useEffect(() => {
      // Fetch crop information based on crop ID
      const fetchCropInfo = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/crop-info/${cropId}`); // Assuming your backend API endpoint for fetching crop info is "/api/crop/:id"
          setCropInfo(response.data);
        } catch (error) {
          console.error('Error fetching crop information:', error);
        }
      };

      fetchCropInfo();
    }, [cropId]);

  return (
    <div className="crop-details-container">
      {cropInfo ? (
        <div>
          <h1>{cropInfo.name}</h1>
          <p><h3>Land and Soil:</h3> {cropInfo.land_and_soil}</p>
          <p><h3>Seed Rate:</h3> {cropInfo.seed_rate}</p>
          <p><h3>Seed Cleaning:</h3> {cropInfo.seed_cleaning}</p>
          <p>
            <h3>Seed Treatment and Soaking:</h3> {cropInfo.seed_treatment_and_soaking}
          </p>
          <p>
            <h3>Seedbed Preparation and Care:</h3>{" "}
            {cropInfo.seedbed_preparation_and_care}
          </p>
          <p><h3>Sowing Seeds in Seedbed:</h3> {cropInfo.sowing_seeds_in_seedbed}</p>
          <p><h3>Seedling Age:</h3> {cropInfo.seedling_age}</p>
          <p><h3>Seedling Number:</h3> {cropInfo.seedling_number}</p>
          <p><h3>Spacing:</h3> {cropInfo.spacing}</p>
          <p>
            <h3>Land Preparation and Transplanting:</h3>{" "}
            {cropInfo.land_preparation_and_transplanting}
          </p>
          <p><h3>Fertilizer Amount:</h3> {cropInfo.fertilizer_amount}</p>
          <p>
            <h3>Use of Urea Super Granules:</h3> {cropInfo.use_of_urea_super_granules}
          </p>
          <p><h3>Irrigation:</h3> {cropInfo.irrigation}</p>
          <p><h3>Weed Control:</h3> {cropInfo.weed_control}</p>
          <p>
            <h3>Insect and Disease Control:</h3> {cropInfo.insect_and_disease_control}
          </p>
          <p><h3>Harvesting Time:</h3> {cropInfo.harvesting_time}</p>
          <p><h3>Post-harvest and Storage:</h3> {cropInfo.post_harvest_and_storage}</p>
          <p><h3>Info Source :</h3>{cropInfo.info_source}</p>
          {/* Add more crop information as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CropDetailsPage;
