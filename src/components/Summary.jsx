export const Summary = ({ formData }) => {
  const { name, age, continent, subquestion } = formData;

  return (
    <>
      <div>
        <p> Thanks {name}, we now know that you are in the age group {age} years old and that you live in {continent}.</p>
        <p>We then asked you {subquestion.questionText} and you told us {subquestion.value} on a scale where {subquestion.labelText}</p>
      </div>
    </>
  );
};
