export const Name = ({ value, updateFormData }) => {
  const name = (e) => updateFormData("name", e.target.value);

  return (
    <div className="inputContainer">
      <h2>What is your name?</h2>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={value}
        onChange={name}
        placeholder="Type your name here please."
      />
    </div>
  );
};
