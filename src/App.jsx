import { useState } from "react";
import "./App.css";
import EditorContainer from "./components/EditorContainer";
import ViewContainer from "./components/ViewContainer";

function App() {
  const [personalState, setPersonal] = useState({
    id: crypto.randomUUID(),
    firstName: "Kumar",
    lastName: "Sangakkara",
    email: "kumar@lk.com",
    phone: "+94 0001278",
    address: "Colombo, LK",
  });

  const id1 = crypto.randomUUID();
  const id2 = crypto.randomUUID();

  let [educations, setEducations] = useState({
    [id1]: {
      school: "University of Westminster",
      degree: "BEng Software Engineering",
      startDate: "01/09/2020",
      endDate: "01/09/2024",
      location: "London, UK",
    },
    [id2]: {
      school: "University of Westminster",
      degree: "MEng Software Engineering",
      startDate: "01/09/2020",
      endDate: "01/09/2024",
      location: "London, UK",
    },
  });

  function newEducation() {
    const id = crypto.randomUUID();
    const education = {
      id: crypto.randomUUID(),
      school: "University of Westminster",
      degree: "BEng Software Engineering",
      startDate: "01/09/2020",
      endDate: "01/09/2024",
      location: "London, UK",
    };

    setEducations((prev) => ({ ...prev, [id]: education }));
  }

  return (
    <div className="main-container">
      <EditorContainer
        personalState={personalState}
        setPersonal={setPersonal}
        educations={educations}
        newEducation={newEducation}
        setEducations={setEducations}
      />
      <ViewContainer personalState={personalState} educations={educations} />
    </div>
  );
}

export default App;
