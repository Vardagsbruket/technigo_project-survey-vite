import { useState } from "react";
import { Name } from "./Name";
import { AgeSpan } from "./AgeSpan";
import { Summary } from "./Summary";
import { Continent } from "./Continent";
import { ProgressBar } from "./ProgressBar";
import { SubQuestion } from "./SubQuestion";

export const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    continent: "",
    subquestion: "",
    questionText: "",
    labelText: "",
  });
  // Error state
  const [error, setError] = useState("");

  const updateFormData = (key, value) => {
    setFormData((values) => ({ ...values, [key]: value }));
  };

  // State to track the current step in the form
  const [currentStep, setCurrentStep] = useState(1);

  // Function to move to the next step in the form
  const nextStep = () => {
    if (currentStep < 5)
      if (formData.name === "") {
        // Check that the name input is not empty
        setError("Please enter a valid name");
      } else {
        setError("");
        setCurrentStep(currentStep + 1);
      }
  };

  // Function to move to the previous step in the form
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  //Function to submit input data and store it in submittedData
  const submitForm = () => {
    const submittedData = {
      name: formData.name,
      age: formData.age,
      continent: formData.continent,
    };
    setCurrentStep(5);
  };

  return (
    <div className="form-container">
      <ProgressBar currentStep={currentStep} />
      <h1>Tell us about yourself 😃</h1>
      <form>
        {/* Input field - add name */}
        {currentStep === 1 && (
          <Name
            value={formData.name}
            updateFormData={updateFormData}
            error={error}
            setError={setError}
          />
        )}
        {/* Radio buttons - select ageGroup */}
        {currentStep === 2 && (
          <AgeSpan value={formData.age} updateFormData={updateFormData} />
        )}
        {currentStep === 3 && (
          <Continent
            value={formData.continent}
            updateFormData={updateFormData}
          />
        )}
        {currentStep === 4 && (
          <SubQuestion
            continent={formData.continent}
            value={formData.subquestion}
            updateFormData={updateFormData}
          />
        )}
        {/* Summary page */}
        {currentStep === 5 && <Summary formData={formData} />}
      </form>
      <div className="buttons">
        {currentStep > 1 && (
          <button type="button" onClick={prevStep}>
            Back
          </button>
        )}
        {currentStep < 4 && (
          <button type="button" onClick={nextStep}>
            Next
          </button>
        )}
        {currentStep === 4 && (
          <button type="submit" onClick={submitForm}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};
