import { useState } from "react";

export const AgeSpan = ({ updateFormData, value }) => {
    const [ageGroup, setAgeGroup] = useState();

    const selectAgeGroup = (e) => {
        const selectedAgeGroup = e.target.value;
        setAgeGroup(selectedAgeGroup);
        updateFormData("age", selectedAgeGroup);
    };
  
  
    return (
      <div>
        How old are you?
        <label>
            <input 
                type="radio" 
                value="0-18" 
                onChange={selectAgeGroup}
                checked={ageGroup === "0-18"}
            />
            0-18
        </label>
        <label>
            <input 
                type="radio" 
                value="19-30" 
                onChange={selectAgeGroup}
                checked={ageGroup === "19-30"}
            />
            19-30
        </label>
        <label>
            <input 
                type="radio" 
                value="31-60" 
                onChange={selectAgeGroup}
                checked={ageGroup === "31-60"}
            />
            31-60
        </label>
        <label>
            <input 
                type="radio" 
                value="61-110" 
                onChange={selectAgeGroup}
                checked={ageGroup === "61-110"}
            />
            61-110
        </label>
      </div>
    );
  };