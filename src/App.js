import "./styles.css";

function createRosterItem(studentName, studentPronouns, studentHS) {
  let rosterItem = (
    <div className="studentRow">
      <div className="studentData name">{studentName}</div>
      <div className="studentData pronouns">{studentPronouns}</div>
      <div className="studentData highschool">{studentHS}</div>
    </div>
  );
  return rosterItem;
}

export default function App() {
  let people = [
    {
      firstName: "Eric",
      lastName: "Salazar",
      Pronouns: "He/His",
      School: "Williamsburg Charter Highschool"
    },
    {
      firstName: "Justin",
      lastName: "Apupalo",
      Pronouns: "He/His",
      School: "NYIT"
    },
    {
      firstName: "Chirstopher",
      lastName: "Bonifacio",
      Pronouns: "He/His",
      School: "Orchard Collegiate Academy"
    }
  ];

  let elements = [];

  elements = people.map(function (person) {
    return createRosterItem(person.firstName + " " + person.lastName);
  });

  return (
    <div className="App">
      <h1>Code Nation Roster</h1>
      {elements}
    </div>
  );
}
