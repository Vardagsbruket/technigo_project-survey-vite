import { useState } from "react";
import { Name } from "./Name";

export const MultiStepForm = () => {

    
    const [formData, setFormData] = useState({
        name: "",
    });

    const updateFormData = (field, value) => {
        setFormData((values) => ({...values, [field]: value}));
    };
    console.log(formData);

        return (
            // Add form template here
            <div>
                <h1>Tell us about yourself 😃</h1>
                <div className="inputContainer">
                    <form>
                        {/* Change this code. */}
                        <Name value={formData.name} updateFormData={updateFormData}/>
                        {/* Change this code. */}
                    </form>
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