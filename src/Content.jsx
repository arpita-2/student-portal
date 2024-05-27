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
      <Button />
      {dataOfStudents.map((student) => (
        <StudentsData key={student} studData={student} />
      ))}
    </div>
  );
};

export default Content;
