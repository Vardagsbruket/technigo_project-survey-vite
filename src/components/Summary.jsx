export const Summary = ({ formData }) => {
  return (
    <>
      <div>
        <p> Name: {formData.name}</p>
        <p>Age: {formData.age}</p>
        <p>Continent: {formData.continent}</p>
      </div>
    </>
  );
};
