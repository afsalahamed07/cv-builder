import "../App.css";
import PersonalSection from "./PersonalSection";

function EditorContainer({ personalState, setPersonal }) {
  return (
    <div className="editor">
      <PersonalSection
        personalState={personalState}
        setPersonal={setPersonal}
      />
    </div>
  );
}

export default EditorContainer;
