import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import PersonalSection from "./PersonalSection";

function EditorContainer({
  personalState,
  setPersonal,
  educations,
  newEducation,
  setEducations,
  experiences,
  newExperience,
  setExperience,
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
      <ExperienceSection
        experiences={experiences}
        newExperience={newExperience}
        setExperience={setExperience}
      />
    </div>
  );
}

export default EditorContainer;
