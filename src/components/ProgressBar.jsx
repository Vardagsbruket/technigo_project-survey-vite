export const ProgressBar = ({ currentStep }) => {
  // Making the progress bar dynamic, depending on the current step
  let percentage = (currentStep - 1) * 25;

  return (
    <div className="progressContainer">
      <div className="progressFiller" style={{ width: `${percentage}%` }}></div>
    </div>
  );
};
