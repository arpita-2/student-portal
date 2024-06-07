import "./Content.css";

import { dataOfStudents } from "./utils/mockdata";
import Search from "./components/Search";
import PercentagOfStudent from "./components/Percentage";
import Grade from "./components/Grade";

import { useState } from "react";
import OrderButtons from "./components/AscDsc";

//navigation bar

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#">Student portal</a>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
//filter section

export const Filter = ({
  setPercentage,
  setGrade,
  setSports,
  setIsAscending,

  percentage,
  grade,
  sports,
}) => {
  const handleSportsFilter = (event) => {
    const sportsFilter = event.target.checked;
    const sportsValue = event.target.value;

    if (sportsFilter) {
      setSports([...sports, sportsValue]);
    } else {
      setSports(sports.filter((sport) => sport !== sportsValue));
    }
  };

  const handleClearFilterButton = () => {
    setPercentage(50);
    setGrade(null);
    setSports([]);
    setIsAscending(true);
  };

  return (
    <div className="filter-card">
      <div className="filter-section">
        <OrderButtons setIsAscending={setIsAscending} />
        <PercentagOfStudent
          setPercentage={setPercentage}
          percentage={percentage}
        />
        <Grade setGrade={setGrade} grade={grade} />

        <div className="sports-filter">
          <h3>Sports Filter</h3>
          <div>
            <input
              type="checkbox"
              id="cricket"
              name="sports"
              value="Cricket"
              onChange={handleSportsFilter}
              checked={sports.includes("Cricket")}
            />
            <label htmlFor="cricket">Cricket</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="chess"
              name="sports"
              value="Chess"
              onChange={handleSportsFilter}
              checked={sports.includes("Chess")}
            />
            <label htmlFor="chess">Chess</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="tennis"
              name="sports"
              value="Tennis"
              onChange={handleSportsFilter}
              checked={sports.includes("Tennis")}
            />
            <label htmlFor="tennis">Tennis</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="basket"
              name="sports"
              value="Basket"
              onChange={handleSportsFilter}
              checked={sports.includes("Basket")}
            />
            <label htmlFor="basket">Basket Ball</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="badminton"
              name="sports"
              value="Badminton"
              onChange={handleSportsFilter}
              checked={sports.includes("Badminton")}
            />
            <label htmlFor="badminton">Badminton</label>
          </div>
        </div>

        <button className="clear-filters" onClick={handleClearFilterButton}>
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export const StudentsData = ({
  percentage,
  grade,
  sports,
  searchFilter,
  setSearchFilter,
  isAscending,
}) => {
  //stuData is prop. Then did destructuring of prop.
  //const { studData } = props;
  //const { name, grade, percentage, sports, careerChoices } = studData;

  const percentageFilteredData = dataOfStudents.filter(
    (student) => student.percentage >= percentage
  );

  const gradeFilterData = grade
    ? percentageFilteredData.filter((student) => student.grade === grade)
    : percentageFilteredData;

  const sortingData = isAscending
    ? gradeFilterData.sort((a, b) => a.name.localeCompare(b.name))
    : gradeFilterData.sort((a, b) => b.name.localeCompare(a.name));

  const searchFilterData = searchFilter
    ? sortingData.filter((student) =>
        student.name.toLowerCase().includes(searchFilter.toLowerCase())
      )
    : sortingData;

  const sportsFilterData =
    sports.length > 0
      ? searchFilterData.filter(
          (student) => sports.every((sport) => student.sports.includes(sport))
          // .includes is a method to check whether that particular value is present or not. if it is not present
          //on that particular array, it returns false.
          //.every array method is used to check whether it is satisfying the condition or not
        )
      : searchFilterData;

  return (
    <div className="student-list-card">
      <Search setSearchFilter={setSearchFilter} />
      <div className="student-count">Students - {searchFilterData.length}</div>

      <ul>
        {sportsFilterData.map((student, index) => (
          <li key={index} className="student-card">
            <div className="student-info-container">
              <div className="avatar">
                <img
                  src={`https://i.pravatar.cc/50?img=${index + 1}`}
                  alt="Avatar"
                />
              </div>
              <div className="student-info">
                <h3>{student.name}</h3>
                <p className="student-sports">
                  Sports: {student.sports.join(", ")}
                </p>
                <p className="career-choices">
                  Career Choices: {student.careerChoices.join(", ")}
                </p>
              </div>

              <div className="student-grade-container">
                <p className="student-grade">Grade: {student.grade}</p>
                <p className="student-percentage">
                  Percentage: {student.percentage}%
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Content = () => {
  const [percentage, setPercentage] = useState(50);
  const [grade, setGrade] = useState(null);
  const [sports, setSports] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [isAscending, setIsAscending] = useState(true);

  return (
    <div className="content">
      <NavBar />

      <div className="two-cards">
        <Filter
          setPercentage={setPercentage}
          setGrade={setGrade}
          setSports={setSports}
          percentage={percentage}
          grade={grade}
          sports={sports}
          setIsAscending={setIsAscending}
          isAscending={isAscending}
        />

        <StudentsData
          percentage={percentage}
          grade={grade}
          sports={sports}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
          isAscending={isAscending}
        />
      </div>
    </div>
  );
};

export default Content;
