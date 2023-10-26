export const ProgressBar = ({ currentStep }) => {
  // Select percentage depending on current step
  let percentage = 0;
  switch (currentStep) {
    case 1:
      percentage = 25;
      break;
    case 2:
      percentage = 50;
      break;
    case 3:
      percentage = 75;
      break;
    case 4:
      percentage = 100;
      break;
    default:
      percentage = 0;
  }

  return (
    <div className="progressContainer">
      <div className="progressFiller" style={{ width: `${percentage}%` }}></div>
    </div>
  );
};
