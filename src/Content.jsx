import "./Content.css";


import { dataOfStudents } from "./utils/mockdata";
import Search from "./components/Search";
import { useState } from "react";



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

export const Filter = ({setPercentage, percentage}) => {
  const handlePercentageChange = (event) => {
    const percentageVal = Number(event.target.value);
    setPercentage(percentageVal);
  }


  return (
    <div className="filter-card">
      <div className="filter-section">

      
      <div className="order-buttons">
        <button >A-Z</button>
        <button >Z-A</button>
      </div>


        <div className="percentage-filter">
          <label htmlFor="percentage-slider">Percentage Filter</label>
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


        <div className="grade-filter">
          <h3>Grades Filter</h3>
          <div>
            <input type="radio" id="grade10" name="grade" value="10" />
            <label htmlFor="grade10">10 Grade</label>
          </div>
          <div>
            <input type="radio" id="grade11" name="grade" value="11" />
            <label htmlFor="grade11">11 Grade</label>
          </div>
          <div>
            <input type="radio" id="grade12" name="grade" value="12" />
            <label htmlFor="grade12">12 Grade</label>
          </div>
        </div>

        <div className="sports-filter">
          <h3>Sports Filter</h3>
          <div>
            <input type="checkbox" id="cricket" name="sports" value="Cricket" />
            <label htmlFor="cricket">Cricket</label>
          </div>
          <div>
            <input type="checkbox" id="chess" name="sports" value="Chess" />
            <label htmlFor="chess">Chess</label>
          </div>
          <div>
            <input type="checkbox" id="tennis" name="sports" value="Tennis" />
            <label htmlFor="tennis">Tennis</label>
          </div>

          <div>
            <input type="checkbox" id="tennis" name="sports" value="Tennis" />
            <label htmlFor="tennis">Basket Ball</label>
          </div>

          <div>
            <input type="checkbox" id="tennis" name="sports" value="Tennis" />
            <label htmlFor="tennis">Badminton</label>
          </div>
          </div>

          <button className="clear-filters">Clear Filters</button>




      </div>
      </div>
  );
};




export const StudentsData = ({percentage}) => {
  //stuData is prop. Then did destructuring of prop.
  //const { studData } = props;
  //const { name, grade, percentage, sports, careerChoices } = studData;

  const [studentName, setStudentName] = useState(dataOfStudents);

  const percentageFilteredData = dataOfStudents.filter(
    (student) => student.percentage >= percentage
  );

  console.log(percentageFilteredData);

  

  // const sortAscending = () => {
  //   const sorted = [...dataOfStudents].sort((a, b) => a.name.localeCompare(b.name));
  //   setStudentName(sorted);
  // };

  // const sortDescending = () => {
  //   const sorted = [...dataOfStudents].sort((a, b) => b.name.localeCompare(a.name));
  //   setStudentName(sorted);
  // };


  return (
    <div className="student-list-card">

      <Search />
      <div className="student-count">Students - {dataOfStudents.length}</div>

      <ul>
      {percentageFilteredData.map((student, index) => (
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
              <p className="student-sports">Sports: {student.sports.join(", ")}</p>
              <p className="career-choices">Career Choices: {student.careerChoices.join(", ")}</p>
              </div>


              <div className="student-grade-container">
              <p className="student-grade">Grade: {student.grade}</p>
              <p className="student-percentage">Percentage: {student.percentage}%</p>
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
  return (
    <div className="content">
      <NavBar />
       
       <div className="two-cards">
        <Filter setPercentage = {setPercentage}
        percentage={percentage}/>
        <StudentsData percentage = {percentage} />

      </div>
    </div>
  );
};

export default Content;
