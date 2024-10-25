import Accordion from "./Accordion";
import Button from "./button";
import Experience from "./Experience";

function ExperienceSection({ experiences, newExperience, setExperience }) {
  return (
    <Accordion title="Experiences">
      <div className="edu-section">
        {Object.entries(experiences).map(([key, experience]) => {
          return (
            <Experience
              key={key}
              id={key}
              experienceState={experience}
              setExperience={setExperience}
            />
          );
        })}
      </div>
      <Button label="New Education" onClick={newExperience} />
    </Accordion>
  );
}

export default ExperienceSection;
