import { useState } from "react";
import { Name } from "./Name";
import { AgeSpan } from "./AgeSpan";

export const MultiStepForm = () => {

    
    const [formData, setFormData] = useState({
        name: "",
        //age: How do we get the ageGroup to be stored here?
        //continent: 
    });

    const updateFormData = (field, value) => {
        setFormData((values) => ({...values, [field]: value}));
    };
    console.log(formData);

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

    const submitForm = () => {
        console.log(FormData);
        const submittedData = `
            Name: ${formData.name}
        `;
        alert(submittedData);
    }

        return (
            // Add form template here
            <div>
                <h1>Tell us about yourself 😃</h1>
                <div className="inputContainer">
                    <form>
                        {/* Change this code. */}
                        {currentStep === 1 && (
                            <Name value={formData.name} updateFormData={updateFormData}/>
                        )}
                        {/* Change this code. */}
                        {currentStep === 2 && (
                            <AgeSpan />
                        )}
                        {/* {currentStep === 3 && (
                            <Continent />
                        )} */}

                    </form>
                    <div className="buttons">
                            {currentStep > 1 && <button onClick={prevStep}>Back</button>}
                            {currentStep < 3 ? (
                                <button onClick={nextStep}>Next</button>
                            ) : (
                                <button onClick={submitForm}>Submit</button>
                            )}
                    </div>
                </div>
            </div>
        )

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