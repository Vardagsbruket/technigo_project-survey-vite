export const Summary = ({ formData }) => {
  const { name, age, continent, questionText, value, labelText } = formData;

  return (
    <>
      <div>
        <p> Thanks {name}, we now know that you are in the age group {age} years old and that you live in {continent}.</p>
        <p>We then asked you {questionText} and you told us {value} on a scale where {labelText}</p>
      </div>
    </>
  );
};
