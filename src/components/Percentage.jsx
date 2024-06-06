import React from "react";

const PercentagOfStudent = ({ setPercentage, percentage }) => {
  const handlePercentageChange = (event) => {
    const percentageVal = Number(event.target.value);
    setPercentage(percentageVal);
  };

  return (
    <div className="percentage-filter">
      <label htmlFor="percentage-slider">Percentage Filter: {percentage}</label>

      <input
        type="range"
        id="percentage-slider"
        min="0"
        max="100"
        defaultValue="50"
        value={percentage}
        onChange={handlePercentageChange}
      />
    </div>
  );
};

export default PercentagOfStudent;
