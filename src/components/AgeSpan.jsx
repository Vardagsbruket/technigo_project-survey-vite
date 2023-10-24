import { useState } from "react";

export const AgeSpan = () => {

    const [ageGroup, setAgeGroup] = useState();
  
    return (
      <div>
        How old are you?
        <label>
            <input 
                type="radio" 
                value="0-18" 
                onChange={event => setAgeGroup(event.target.value)}
                checked={ageGroup === "0-18"}
            />
            0-18
        </label>
        <label>
            <input 
                type="radio" 
                value="19-30" 
                onChange={event => setAgeGroup(event.target.value)}
                checked={ageGroup === "19-30"}
            />
            19-30
        </label>
        <label>
            <input 
                type="radio" 
                value="31-60" 
                onChange={event => setAgeGroup(event.target.value)}
                checked={ageGroup === "31-60"}
            />
            31-60
        </label>
        <label>
            <input 
                type="radio" 
                value="61-110" 
                onChange={event => setAgeGroup(event.target.value)}
                checked={ageGroup === "61-110"}
            />
            61-110
        </label>
      </div>
    );
  };