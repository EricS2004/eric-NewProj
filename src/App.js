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
    ["Name", "Pronouns", "School"],
    ["Mikkail Allan", "He/His", "Williamsburg Charter HS"],
    ["Justin Apupalo", "He/His", "NYIT"],
    ["Christopher Bonifacio", "He/His", "Orchard Collegiate Academy"],
    ["Eric Salazar", "He/His", "Williamsburg Charter HS"]
  ];

  let elements = [];

  elements = people.map(function (person) {
    return createRosterItem(person[0], person[1], person[2]);
  });

  return (
    <div className="App">
      <h1>Code Nation Roster</h1>
      {elements}
    </div>
  );
}
