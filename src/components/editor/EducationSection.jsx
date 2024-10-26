import Accordion from "./Accordion";
import Button from "./Button";
import Education from "./Education";

function EducationSection({ educations, newEducation, setEducations }) {
  return (
    <Accordion title="Education">
      <div className="edu-section">
        {Object.entries(educations).map(([key, education]) => {
          return (
            <Education
              key={key}
              id={key}
              educationState={education}
              setEducations={setEducations}
            />
          );
        })}
      </div>
      <Button label="New Education" onClick={newEducation} />
    </Accordion>
  );
}

export default EducationSection;
