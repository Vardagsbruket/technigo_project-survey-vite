import { useState } from "react";

export const Continent = ({ updateFormData, value }) => {
  const [selectedContinent, setContinentGroup] = useState();

  const selectContinentGroup = (e) => {
    const selectedContinent = e.target.value;
    setContinentGroup(selectedContinent);
    updateFormData("continent", selectedContinent);
  };

  return (
    <div className="selectContainer">
      ¨<label htmlFor={selectedContinent}>Which continent are you from?</label>
      <select value={selectedContinent} onChange={selectContinentGroup}>
        <option value="">Select continent</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="South America">South America</option>
        <option value="North America">North America</option>
        <option value="Europe">Europe</option>
      </select>
    </div>
  );
};
