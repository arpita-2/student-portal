import React from "react";

const Grade = ({ setGrade, grade }) => {
  const handleRadioChange = (event) => {
    const radioChangeFilter = Number(event.target.value);
    setGrade(radioChangeFilter);
  };

  return (
    <div className="grade-filter">
      <h3>Grades Filter</h3>
      <div>
        <input
          type="radio"
          id="grade10"
          name="grade"
          value="10"
          onClick={handleRadioChange}
          checked={grade === 10}
        />
        <label htmlFor="grade10">10 Grade</label>
      </div>
      <div>
        <input
          type="radio"
          id="grade11"
          name="grade"
          value="11"
          onClick={handleRadioChange}
          checked={grade === 11}
        />
        <label htmlFor="grade11">11 Grade</label>
      </div>
      <div>
        <input
          type="radio"
          id="grade12"
          name="grade"
          value="12"
          onClick={handleRadioChange}
          checked={grade === 12}
        />
        <label htmlFor="grade12">12 Grade</label>
      </div>
    </div>
  );
};

export default Grade;
