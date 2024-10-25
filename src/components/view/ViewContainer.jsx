import EducationView from "./EducationView";
import ExperienceView from "./ExperienceView";
import PersonalView from "./PersonalView";

function ViewContainer({ personalState, educations, experiences }) {
  return (
    <div className="view-container">
      <PersonalView personalState={personalState} />

      <div className="heading">Education</div>

      <div className="edu-view">
        {Object.entries(educations).map(([key, edu]) => (
          <EducationView
            key={key}
            school={edu.school}
            degree={edu.degree}
            startDate={edu.startDate}
            endDate={edu.endDate}
            location={edu.location}
          />
        ))}
      </div>
      <div className="heading">Experience</div>
      <div className="edu-view">
        {Object.entries(experiences).map(([key, exp]) => (
          <ExperienceView
            key={key}
            company={exp.company}
            designation={exp.designation}
            startDate={exp.startDate}
            endDate={exp.endDate}
            location={exp.location}
            description={exp.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ViewContainer;
