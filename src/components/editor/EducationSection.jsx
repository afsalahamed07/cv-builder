import Accordion from "./Accordion";
import Button from "./button";
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
        <Button label="New Education" newEducation={newEducation} />
      </div>
    </Accordion>
  );
}

export default EducationSection;
