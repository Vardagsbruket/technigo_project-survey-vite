import { useState } from "react";

export const Continent = ({ updateFormData, value }) => {
  const [selectedContinent, setContinentGroup] = useState();

  const selectContinentGroup = (e) => {
    const selectedContinent = e.target.value;
    setContinentGroup(selectedContinent);
    updateFormData("continent", selectedContinent);
  };

  return (
    <>
      <h2>Which continent are you from?</h2>
      <div className="selectContainer">
        {/* Add label */}
        <select value={selectedContinent} onChange={selectContinentGroup}>
          <option value="">Select continent</option>
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
