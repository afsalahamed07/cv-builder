import { useState } from "react";
import "./App.css";
import EditorContainer from "./components/EditorContainer";
import ViewContainer from "./components/ViewContainer";

function App() {
  const [personalState, setPersonal] = useState({
    firstName: "Kumar",
    lastName: "Sangakkara",
    email: "kumar@lk.com",
    phone: "+94 0001278",
    address: "Colombo, LK",
  });

  return (
    <div className="main-container">
      <EditorContainer
        personalState={personalState}
        setPersonal={setPersonal}
      />
      <ViewContainer personalState={personalState} />
    </div>
  );
}

export default App;
