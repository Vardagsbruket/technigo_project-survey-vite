import { useState } from "react";

export const AgeSpan = ({ updateFormData, value }) => {
  const [ageGroup, setAgeGroup] = useState();

  const selectAgeGroup = (e) => {
    const selectedAgeGroup = e.target.value;
    setAgeGroup(selectedAgeGroup);
    updateFormData("age", selectedAgeGroup);
  };

  return (
    <>
      <h2>How old are you?</h2>
      <div className="radioContainer">
        <label htmlFor="age-0-18">0-18</label>
        <input
          type="radio"
          id="age-0-18"
          value="0-18"
          onChange={selectAgeGroup}
          checked={ageGroup === "0-18"}
        />

        <label htmlFor="age-19-30">19-30</label>
        <input
          type="radio"
          id="age-19-30"
          value="19-30"
          onChange={selectAgeGroup}
          checked={ageGroup === "19-30"}
        />

        <label htmlFor="age-31-60">31-60</label>
        <input
          type="radio"
          value="age-31-60"
          onChange={selectAgeGroup}
          checked={ageGroup === "31-60"}
        />

        <label htmlFor="age-61-110">61-110</label>
        <input
          type="radio"
          value="age-61-110"
          onChange={selectAgeGroup}
          checked={ageGroup === "61-110"}
        />
      </div>
    </>
  );
};
