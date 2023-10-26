import { useState } from "react";

export const Continent = ({ updateFormData, value }) => {
  const [selectedContinent, setContinentGroup] = useState();

  const selectContinentGroup = (e) => {
    const selectedAgeGroup = e.target.value;
    setContinentGroup(selectedAgeGroup);
    updateFormData("continent", selectedAgeGroup);
  };

  return (
    <>
      <h2>Which continent are you from?</h2>
      <div className="selectContainer">
        {/* Add label */}
        <select value={selectedContinent} onChange={selectContinentGroup}>
          <option value="africa">Africa</option>
          <option value="asia">Asia</option>
          <option value="southamerica">South America</option>
          <option value="northamerica">North America</option>
          <option value="europe">Europe</option>
        </select>
      </div>
    </>
  );
};
