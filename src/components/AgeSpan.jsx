import { useState } from "react";

export const AgeSpan = ({ updateFormData, value }) => {
  const [ageGroup, setAgeGroup] = useState();

  const selectAgeGroup = (e) => {
    const selectedAgeGroup = e.target.value;
    setAgeGroup(selectedAgeGroup);
    updateFormData("age", selectedAgeGroup);
  };

  return (
    <fieldset className="radioContainer">
      <legend>How old are you?</legend>
      <ul>
        <li>
          <label htmlFor="0-18">0-18</label>
          <input
            type="radio"
            value="0-18"
            id="0-18"
            onChange={selectAgeGroup}
            checked={ageGroup === "0-18"}
          />
        </li>
        <li>
          <label htmlFor="19-30">19-30</label>
          <input
            type="radio"
            value="19-30"
            id="19-30"
            onChange={selectAgeGroup}
            checked={ageGroup === "19-30"}
          />
        </li>
        <li>
          <label htmlFor="31-60">31-60</label>
          <input
            type="radio"
            value="31-60"
            id="31-60"
            onChange={selectAgeGroup}
            checked={ageGroup === "31-60"}
          />
        </li>
        <li>
          <label htmlFor="61-110">61-110</label>
          <input
            type="radio"
            value="61-110"
            id="61-110"
            onChange={selectAgeGroup}
            checked={ageGroup === "61-110"}
          />
        </li>
      </ul>
    </fieldset>
  );
};
