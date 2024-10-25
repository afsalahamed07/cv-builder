import { useState } from "react";
import "./App.css";
import EditorContainer from "./components/editor/EditorContainer";
import ViewContainer from "./components/view/ViewContainer";

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

  let [experiences, setExperiences] = useState({
    [id1]: {
      company: "University of Westminster",
      designation: "BEng Software Engineering",
      startDate: "01/09/2020",
      endDate: "01/09/2024",
      location: "London, UK",
      description:
        "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
    },
    [id2]: {
      company: "University of Westminster",
      designation: "MEng Software Engineering",
      startDate: "01/09/2020",
      endDate: "01/09/2024",
      location: "London, UK",
      description:
        "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
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

  function newExperience() {
    const id = crypto.randomUUID();
    const experience = {
      id: crypto.randomUUID(),
      company: "University of Westminster",
      deisgnation: "BEng Software Engineering",
      startDate: "01/09/2020",
      endDate: "01/09/2024",
      location: "London, UK",
    };

    setExperiences((prev) => ({ ...prev, [id]: experience }));
  }

  return (
    <div className="main-container">
      <EditorContainer
        personalState={personalState}
        setPersonal={setPersonal}
        educations={educations}
        newEducation={newEducation}
        setEducations={setEducations}
        experiences={experiences}
        setExperience={setExperiences}
        newExperience={newExperience}
      />
      <ViewContainer
        personalState={personalState}
        educations={educations}
        experiences={experiences}
      />
    </div>
  );
}

export default App;
