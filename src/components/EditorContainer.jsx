import "../App.css";
import EducationSection from "./EducationSection";
import PersonalSection from "./PersonalSection";

function EditorContainer({
  personalState,
  setPersonal,
  educations,
  newEducation,
  setEducations,
}) {
  return (
    <div className="editor">
      <PersonalSection
        personalState={personalState}
        setPersonal={setPersonal}
      />
      <EducationSection
        educations={educations}
        newEducation={newEducation}
        setEducations={setEducations}
      />
    </div>
  );
}

export default EditorContainer;
