export const Name = ({ value, updateFormData }) => {

    const name = (e) => updateFormData("name", e.target.value);
  
    return (
      <>
        <label htmlFor="name">What is your name?</label>
        <input type="text" name="name" value={value} onChange={name} placeholder="Type your name here please."/>
      </>
    );
  };