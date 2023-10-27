export const Summary = ({ formData }) => {
  const { name, age, continent, questionText, subquestion, labelText } =
    formData;

  return (
    <>
      <div className="summaryText">
        <p>
          Thanks <b>{name}</b>, we now know that you are in the age group
          <b>{age} years old</b> and that you live in <b>{continent}</b>.
        </p>
        <p>
          We then asked you <b>{questionText}</b> and you told us <b>{subquestion}</b>, on a scale where <b>{labelText}</b>
        </p>
      </div>
    </>
  );
};
