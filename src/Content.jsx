import { dataOfStudents } from "./utils/mockdata";
import Search from "./components/Search";
import Button from "./components/Button";

//navigation bar

export const NavigationBar = () => {
  return (
    <div>
      <nav className="nav">
        <div className="main-title">
          Student Portal
        </div>

        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

//filter section

export const Filter = () => {
  return (
    <div className="filter-card">
      <div className="filter-section">

      <div className="order-buttons">
          <button>A-Z</button>
          <button>Z-A</button>
        </div>


        <div className="percentage-filter">
          <label htmlFor="percentage-slider">Percentage Filter</label>
          <input
            type="range"
            id="percentage-slider"
            min="0"
            max="100" 
            defaultValue="50"
          />
        </div>

      </div>
      </div>
  )
}

export const StudentsData = (props) => {
  //stuData is prop. Then did destructuring of prop.
  const { studData } = props;
  const { name, grade, percentage, sports, careerChoices } = studData;

  return (
    <div>
      <card>
        <h3>{name}</h3>
        <h4>{sports.join(", ")}</h4>
        <h4>{careerChoices.join(", ")}</h4>
        <p>Grade {grade}</p>
        <p>{percentage}%</p>
      </card>
    </div>
  );
};

const Content = () => {
  return (
    <div className="content">
      <NavigationBar />
      <Search />
      {dataOfStudents.map((student) => (
        <StudentsData key={student} studData={student} />
      ))}
    </div>
  );
};

export default Content;
