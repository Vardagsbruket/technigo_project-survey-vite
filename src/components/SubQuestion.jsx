import { useState } from "react";

export const SubQuestion = ({ value, continent, updateFormData }) => {
  let questionText;
  let labelText;

  switch (continent) {
    case "africa":
      questionText = "Have you seen many elephants?";
      labelText = "1 = none, 10 = plenty";
      break;
    case "asia":
      questionText = "Do you like sushi?";
      labelText = "1 = not so much, 10 = I love it!";
      break;
    case "southamerica":
      questionText = "Do you speak spanish?";
      labelText = "1 = not at all, 10 = I'm a native speaker";
      break;
    case "northamerica":
      questionText = "Do you you like american food?";
      labelText = "1 = not at all, 10 = I love it!";
      break;
    case "europe":
      questionText = "Do you prefer city or country side life?";
      labelText = "1 = cities are the best, 10 = the country side is my dream";
      break;
    default:
      questionText = "Default Question";
      labelText = "Default Label";
  }

  const subquestion = (e) => {
    updateFormData("subquestion", e.target.value);
    updateFormData("questionText", questionText);
    updateFormData("labelText", labelText);
  };

  return (
    <div className="slideContainer">
      <h2>{questionText}</h2>
      <label htmlFor="myRange">{labelText}</label>
      <input
        type="range"
        min="1"
        max="10"
        id="myRange"
        value={value}
        className="slider"
        onChange={subquestion}
      />
      <span>{value}</span>
    </div>
  );
};
