import EducationView from "./EducationView";
import PersonalView from "./PersonalView";

function ViewContainer({ personalState, educations }) {
  return (
    <div className="view-container">
      <PersonalView personalState={personalState} />

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
    </div>
  );
}

export default ViewContainer;
