import { useState } from "react";

export const Name = ({ value, updateFormData }) => {
  const [error, setError] = useState("");

  const updateName = (e) => {
    // validate value and update form data
    const re = /^[A-Za-z\s]+$/;

    if (!re.test(e.target.value)) {
      setError("Please enter a valid name");
    } else {
      setError("");
      updateFormData("name", e.target.value);
    }
  };

  return (
    <div className="inputContainer">
      <h2>What is your name?</h2>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={value}
        onChange={updateName}
        placeholder="Type your name here please."
      />
      {/* Display error message */}
      {error && <p className="error">{error}</p>}
    </div>
  );
};
