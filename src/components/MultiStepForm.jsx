import { useState } from "react";
import { Name } from "./Name";
import { AgeSpan } from "./AgeSpan";
import { Summary } from "./Summary";
import { Continent } from "./Continent";

export const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    continent: "",
  });

  const updateFormData = (key, value) => {
    setFormData((values) => ({ ...values, [key]: value }));
  };

  // State to track the current step in the form
  const [currentStep, setCurrentStep] = useState(1);

  // Function to move to the next step in the form
  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
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
    console.log(submittedData);
    setCurrentStep(4);
  };

  return (
    <div className="form-container">
      <h1>Tell us about yourself 😃</h1>

      <form>
        {/* Input field - add name */}
        {currentStep === 1 && (
          <Name value={formData.name} updateFormData={updateFormData} />
        )}
        {/* Radio buttons - select ageGroup */}
        {currentStep === 2 && (
          <AgeSpan value={formData.age} updateFormData={updateFormData} />
        )}
        {currentStep === 3 && (
          <Continent value={formData.name} updateFormData={updateFormData} />
        )}
        {/* Summary page */}
        {currentStep === 4 && <Summary formData={formData} />}
      </form>
      <div className="buttons">
        {currentStep > 1 && <button onClick={prevStep}>Back</button>}
        {currentStep < 4 ? (
          <button onClick={nextStep}>Next</button>
        ) : (
          <button onClick={submitForm}>Submit</button>
        )}
      </div>
    </div>
  );
};

/**
 *
 *
 * Styling (Styling)
 * Continent component (Pernilla)
 *
 *
 * Age component (Diana)
 * Knappar pre och next (Diana)
 * Summery (Diana)
 *
 * Följfrågor (parprogrammering) (Pernilla kollar)
 *
 * Submit
 *
 *
 */
